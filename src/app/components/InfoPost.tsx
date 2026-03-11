import { client } from "@/sanity/lib/client";
import React from "react";
import { Post } from "../utils/interface";
import PostComponent from "./PostComponent";
import InfoComp from "./InfoComp";

async function getPosts() {
  const query = `
    *[_type == "tag"] {
      title,
    slug,
    name,
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

async function InfoPost() {
  const posts: Post[] = await getPosts();
  console.log(posts, "informations");
  return (
    <div>
      <div className="flex justify-center space-x-10">
        {posts?.length > 0 &&
          posts?.map((post) => <InfoComp key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

export default InfoPost;
