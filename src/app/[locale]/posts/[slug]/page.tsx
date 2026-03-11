import Header from "../../../components/Header";
import { Post } from "../../../utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import urlFor from "@/sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    author->,
    categories[]->,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  // console.log(params, "parmas");
  const post: Post = await getPost(params?.slug);
  // console.log(post, "post");

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={`${dateFont?.className} text-orange-500`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>

        <div className="mt-5">
          {post?.tags?.map((tag: any) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase ">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>

        <div className={richTextStyles}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>

      <section className="  mb-24  text-black  w-full">
        <div className="pl-10 flex items-center space-x-2">
          <div className="flex items-center ">
            <Link
              className="inline-block mr-2 p-1 bg-gray-800 rounded-md"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/outline-facebook.svg"
                alt="facebook icon"
                height="20"
                width="20"
                loading="lazy"
              />
            </Link>
            <Link
              className="inline-block mr-2 p-1 bg-gray-800 rounded-md"
              href="https://twitter.com/GodsgreatG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/twitter-white.svg"
                alt="twitter icon"
                height="20"
                width="20"
                loading="lazy"
              />
            </Link>
            <Link
              className="inline-block mr-2 p-1 bg-gray-800 rounded-md"
              href="https://www.instagram.com/g_g_the_sailor_man"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/outline-socialmedia.svg"
                alt="instagram icon"
                height="20"
                width="20"
                loading="lazy"
              />
            </Link>
            <Link
              className="inline-block p-1 bg-gray-800 rounded-md"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/outline-linkedin.svg"
                alt="linkedin icon"
                height="20"
                width="20"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="w-64 mt-auto pl-10 ">
            <h5 className="text-md flex flex-row text-black justify-center items-center gap-4 font-light capital">
              {" "}
              By{" "}
              <div className="flex justify-center gap-2 items-center">
                <Image
                  className="rounded-full w-10 h-10 bg-contain border-2 dark:border-white border-black mt-3"
                  src={
                    post.author?.image ? urlFor(post.author.image).url() : ""
                  }
                  alt={post.author?.name}
                  height={10}
                  width={32}
                />

                <span className="italic text-black dark:text-white">
                  {post.author?.name || "Unknown Author"}
                </span>
              </div>
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
