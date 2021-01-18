import Head from "next/head";
import Link from "next/link";

import { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import useSWR from "swr";

import dayjs from "dayjs";
import { Post } from "../types";

import relativeTime from "dayjs/plugin/relativeTime";
import PostCard from "../components/PostCard";

dayjs.extend(relativeTime);

export default function Home() {
  const { data: posts } = useSWR("/posts");

  return (
    <Fragment>
      <Head>
        <title>tacotaco: the front page of the internet</title>
      </Head>
      <div className="container flex pt-4">
        <div className="w-160">
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
