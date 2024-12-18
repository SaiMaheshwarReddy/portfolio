import FeatureCard from "@/components/FeatureCard";
import React from "react";

const Work = () => {
  return (
    <section className="py-5 lg:px-20 2xl:px-3 xl:px-10 md:px-20 sm:px-5 px-3 flex flex-col md:items-center">
      <h1 className="w-full font-bold text-3xl">Work</h1>
      <div className="flex flex-col justify-between items-center gap-5 mt-2">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  );
};

export default Work;
