import { papers, researchDirections, teamMembers } from "@/data";
import { directionContent } from "@/data/direction-content";

export type ContentLanguage = "en" | "zh";

type DirectionId = keyof typeof directionContent;
type ResearchDirection = (typeof researchDirections)[number];
type ResearchSubdirection = ResearchDirection["subdirections"][number];
type Paper = (typeof papers)[number];
type TeamMember = (typeof teamMembers)[number];

type DirectionContentSubdirection = {
  label: Record<ContentLanguage, string>;
  description: Record<ContentLanguage, string>;
};

export type LocalizedSubdirection = Omit<ResearchSubdirection, "name"> & {
  name: string;
  description: string;
};

export type LocalizedDirection = Omit<ResearchDirection, "name" | "subdirections"> & {
  name: string;
  description: string;
  subdirections: LocalizedSubdirection[];
};

function getDirectionContentEntry(directionId: string) {
  return directionContent[directionId as DirectionId];
}

function getSubdirectionContent(
  directionId: string,
  subdirectionId: string
): DirectionContentSubdirection | undefined {
  const content = getDirectionContentEntry(directionId);
  const subdirections = content?.subdirections as
    | Record<string, DirectionContentSubdirection>
    | undefined;

  return subdirections?.[subdirectionId];
}

export function getDirectionById(directionId: string): ResearchDirection | undefined {
  return researchDirections.find((direction) => direction.id === directionId);
}

export function getDirectionColor(directionId: string): string {
  return getDirectionById(directionId)?.color ?? "#3B82F6";
}

export function getDirectionLabel(directionId: string, language: ContentLanguage): string {
  const content = getDirectionContentEntry(directionId);
  return content?.label[language] ?? getDirectionById(directionId)?.name ?? directionId;
}

export function getDirectionDescription(directionId: string, language: ContentLanguage): string {
  const content = getDirectionContentEntry(directionId);
  return content?.description[language] ?? "";
}

export function getSubdirectionLabel(
  directionId: string,
  subdirectionId: string,
  language: ContentLanguage
): string {
  const subdirectionContent = getSubdirectionContent(directionId, subdirectionId);
  const baseSubdirection = getDirectionById(directionId)?.subdirections.find(
    (item) => item.id === subdirectionId
  );

  return subdirectionContent?.label[language] ?? baseSubdirection?.name ?? subdirectionId;
}

export function getSubdirectionDescription(
  directionId: string,
  subdirectionId: string,
  language: ContentLanguage
): string {
  const subdirectionContent = getSubdirectionContent(directionId, subdirectionId);
  return subdirectionContent?.description[language] ?? "";
}

export function getDirections(language: ContentLanguage): LocalizedDirection[] {
  return researchDirections.map((direction): LocalizedDirection => ({
    ...direction,
    name: getDirectionLabel(direction.id, language),
    description: getDirectionDescription(direction.id, language),
    subdirections: direction.subdirections.map(
      (subdirection): LocalizedSubdirection => ({
        ...subdirection,
        name: getSubdirectionLabel(direction.id, subdirection.id, language),
        description: getSubdirectionDescription(direction.id, subdirection.id, language),
      })
    ),
  }));
}

export function getDirectionWithContent(
  directionId: string,
  language: ContentLanguage
): LocalizedDirection | undefined {
  return getDirections(language).find((direction) => direction.id === directionId);
}

export function getDirectionPapers(directionId: string): Paper[] {
  return papers.filter((paper) => paper.direction === directionId);
}

export function getDirectionTeamMembers(directionId: string): TeamMember[] {
  const content = getDirectionContentEntry(directionId);
  const memberIds = new Set<string>(content?.memberIds ?? []);

  return teamMembers.filter((member) => memberIds.has(member.id));
}

export function getAllTeamMembers(): TeamMember[] {
  const memberIds = researchDirections.flatMap(
    (direction) => getDirectionContentEntry(direction.id)?.memberIds ?? []
  );
  const uniqueIds = Array.from(new Set(memberIds));

  return uniqueIds
    .filter(Boolean)
    .map((id) => teamMembers.find((member) => member.id === id))
    .filter((member): member is TeamMember => Boolean(member));
}
