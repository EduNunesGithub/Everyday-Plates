import { reader } from "@/keystatic/reader";
import Link from "next/link";

const Page = async () => {
  const recipes = await reader.collections.collectionsRecipe.all();

  return (
    <main>
      <ul>
        {recipes.map(({ slug, entry }) => (
          <li>
            <Link href={`/recipe/${slug}`}>{entry["slug-title"]}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
