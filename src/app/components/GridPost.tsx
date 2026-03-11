import { client } from "@/sanity/lib/client";
import React from "react";
import { Post } from "../utils/interface";
import PostComponent from "./PostComponent";
import InfoComp from "./InfoComp";
import Grid from "./Grid";

async function getPosts() {
  const query = `
    *[_type == "gallery"] {
      title,
      galleryImage{
        asset->{
          _id,
          url
        }
      },
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

async function GridPost() {
  const posts: Post[] = await getPosts();
  console.log(posts, "GridPost");
  return (
    <div>
      <div className="flex-col md:grid md:grid-cols-3 gap-2 px-4">
        {posts?.length > 0 &&
          posts?.map((post) => <Grid key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

export default GridPost;
