import Image from "next/image";
import React from "react";
import sample from "../../public/sample.jpg";

const FeatureCard = () => {
  return (
    <div className="sm:min-w-80 shadow-md bg-white p-3 rounded-md flex flex-col sm:items-start sm:flex-row gap-3">
      <div className="w-full sm:w-60 flex-shrink-0 flex-grow-0">
        <Image
          className="rounded-md object-cover w-full sm:h-full"
          src={sample}
          width={340}
          alt="Project"
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="text-2xl font-bold">Designing Dashboards</p>
        <div className="flex items-center gap-4 font-medium ">
          <div className="rounded-3xl px-4 py-0.5 bg-black text-white">
            2020
          </div>
          <div className="text-gray-500">Design</div>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
