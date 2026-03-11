import React from "react";
import type { Post } from "../utils/interface";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ExternalLinkIcon } from "lucide-react";

interface Props {
  post: Post;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const Upcoming = ({ post }: Props) => {
  const hasLink = post?.link && post.link.trim() !== "";

  return (
    <Card className="max-w-3xl  mx-auto mt-8 sm:mt-12 lg:mt-16">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <CalendarIcon className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm font-medium text-muted-foreground">
              {formatDate(post?.date)}
            </p>
          </div>
          <h3 className="text-xl font-semibold text-primary">
            {hasLink ? (
              <a
                href={post.link}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.name}
              </a>
            ) : (
              post.name
            )}
          </h3>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-secondary">
        <div className="w-full flex justify-end items-center">
          {hasLink && (
            <Button asChild>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Register
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Upcoming;
