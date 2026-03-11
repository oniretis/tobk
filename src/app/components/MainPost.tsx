import { client } from "@/sanity/lib/client";
import React from "react";
import { Post } from "../utils/interface";
import PostComponent from "./PostComponent";

async function getPosts() {
  const query = `
    *[_type == "post"] {
      title,
    slug,
    publishedAt,
    excerpt,
    mainImage{
        asset->{
          _id,
          url
        }
      },
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

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

async function MainPost() {
  const posts: Post[] = await getPosts();
  // console.log(posts, "posts");
  return (
    <div>
      <div className="flex-col md:grid md:grid-cols-4 gap-4 px-4" id="posts">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

export default MainPost;
