import { twMerge } from "tailwind-merge";
import React from "react";

export type IngredientsProps = {
  recipe: Recipe;
};

export const Ingredients = ({ recipe }: IngredientsProps) => {
  const id = React.useId();

  return (
    <>
      <h2
        className={twMerge("mb-6 px-8 text-brandy-red", "sm:px-0")}
        id={`${id}-ingredients`}
      >
        Ingredients
      </h2>

      <ul
        aria-labelledby={`${id}-ingredients`}
        className={twMerge(
          "auto-rows-min gap-2 grid grid-cols-1 mb-8 px-8 text-wenge-brown w-full",
          "sm:px-0",
        )}
      >
        {recipe["section-ingredients"].ingredients.map((ingredient, index) => (
          <li key={index}>
            <div className="inline-block w-full">{ingredient}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
