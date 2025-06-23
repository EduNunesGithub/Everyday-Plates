import React from "react";
import { reader } from "@/keystatic/reader";

export const listRecipe = React.cache(async () =>
  reader.collections.collectionsRecipe.list(),
);

export const readRecipe = React.cache(async (slug: string) =>
  reader.collections.collectionsRecipe.read(slug, { resolveLinkedFiles: true }),
);
