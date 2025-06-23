import { twMerge } from "tailwind-merge";
import React from "react";

export type PreparationTimeProps = {
  recipe: Recipe;
};

export const PreparationTime = ({ recipe }: PreparationTimeProps) => {
  const id = React.useId();

  return (
    <div
      className={twMerge(
        "auto-rows-min bg-snow gap-4 grid grid-cols-1 mb-8 p-6 rounded-xl w-[calc(100%-4rem)]",
        "sm:w-full",
      )}
    >
      <h2 className="h3 text-dark-raspberry" id={`${id}-preparation-time`}>
        Preparation time
      </h2>

      <ul
        aria-labelledby={`${id}-preparation-time`}
        className="auto-rows-min gap-2 grid grid-cols-1 w-full"
      >
        {recipe["section-preparation-time"].times.map(
          ({ name, value }, index) => (
            <li className="text-wenge-brown w-full" key={index}>
              <div className="inline-block w-full">
                <span>{name}:</span> {value}
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
