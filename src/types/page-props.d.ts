export {};

declare global {
  type PageProps = {
    "|recipe|${slug}": {
      params: Promise<{ slug: string }>;
    };
  };

  type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
}
