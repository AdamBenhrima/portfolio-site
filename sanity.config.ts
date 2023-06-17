import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "3qu7krt9",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-06-16",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
