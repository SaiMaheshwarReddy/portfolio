import FeatureCard from "@/components/FeatureCard";
import { getProjectEntries } from "@/utils/contentful";
import React from "react";

const Work = async () => {
  const projectsList = await getProjectEntries();
  return (
    <section className="py-5 lg:px-20 2xl:px-3 xl:px-10 md:px-20 sm:px-5 px-3 flex flex-col gap-6 md:items-center xl:items-start">
      <h1 className="w-full font-bold text-3xl">Work</h1>
      {projectsList.map((project) => {
        return (
          <FeatureCard
            key={project.projectName}
            projectExcerpt={project.projectExcerpt}
            projectName={project.projectName}
            primaryImage={project.primaryImage?.src}
            projectDate={project.projectDate}
            projectSlug={project.slug}
            tags={project.tags}
          />
        );
      })}
    </section>
  );
};

export default Work;
