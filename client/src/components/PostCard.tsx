import Link from "next/link";
import React, { Fragment } from "react";
import { Post } from "../types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }) {
  return (
    <div key={post.identifier} className="flex mb-4 bg-white rounded">
      <div className="w-10 text-center bg-gray-200 rounded-l">
        <p>V</p>
      </div>
      <div className="w-full p-2">
        <div className="flex items-center">
          <Link href={`/r/${post.subName}`}>
            <Fragment>
              <img
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                className="w-6 h-6 mr-1 rounded-full cursor-pointer"
              />

              <a className="text-xs font-bold cursor-pointer hover:underline">
                /r/${post.subName}
              </a>
            </Fragment>
          </Link>
          <p className="text-xs text-gray-500">
            <span className="mx-1">•</span>Posted by
            <Link href={`/u/${post.username}`}>
              <a href="" className="mx-1 hover:underline">
                /u/{post.username}
              </a>
            </Link>
            <Link href={post.url}>
              <a href="" className="mx-1 hover:underline">
                {dayjs(post.createdAt).fromNow()}
              </a>
            </Link>
          </p>
        </div>
        <Link href={post.url}>
          <a href="" className="my-1 text-lg font-medium">
            {post.title}
          </a>
        </Link>
        {post.body && <p className="my-1 text-sm">{post.body}</p>}
        <div className="flex">
          <Link href={post.url}>
            <a>
              <div className="px-1 py-1 mr-2 text-gray-500 rounded cursor-pointer hover:bg-gray-200">
                <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                <span className="font-bold">20 comments</span>
              </div>
            </a>
          </Link>
          <div className="px-1 py-1 mr-2 text-gray-500 rounded cursor-pointer hover:bg-gray-200">
            <i className="mr-1 fas fa-bookmark-alt fa-xs"></i>
            <span className="font-bold">Share</span>
          </div>
          <div className="px-1 py-1 mr-2 text-gray-500 rounded cursor-pointer hover:bg-gray-200">
            <i className="mr-1 fas fa-share-alt fa-xs"></i>
            <span className="font-bold">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
}
