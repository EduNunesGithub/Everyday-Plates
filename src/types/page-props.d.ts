export {};

declare global {
  export type PageProps = {
    "|recipe|${slug}": {
      params: Promise<{ slug: string }>;
    };
  };
}
