import Link from "next/link";
import React from "react";

import { Post } from "../utils/interface";
import Image from "next/image";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  // console.log(JSON.stringify(post, null, 2));
  return (
    <>
      <div className="group cursor-pointer w-full  border border-gray-300 rounded-2xl p-2 transition-all duration-300 hover:border-indigo-600">
        <Link href={`/en/posts/${post?.slug?.current}`}>
          {post?.mainImage && (
            <div className="mb-3">
              <img
                src={post?.mainImage.asset?.url}
                alt={post?.mainImage}
                className=" object-cover h-52 rounded-lg"
              />
            </div>
          )}

          <div className="flex flex-col space-y-10">
            <h2 className="text-lg font-semibold dark:text-slate-300 line-clamp-2">
              {post?.title}
            </h2>

            <div className="bottom-0 flex justify-between ">
              <p className="my-2 text-sm dark:text-white text-neutral-800">
                {new Date(post?.publishedAt).toDateString()}
              </p>
              <span className="my-2 text-sm text-indigo-600 font-semibold   leading-none  transition duration-200">
                {post?.categories?.[0]?.title}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PostComponent;
