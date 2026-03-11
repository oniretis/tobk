import { client } from "@/sanity/lib/client";
import React from "react";
import { Post } from "../utils/interface";

import InfoComp from "./InfoComp";
import Upcoming from "./Upcoming";

async function getPosts() {
  const query = `
    *[_type == "tag"] {
      
    slug,
    date,
    link,
    name,
    publishedAt,
    
    _id,
    
  }
  `;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

async function UpcomingPost() {
  const posts: Post[] = await getPosts();
  console.log(posts, "Upcoming posts");
  return (
    <div className="bg-white  antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Stay updated with our programs
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        {posts?.length > 0 &&
          posts?.map((post) => <Upcoming key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

export default UpcomingPost;
