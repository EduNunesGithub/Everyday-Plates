import Image from "next/image";
import { reader } from "@/keystatic/reader";

const Page = async (props: PageProps["|recipe|${slug}"]) => {
  const slug = (await props.params).slug;
  const recipe = await reader.collections.collectionsRecipe.read(slug, {
    resolveLinkedFiles: true,
  });

  if (!recipe) throw new Error();

  console.log(recipe);

  return (
    <main className="auto-rows-min grid grid-cols-1 place-items-center w-full">
      <div>
        {/* <Image
          alt=""
          fill
          sizes="(min-width: 0px) 100vw"
          src={recipe["section-header"].banner}
        /> */}
      </div>
    </main>
  );
};

export default Page;
