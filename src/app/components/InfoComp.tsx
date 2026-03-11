import Link from "next/link";
import React from "react";

import { Post } from "../utils/interface";
import Image from "next/image";

interface Props {
  post: Post;
}

const InfoComp = ({ post }: Props) => {
  // console.log(JSON.stringify(post, null, 2));
  return (
    <>
      <div className="">{post?.name}</div>
    </>
  );
};

export default InfoComp;
