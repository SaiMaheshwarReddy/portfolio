export interface IDevToArticle {
  id: number;
  url: string;
  description: string;
  published_at: string;
  tag_list: string[];
  title: string;
}

export interface IProject {
  projectName: string;
  projectExcerpt: string;
  primaryImage: { fields: { file: { url: string } } };
  projectDate: string;
  slug: string;
  fields: object;
  contentTypeId: string;
}
