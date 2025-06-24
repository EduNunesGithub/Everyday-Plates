import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { allRecipe } from "@/keystatic/cached/recipes";

export const metadata: Metadata = {
  title: "Everyday Plates | Delicious Recipes for Every Taste",
  description:
    "Explore a variety of easy and delicious recipes for every taste and skill level. Find inspiration for quick meals, comfort food, and creative dishes.",
};

const Page = async () => {
  const recipes = await allRecipe();

  if (recipes.length === 1) redirect(`/recipe/${recipes[0].slug}`);

  return (
    <main
      className={twMerge(
        "auto-rows-min grid grid-cols-1 place-items-center w-full",
        "sm:px-10 sm:py-32",
      )}
    >
      <article
        className={twMerge(
          "auto-rows-min bg-white grid grid-cols-1 p-8 place-items-center relative text-left w-full z-0",
          "sm:max-w-150 sm:p-10 sm:rounded-3xl",
          "md:max-w-185",
        )}
      >
        <h1 className="mb-6 text-dark-charcoal">
          Delicious Recipes for Every Occasion
        </h1>

        <p className="mb-8 text-wenge-brown">
          Discover a wide variety of easy and delicious recipes for every taste
          and skill level. Whether you&apos;re looking for quick meals,
          comforting classics, or something new to try, you&apos;ll find
          inspiration here. Start exploring and enjoy cooking!
        </p>

        <nav
          className={twMerge(
            "auto-rows-min gap-6 grid grid-cols-1 place-items-center w-full",
            "md:grid-cols-2",
          )}
        >
          {recipes.map(({ entry, slug }, index) => (
            <Link
              className={twMerge(
                "auto-rows-min duration-200 ease-in-out grid grid-cols-1 overflow-hidden rounded-xl shadow-md w-full",
                "hover:shadow-xl",
              )}
              href={`/recipe/${slug}`}
              key={index}
            >
              <Image
                alt=""
                className="h-50 object-cover w-full"
                height={200}
                loading={index < 2 ? "eager" : "lazy"}
                priority={index < 2}
                src={entry["section-header"].banner}
                width={300}
              />

              <span className="my-6 px-6">{entry["slug-title"]}</span>
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
};

export default Page;
