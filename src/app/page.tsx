"use client";

import Image from "next/image";
import profile from "../../public/profile.jpg";
import sample from "../../public/sample.jpg";
import arrowRight from "../../public/arrow-narrow-right.svg";
import BlogCard from "@/components/BlogCard";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <section className="max-w-[1440px]  flex justify-center items-center flex-col pb-14 sm:pt-4 px-6 gap-8 md:flex-row-reverse lg:w-[85%] xl:w-[75%] 2xl:w-[60%]  mx-auto">
        <div className=" rounded-full w-44 h-44 flex-shrink-0 flex-grow-0">
          <Image
            className="rounded-full object-cover w-full h-full"
            src={profile}
            width={176}
            height={176}
            alt="profile"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-6 md:justify-start md:items-start">
          <h2 className="text-center md:text-left text-3xl font-bold sm:text-5xl">
            Hi, I am John, Creative Technologist
          </h2>
          <p className="text-center md:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-primary text-white font-semibold py-3 px-6 rounded-sm">
            Download Resume
          </button>
        </div>
      </section>
      <section className="bg-lightBlue py-7 ">
        <div className="max-w-[1440px] xl:w-[68%] 2xl:w-[55%] mx-auto">
          <p className="text-center text-lg">Recent posts</p>
          <div className="flex flex-col sm:flex-row md:justify-center justify-between items-center flex-wrap mx-3 lg:mx-0 gap-5 mt-4">
            <BlogCard />
            <BlogCard />
          </div>
          <div className="w-full max-w-4xl sm:max-w-full flex items-center justify-end px-3 mt-2">
            <div
              className="w-fit flex items-center justify-end"
              onClick={() => {
                router.push("/blog");
              }}
            >
              <div className="text-right mr-1">Vew all</div>
              <Image src={arrowRight} width={16} alt="arrow" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mx-3 flex flex-col md:items-center">
        <div className="w-full max-w-4xl">
          <p className="text-center text-lg sm:text-left">Featured works</p>
        </div>
        <div className="flex flex-col max-w-4xl justify-between items-center gap-5 mt-2">
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
