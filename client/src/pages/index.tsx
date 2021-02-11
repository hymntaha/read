import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import useSWR from "swr";

import dayjs from "dayjs";
import { Sub } from "../types";

import relativeTime from "dayjs/plugin/relativeTime";
import PostCard from "../components/PostCard";

dayjs.extend(relativeTime);

export default function Home() {
  const { data: posts } = useSWR("/posts");
  const { data: topSubs } = useSWR("/misc/top-subs");

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
        <div className="ml-6 w-80">
          <div className="bg-white rounded">
            <div className="p-4 border-b-2">Top Communities</div>
            {topSubs?.map((sub: Sub) => (
              <div
                key={sub.name}
                className="flex items-center px-4 py-2 text-xs border-b"
              >
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={sub.imageUrl}
                    alt="Sub"
                    width={(6 * 16) / 4}
                    height={(6 * 16) / 4}
                  />
                </div>
                <Link href={`/r/${sub.name}`}>
                  <a href="" className="font-bold hover:cursor-pointer">
                    /r/${sub.name}
                  </a>
                </Link>
                <p className="ml-auto font-med">{sub.postCount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
