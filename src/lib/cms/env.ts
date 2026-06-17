export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-06";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const studioBasePath = "/studio";
export const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true";
export const isSanityConfigured = Boolean(projectId);
