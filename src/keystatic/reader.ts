import { createGitHubReader } from "@keystatic/core/reader/github";
import keystaticConfig from "@/keystatic.config";

export const reader = createGitHubReader(keystaticConfig, {
  repo: "EduNunesGithub/Recipe-Page",
  token: process.env.GITHUB_PAT,
});
