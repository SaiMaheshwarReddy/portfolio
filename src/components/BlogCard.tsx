"use client";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
import React from "react";

type BlogCardProps = {
  title: string;
  className?: string;
  url: string;
  publishedDate: string;
  tags: string[];
  excerpt: string;
};
const BlogCard = ({
  className,
  title,
  excerpt,
  tags,
  publishedDate,
  url,
}: BlogCardProps) => {
  const router = useRouter();
  const getDate = (data: string) => {
    const date = new Date(data);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };
  return (
    <div
      className={`md:max-w-full xl:max-w-[460px] 2xl:max-w-[420px] bg-white p-3 shadow-md  rounded-md cursor-pointer flex flex-col gap-3 ${className}`}
      onClick={() => {
        router.push(url);
      }}
    >
      <p className="text-2xl font-bold">{title}</p>
      <div className="flex gap-4 font-medium text-gray-600">
        <div>{getDate(publishedDate)}</div>
        <div>|</div>
        <div>{tags.join(", ")}</div>
      </div>
      <p>{excerpt}</p>
    </div>
  );
};

export default BlogCard;
