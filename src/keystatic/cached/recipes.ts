import React from "react";
import { reader } from "@/keystatic/reader";

export const allRecipe = React.cache(
  async () => await reader.collections.collectionsRecipe.all(),
);

export const listRecipe = React.cache(
  async () => await reader.collections.collectionsRecipe.list(),
);

export const readRecipe = React.cache(
  async (slug: string) =>
    await reader.collections.collectionsRecipe.read(slug, {
      resolveLinkedFiles: true,
    }),
);
