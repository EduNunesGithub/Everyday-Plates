import { readRecipe } from "@/keystatic/cached/recipes";

export {};

declare global {
  type Recipe = NonNullable<Awaited<ReturnType<typeof readRecipe>>>;
}
