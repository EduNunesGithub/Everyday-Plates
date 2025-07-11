import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Ingredients } from "@/components/ingredients";
import { Instructions } from "@/components/instructions";
import { Nutrition } from "@/components/nutrition";
import { PreparationTime } from "@/components/preparation-time";
import { listRecipe, readRecipe } from "@/keystatic/cached/recipes";

export const revalidate = 600;

export async function generateMetadata({
  params,
}: PageProps["|recipe|${slug}"]): Promise<Metadata> {
  const slug = (await params).slug;
  const recipe = await readRecipe(slug);
  if (!recipe) return {};
  return {
    description: recipe["section-header"].description,
    title: `Everyday Plates | ${recipe["slug-title"]}`,
  };
}

export async function generateStaticParams(): Promise<
  Awaited<PageProps["|recipe|${slug}"]["params"]>[]
> {
  const recipes = await listRecipe();
  if (!recipes) return [];
  return recipes.map((recipe) => ({
    slug: recipe,
  }));
}

const Page = async (props: PageProps["|recipe|${slug}"]) => {
  const slug = (await props.params).slug;
  const recipe = await readRecipe(slug);
  const recipes = await listRecipe();

  if (!recipe) return notFound();

  return (
    <main
      className={twMerge(
        "auto-rows-min grid grid-cols-1 place-items-center w-full",
        "sm:px-10 sm:py-32",
      )}
    >
      <article
        className={twMerge(
          "auto-rows-min bg-white grid grid-cols-1 pb-8 place-items-center relative text-left w-full z-0",
          "sm:max-w-150 sm:p-10 sm:rounded-3xl",
          "md:max-w-185",
        )}
      >
        {recipes.length >= 2 && (
          <Link
            className={twMerge(
              "bg-white duration-200 ease-in-out fixed flex items-center left-8 min-h-10 px-4 py-1 rounded-xl shadow-md text-center top-8 w-fit z-10",
              "sm:absolute sm:left-0 sm:-top-21",
              "hover:brightness-75",
            )}
            href="/"
          >
            Home
          </Link>
        )}

        <div
          className={twMerge(
            "h-43 mb-10 overflow-hidden relative w-full",
            "sm:h-75 sm:rounded-xl",
          )}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            loading="eager"
            priority
            sizes="(min-width: 0px) 100vw"
            src={recipe["section-header"].banner}
          />
        </div>

        <h1 className={twMerge("mb-6 px-8 text-dark-charcoal", "sm:px-0")}>
          {recipe["slug-title"]}
        </h1>

        <p className={twMerge("mb-8 px-8 text-wenge-brown", "sm:px-0")}>
          {recipe["section-header"].description}
        </p>

        {recipe["section-preparation-time"].times.length !== 0 && (
          <PreparationTime recipe={recipe} />
        )}

        {recipe["section-ingredients"].ingredients.length !== 0 && (
          <Ingredients recipe={recipe} />
        )}

        <div
          className={twMerge(
            "border-b-[0.0625rem] border-b-white-coffee flex mb-8 w-[calc(100%-4rem)]",
            "sm:w-full",
          )}
        />

        {recipe["section-instructions"].instructions.length !== 0 && (
          <Instructions recipe={recipe} />
        )}

        <div
          className={twMerge(
            "border-b-[0.0625rem] border-b-white-coffee flex mb-8 w-[calc(100%-4rem)]",
            "sm:w-full",
          )}
        />

        {recipe["section-nutrition"].nutrition.length !== 0 && (
          <Nutrition recipe={recipe} />
        )}
      </article>
    </main>
  );
};

export default Page;
