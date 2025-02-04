import { Document as RichTextDocument } from "@contentful/rich-text-types";

export interface IDevToArticle {
  id: number;
  url: string;
  description: string;
  published_at: string;
  tag_list: string[];
  title: string;
}

export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IProject {
  projectName: string;
  projectExcerpt: string;
  primaryImage: ContentImage | null;
  projectDate: string;
  slug: string;
  content: RichTextDocument | null;
  tags: string[];
  tagLine: string;
}

export type TypeProjectSkeleton = EntrySkeletonType<IProject, "project">;

export type ProjectEntry = Entry<TypeProjectSkeleton, undefined, string>;

import { Asset, AssetLink, Entry, EntrySkeletonType } from "contentful";

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink }
): ContentImage | null {
  if (!asset) {
    return null;
  }

  if (!("fields" in asset)) {
    return null;
  }

  return {
    src: asset.fields.file?.url || "",
    alt: asset.fields.description || "",
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  };
}
