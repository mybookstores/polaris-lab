import { loadEnvConfig } from "@next/env";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "next-sanity";
import { papers, researchDirections, teamMembers } from "../src/data";
import { directionContent } from "../src/data/direction-content";

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dev = process.env.NODE_ENV !== "production";
loadEnvConfig(projectDir, dev, { info: () => null, error: console.error });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-06";

if (!projectId || !token) {
  throw new Error("Missing Sanity credentials. Please set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

type LocalizedValue = {
  zh: string;
  en: string;
};

type MigratableSubdirectionContent = {
  label: LocalizedValue;
  description: LocalizedValue;
};

type MigratableDirectionContent = {
  label: LocalizedValue;
  description: LocalizedValue;
  memberIds: readonly string[];
  subdirections: Record<string, MigratableSubdirectionContent>;
};

async function migrateDirections() {
  const documents = researchDirections.map((direction, index) => {
    const content = directionContent[direction.id as keyof typeof directionContent];

    return {
      _id: `researchDirection.${direction.id}`,
      _type: "researchDirection",
      id: direction.id,
      title: content?.label || { zh: direction.name, en: direction.name },
      slug: { _type: "slug", current: direction.id },
      icon: direction.icon,
      color: direction.color,
      description: content?.description || { zh: "", en: "" },
      subdirections: direction.subdirections.map((subdirection) => {
        const subdirections = content?.subdirections as
          | Record<string, MigratableSubdirectionContent>
          | undefined;
        const subContent = subdirections?.[subdirection.id];

        return {
          _type: "subdirection",
          id: subdirection.id,
          label: subContent?.label || { zh: subdirection.name, en: subdirection.name },
          description: subContent?.description || { zh: "", en: "" },
        };
      }),
      order: index,
      status: "published",
    };
  });

  for (const document of documents) {
    await client.createOrReplace(document);
  }
}

async function migratePapers() {
  for (const paper of papers) {
    await client.createOrReplace({
      _id: `paper.${paper.id}`,
      _type: "paper",
      legacyId: paper.id,
      title: paper.title,
      authors: paper.authors,
      year: paper.year,
      venue: paper.venue,
      abstract: paper.abstract,
      citations: paper.citations,
      link: paper.link === "#" ? undefined : paper.link,
      direction: {
        _type: "reference",
        _ref: `researchDirection.${paper.direction}`,
      },
      status: "published",
    });
  }
}

async function migrateMembers() {
  for (const member of teamMembers) {
    const directionEntries = Object.entries(directionContent) as Array<
      [string, MigratableDirectionContent]
    >;
    const directions = directionEntries
      .filter(([, content]) => content.memberIds.includes(member.id))
      .map(([directionId]) => ({
        _type: "reference",
        _ref: `researchDirection.${directionId}`,
      }));

    await client.createOrReplace({
      _id: `teamMember.${member.id}`,
      _type: "teamMember",
      legacyId: member.id,
      name: member.name,
      role: member.role,
      title: member.title,
      research: member.research,
      bio: {
        zh: member.bio,
        en: member.bio,
      },
      email: member.email,
      avatar: member.avatar,
      directions,
      status: "published",
    });
  }
}

async function main() {
  console.log("Migrating research directions...");
  await migrateDirections();
  console.log("Migrating papers...");
  await migratePapers();
  console.log("Migrating team members...");
  await migrateMembers();
  console.log("Sanity content migration complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
