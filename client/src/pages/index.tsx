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
            
          ))}
        </div>
      </div>
    </div>
  );
}
