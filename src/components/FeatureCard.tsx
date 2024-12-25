import Image from "next/image";
import React from "react";
import Link from "next/link";

const FeatureCard = ({
  projectExcerpt,
  projectName,
  primaryImage,
  projectDate,
  projectSlug,
}) => {
  const projectYear = new Date(projectDate).getFullYear();
  return (
    <Link href={`/blog/${projectSlug}`}>
      <div className="sm:min-w-80 shadow-md bg-white p-3 rounded-md flex flex-col sm:items-start sm:flex-row gap-3">
        <div className="w-full sm:w-60 flex-shrink-0 flex-grow-0">
          <Image
            className="rounded-md object-cover w-full sm:h-full"
            src={`https:${primaryImage}`}
            width={340}
            height={230}
            alt="Project"
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-2xl font-bold">{projectName}</p>
          <div className="flex items-center gap-4 font-medium ">
            <div className="rounded-3xl px-4 py-0.5 bg-black text-white">
              {projectYear}
            </div>
            <div className="text-gray-500">Design</div>
          </div>
          <p>{projectExcerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
