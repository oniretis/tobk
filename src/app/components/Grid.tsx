import React from "react";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const Grid = ({ post }: Props) => {
  return (
    <div>
      <section className="">
        <div className="">
          <div className="">
            <div className={` bg-gray-50 h-auto md:h-full `}>
              <a
                href=""
                className="group relative flex flex-row  overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                {post?.galleryImage && (
                  <img
                    src={post?.galleryImage?.asset?.url}
                    alt={post?.name || "gallery image"}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {post?.name}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
