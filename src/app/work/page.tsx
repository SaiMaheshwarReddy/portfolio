import FeatureCard from "@/components/FeatureCard";
import { getProjects } from "@/utils/contentful";
import React from "react";

const Work = async () => {
  const projectsList = await getProjects();
  console.log(projectsList);
  return (
    <section className="py-5 lg:px-20 2xl:px-3 xl:px-10 md:px-20 sm:px-5 px-3 flex flex-col md:items-center xl:items-start">
      {/* <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard /> */}
    </section>
  );
};

export default Work;
