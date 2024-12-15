import React from "react";

const BlogCard = () => {
  return (
    <div className="sm:max-w-[420px] bg-white p-3  rounded-md flex flex-col gap-3">
      <p className="text-2xl font-bold">Making a design system from scratch</p>
      <div className="flex gap-4 font-medium text-gray-600">
        <div>12 Feb 2020</div>
        <div>|</div>
        <div>Design, Pattern</div>
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
};

export default BlogCard;
