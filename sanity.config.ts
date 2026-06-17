import { deskTool } from "sanity/desk";
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, isSanityConfigured, projectId, studioBasePath } from "./src/lib/cms/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "polaris-lab-cms",
  title: "Polaris Lab CMS",
  projectId: projectId || "demo-project-id",
  dataset,
  basePath: studioBasePath,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev) => (isSanityConfigured ? prev : []),
  },
});
