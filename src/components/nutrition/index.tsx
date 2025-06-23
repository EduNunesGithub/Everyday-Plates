import { twMerge } from "tailwind-merge";
import React from "react";

export type NutritionProps = {
  recipe: Recipe;
};

export const Nutrition = ({ recipe }: NutritionProps) => {
  const id = React.useId();

  return (
    <>
      <h2
        className={twMerge("mb-6 px-8 text-brandy-red", "sm:px-0")}
        id={`${id}-nutrition`}
      >
        Nutrition
      </h2>

      <p className={twMerge("mb-6 px-8 text-wenge-brown", "sm:px-0")}>
        {recipe["section-nutrition"].description}
      </p>

      <div
        className={twMerge(
          "auto-rows-min grid grid-cols-1 overflow-x-auto w-[calc(100%-4rem)]",
          "sm:w-full",
        )}
      >
        <table aria-labelledby={`${id}-nutrition`} className="relative">
          <thead className="absolute h-0 overflow-hidden opacity-0 w-0">
            <tr>
              <th>Informação Nutricional</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {recipe["section-nutrition"].nutrition.map(
              ({ name, value }, index) => (
                <tr key={index}>
                  <td className="text-wenge-brown">
                    <span className="flex shrink-0 w-full">{name}</span>
                  </td>
                  <td className="font-bold text-brandy-red">
                    <span className="flex shrink-0 w-full">{value}</span>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
