import { twMerge } from "tailwind-merge";
import React from "react";

export type InstructionsProps = {
  recipe: Recipe;
};

export const Instructions = ({ recipe }: InstructionsProps) => {
  const id = React.useId();

  return (
    <>
      <h2
        className={twMerge("mb-6 px-8 text-brandy-red", "sm:px-0")}
        id={`${id}-instructions`}
      >
        Instructions
      </h2>

      <ol
        aria-labelledby={`${id}-instructions`}
        className={twMerge(
          "auto-rows-min gap-2 grid grid-cols-1 mb-8 px-8 text-wenge-brown w-full",
          "sm:px-0",
        )}
      >
        {recipe["section-instructions"].instructions.map(
          ({ name, value }, index) => (
            <li key={index}>
              <div className="inline-block w-full">
                <strong>{name}:</strong> {value}
              </div>
            </li>
          ),
        )}
      </ol>
    </>
  );
};
