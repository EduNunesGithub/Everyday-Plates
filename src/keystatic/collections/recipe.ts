import { collection, fields } from "@keystatic/core";
import slugify from "slugify";

export default collection({
  label: "Recipes",
  parseSlugForSort: (slug) => `${slug}-timestamp-${new Date().getTime()}`,
  path: "src/keystatic/content/collections/recipes/*",
  schema: {
    "slug-title": fields.slug({
      name: { label: "Title", validation: { isRequired: true } },
    }),
    "section-header": fields.object(
      {
        banner: fields.image({
          directory: "public/keystatic/images/page-home",
          label: "Banner",
          publicPath: "/keystatic/images/page-home",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true },
        }),
      },
      { label: "Section | Header" },
    ),
    "section-preparation-time": fields.object(
      {
        times: fields.array(
          fields.object({
            name: fields.text({
              label: "Name",
              validation: { isRequired: true },
            }),
            value: fields.text({
              label: "Value",
              validation: { isRequired: true },
            }),
          }),
          { label: "Times", itemLabel: (props) => props.fields.name.value },
        ),
      },
      { label: "Section | Preparation Time" },
    ),
    "section-ingredients": fields.object(
      {
        ingredients: fields.array(
          fields.text({ label: "Value", validation: { isRequired: true } }),
          { label: "Ingredients", itemLabel: (props) => props.value },
        ),
      },
      { label: "Section | Ingredients" },
    ),
    "section-instructions": fields.object(
      {
        instructions: fields.array(
          fields.object({
            name: fields.text({
              label: "Name",
              validation: { isRequired: true },
            }),
            value: fields.text({
              label: "Value",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Instructions",
            itemLabel: (props) => props.fields.name.value,
          },
        ),
      },
      { label: "Section | Instructions" },
    ),
    "section-nutrition": fields.object(
      {
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        nutrition: fields.array(
          fields.object({
            name: fields.text({
              label: "Name",
              validation: { isRequired: true },
            }),
            value: fields.text({
              label: "Value",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Nutritional Values",
            itemLabel: (props) => props.fields.name.value,
          },
        ),
      },
      { label: "Section | Nutrition" },
    ),
  },
  slugField: "slug-title",
});
