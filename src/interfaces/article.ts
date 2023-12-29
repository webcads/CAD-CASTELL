// interfaces/article.ts

export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          url: string;
          // Add other necessary image properties here
        };
      } | null;
    };
  };
}
