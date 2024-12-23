// import BlogCard from "@/components/BlogCard";
// import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <section className="py-7 md:px-20 2xl:px-3 lg:px-20  xl:px-10 sm:px-5 px-3 text-left">
      <div className="mx-auto">
        <h1 className="w-full font-bold text-3xl">Blog</h1>

        <div className="flex flex-col sm:flex-row justify-between  items-center flex-wrap lg:mx-0 gap-5 mt-4">
          {/* <BlogCard className="md:max-w-full xl:max-w-full 2xl:max-w-full w-full" />
          <BlogCard className="md:max-w-full xl:max-w-full 2xl:max-w-full w-full" />
          <BlogCard className="md:max-w-full xl:max-w-full 2xl:max-w-full w-full" /> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
