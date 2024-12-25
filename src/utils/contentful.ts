import { IProject } from "@/app/types";
import { createClient, Entry, EntrySkeletonType } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });
};
const client = createContentClient();

export const getEntriesByType = async <T extends EntrySkeletonType>(
  type: string
): Promise<Entry<T>[]> => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items as Entry<T>[];
};

export const getBlogPosts = async () => {
  const results = await getEntriesByType("blogPost");
  const blogPosts = results.map((blog) => blog.fields);
  return blogPosts;
};

export const getEntryBySlug = async (slug: string, type: string) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

export const getProjects = async (): Promise<Partial<IProject>[]> => {
  const results = await getEntriesByType<IProject>("project");
  const projects: Partial<IProject>[] = results.map((blog) => blog.fields);
  return projects;
};
