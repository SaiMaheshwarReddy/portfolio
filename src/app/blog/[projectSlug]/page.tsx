import { getEntryBySlug } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const slug = await params.slug;
  const project = await getEntryBySlug(slug, "project");
  const { primaryImage, content, projectName } = project.fields;
  return (
    <section className="py-5 lg:px-20 2xl:px-3 xl:px-10 md:px-20 sm:px-5 px-3 flex flex-col md:items-center xl:items-start">
      <div className="mb-4">
        <h1 className="font-bold text-3xl">{projectName}</h1>
      </div>

      <div className=" gap-5 mt-2">
        <Image
          alt="Supply Chain"
          className="mx-auto"
          src={`https:${primaryImage?.fields?.file?.url}`}
          width={800}
          height={460}
        />
        <i>Making supply/demand planning simple and efficient.</i>

        <div className="unreset">{documentToReactComponents(content)}</div>
      </div>
    </section>
  );
};

export default page;
