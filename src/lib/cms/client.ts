import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from "./env";

function getConfiguredProjectId() {
  if (!projectId) {
    throw new Error("Sanity project is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID.");
  }

  return projectId;
}

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: getConfiguredProjectId(),
      dataset,
      apiVersion,
      useCdn,
    })
  : null;
