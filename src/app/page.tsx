import Image from "next/image";
import profile from "../../public/profile.jpg";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import { fetchDevToArticles } from "@/utils/devTo";
import { IDevToArticle } from "./types";

export default async function Home() {
  // contentful articles
  // const router = useRouter();
  // const blogs = await getBlogPosts();
  const devToArticles: IDevToArticle[] = await fetchDevToArticles();

  return (
    <div className="w-full">
      <section className=" flex justify-center items-center md:items-start flex-col lg:px-20 2xl:px-3 2xl:gap-16 xl:gap-14 xl:px-10 md:px-20 pb-16 sm:pt-6 sm:px-5 px-3 gap-10 md:flex-row-reverse  mx-auto">
        <div className="rounded-full w-44 h-44 2xl:w-60 2xl:h-60 flex-shrink-0 flex-grow-0">
          <Image
            className="rounded-full object-cover w-full h-full"
            src={profile}
            width={176}
            height={176}
            alt="profile"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-6 md:justify-start md:items-start">
          <h2 className="text-center md:text-left text-3xl 2xl:text-5xl font-bold sm:text-5xl">
            Hi, I am Sai, <br />
            <p className="pt-2">
              Software Engineer
              {/* Bridging the gap between design and functionality */}
              {/* crafting user-friendly interfaces with React. */}
            </p>
          </h2>
          <p className="text-center md:text-left text-lg">
            {`I like building performant and detail-oriented UI's that contribute to an exceptional user experience. I enjoy working in fast-paced environments that focus on structured goals and a shared vision`}
          </p>
          <button className="bg-primary text-white font-semibold py-3 px-6 rounded-sm">
            Download Resume
          </button>
        </div>
      </section>
      <section className="bg-lightBlue py-7 md:px-20 2xl:px-3 lg:px-20  xl:px-10 sm:px-5 px-3 text-left">
        <div className="mx-auto 2xl:max-w-4xl xl:max-w-5xl">
          <div className="w-full flex items-center justify-between">
            <p className="text-lg">Recent posts</p>

            <Link href="/blog" className="text-cyan-600 hover:underline">
              Vew All
            </Link>
            {/* <div className="mr-1">Vew more</div> */}
            {/* <Image src={arrowRight} width={16} alt="arrow" /> */}
            {/* </div> */}
          </div>
          <div className="flex flex-col sm:flex-row justify-between  items-center flex-wrap lg:mx-0 gap-5 mt-4">
            {devToArticles.map(
              ({ id, url, description, published_at, tag_list, title }) => {
                return (
                  <BlogCard
                    title={title}
                    key={id}
                    excerpt={description}
                    url={url}
                    publishedDate={published_at}
                    tags={tag_list}
                  />
                );
              }
            )}
            {devToArticles.map(
              ({ id, url, description, published_at, tag_list, title }) => {
                return (
                  <BlogCard
                    title={title}
                    key={id}
                    excerpt={description}
                    url={url}
                    publishedDate={published_at}
                    tags={tag_list}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
      <section className="py-5 lg:px-20 2xl:px-3 xl:px-10 md:px-20 sm:px-5 px-3 flex flex-col md:items-center">
        <div className="w-full">
          <p className="text-center text-lg sm:text-left">Featured works</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-5 mt-2">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </section>
    </div>
  );
}
