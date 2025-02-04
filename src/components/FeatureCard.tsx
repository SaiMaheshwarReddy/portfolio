import Image from "next/image";
import React from "react";
import Link from "next/link";

type FeatureCardProps = {
  projectExcerpt: string;
  projectName: string;
  primaryImage: string | undefined;
  projectDate: string;
  projectSlug: string;
  tags: string[];
};
const FeatureCard = ({
  projectExcerpt,
  projectName,
  primaryImage,
  projectDate,
  projectSlug,
  tags,
}: FeatureCardProps) => {
  const projectYear = new Date(projectDate).getFullYear();
  return (
    <Link href={`/work/${projectSlug}`}>
      <div className="sm:min-w-80 shadow-lg bg-white p-3 rounded-md flex flex-col sm:items-start sm:flex-row gap-3">
        <div className="flex-shrink-0">
          <Image
            className="rounded-md h-[230px] object-cover"
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
            {tags?.map((tag) => (
              <div key={tag} className="text-gray-500">
                {tag}
              </div>
            ))}
          </div>
          <p>{projectExcerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
