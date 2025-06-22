import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { reader } from "@/keystatic/reader";

const Page = async (props: PageProps["|recipe|${slug}"]) => {
  const slug = (await props.params).slug;
  const recipe = await reader.collections.collectionsRecipe.read(slug, {
    resolveLinkedFiles: true,
  });

  if (!recipe) throw new Error();

  return (
    <main
      className={twMerge(
        "auto-rows-min grid grid-cols-1 place-items-center w-full",
        "sm:px-10 sm:py-32",
      )}
    >
      <article
        className={twMerge(
          "auto-rows-min bg-white grid grid-cols-1 pb-8 overflow-hidden place-items-center text-left w-full",
          "sm:max-w-150 sm:p-10 sm:rounded-3xl",
          "md:max-w-185",
        )}
      >
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
          <div
            className={twMerge(
              "auto-rows-min bg-snow gap-4 grid grid-cols-1 mb-8 p-6 rounded-xl w-[calc(100%-4rem)]",
              "sm:w-full",
            )}
          >
            <h2 className="h3 text-dark-raspberry">Preparation time</h2>

            <ul className="auto-rows-min gap-2 grid grid-cols-1 w-full">
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
        )}

        {recipe["section-ingredients"].ingredients.length !== 0 && (
          <>
            <h2 className={twMerge("mb-6 px-8 text-brandy-red", "sm:px-0")}>
              Ingredients
            </h2>

            <ul
              className={twMerge(
                "auto-rows-min gap-2 grid grid-cols-1 mb-8 px-8 text-wenge-brown w-full",
                "sm:px-0",
              )}
            >
              {recipe["section-ingredients"].ingredients.map(
                (ingredient, index) => (
                  <li key={index}>
                    <div className="inline-block w-full">{ingredient}</div>
                  </li>
                ),
              )}
            </ul>
          </>
        )}

        <div
          className={twMerge(
            "border-b-[0.0625rem] border-b-white-coffee flex mb-8 w-[calc(100%-4rem)]",
            "sm:w-full",
          )}
        />

        {recipe["section-instructions"].instructions.length !== 0 && (
          <>
            <h2 className={twMerge("mb-6 px-8 text-brandy-red", "sm:px-0")}>
              Instructions
            </h2>

            <ol
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
        )}

        <div
          className={twMerge(
            "border-b-[0.0625rem] border-b-white-coffee flex mb-8 w-[calc(100%-4rem)]",
            "sm:w-full",
          )}
        />

        {recipe["section-nutrition"].nutrition.length !== 0 && (
          <>
            <h2 className={twMerge("mb-6 px-8 text-brandy-red", "sm:px-0")}>
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
              <table className="relative">
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
        )}
      </article>
    </main>
  );
};

export default Page;
