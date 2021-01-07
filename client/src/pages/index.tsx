import Head from "next/head";
import Link from "next/link";

import { Fragment, useEffect, useState } from "react";
import Axios from "axios";

import dayjs from "dayjs";
import { Post } from "../types";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-12">
      <Head>
        <title>tacotaco: the front page of the internet</title>
      </Head>
      <div className="container flex pt-4">
        <div className="w-160">
          {posts.map((post) => (
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
                        <span>20 comments</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
