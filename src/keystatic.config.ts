import { config } from "@keystatic/core";
import collectionsRecipe from "@/keystatic/collections/recipe";

export default config({
  storage: {
    kind: "github",
    repo: "EduNunesGithub/Recipe-Page",
  },
  collections: {
    collectionsRecipe,
  },
});
