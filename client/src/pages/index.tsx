import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import TacotacoLogo from "../images/reddit.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tacotaco: the front page of the internet</title>
      </Head>
      <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12">
        <div className="flex items-center">
          <Link href="/">
            <a href="">
              <TacotacoLogo className="w-8 h-8 mr-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
