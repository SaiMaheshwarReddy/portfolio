// import { IProject } from "@/app/types";
import { IProject } from "@/app/types";
import { getProjectEntries, getProjectEntryBySlug } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";

type PageProps = {
  params: Promise<{
    projectSlug: string; // Matches the dynamic route segment
  }>;
};
export const revalidate = 60;
export const dynamicParams = true;
export async function generateStaticParams(): Promise<
  { projectSlug: string }[]
> {
  const projectsList = await getProjectEntries();
  return projectsList.map((project: IProject) => ({
    projectSlug: project.slug || "",
  }));
}
export default async function Project({ params }: PageProps) {
  const { projectSlug } = await params;
  const project = await getProjectEntryBySlug(projectSlug);
  // const { primaryImage, content, projectName } = project | {}
  return (
    <section className="py-5 lg:px-20 2xl:px-3 xl:px-10 md:px-20 sm:px-5 px-3 flex flex-col md:items-center xl:items-start">
      <div className="gap-5 mt-2">
        <div className="flex flex-col items-center mb-12 gap-4">
          <Image
            alt="Supply Chain"
            src={`https:${project?.primaryImage?.src}`}
            width={800}
            height={460}
          />
          <i>{project?.tagLine}</i>
        </div>
        <div className="mb-4">
          <h1 className="font-bold text-3xl">{project?.projectName}</h1>
        </div>
        <div className="unreset text-gray-800">
          {project?.content && documentToReactComponents(project?.content)}
        </div>
      </div>
    </section>
  );
}
