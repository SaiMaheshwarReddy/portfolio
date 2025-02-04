import {
  IProject,
  parseContentfulContentImage,
  ProjectEntry,
  TypeProjectSkeleton,
} from "@/app/types";
import {
  Asset,
  createClient,
  EntriesQueries,
  Entry,
  EntrySkeletonType,
} from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });
};
const client = createContentClient();

export const getBlogEntries = async <T extends EntrySkeletonType>(
  type: string
): Promise<Entry<T>[]> => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items as Entry<T>[];
};
type Custom = EntriesQueries<TypeProjectSkeleton, undefined> & {
  order: string; // Add the specific query key
};
export const getProjectEntries = async (
  limit?: number
): Promise<IProject[]> => {
  const query: Custom = {
    content_type: "project",
    order: "-fields.projectDate",
    limit,
  };
  const response = await client.getEntries<TypeProjectSkeleton>(query);

  return response.items.map(
    (projectEntry) => parseContentfulProject(projectEntry) as IProject
  );
};

export const getBlogPosts = async () => {
  const results = await getBlogEntries("blogPost");
  const blogPosts = results.map((blog) => blog.fields);
  return blogPosts;
};
type CustomProjectQuery = EntriesQueries<TypeProjectSkeleton, undefined> & {
  "fields.slug[match]": string; // Add the specific query key
};
export const getProjectEntryBySlug = async (
  slug: string
): Promise<IProject | null> => {
  const query: CustomProjectQuery = {
    content_type: "project",
    "fields.slug[match]": slug,
  };
  const response = await client.getEntries<TypeProjectSkeleton>(query);
  return response.items.map(
    (projectEntry) => parseContentfulProject(projectEntry) as IProject
  )[0];
};

export const getFileUrl = async (assetId: string): Promise<string> => {
  const asset: Asset<undefined, string> = await client.getAsset(assetId);
  const fileUrl = asset.fields?.file?.url; // Adjust this path based on your content model
  return `https:${fileUrl}`;
};

function parseContentfulProject(projectEntry?: ProjectEntry): IProject | null {
  if (!projectEntry) {
    return null;
  }

  return {
    projectExcerpt: projectEntry.fields.projectExcerpt,
    projectName: projectEntry.fields.projectName,
    primaryImage: parseContentfulContentImage(projectEntry.fields.primaryImage),
    projectDate: projectEntry.fields.projectDate,
    slug: projectEntry.fields.slug,
    content: projectEntry.fields.content,
    tags: projectEntry.fields.tags,
    tagLine: projectEntry.fields.tagLine,
    // image: parseContentfulContentImage(blogPostEntry.fields.image),
  };
}
