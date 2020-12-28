import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-40 h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/images/bricks.jpg)" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <h1 className="mb-2 text-lg">Sign Up</h1>
        <p className="mb-10 text-sm">
          By continiuing you agree to our User Agreement and Privacy Policy
        </p>
      </div>
    </div>
  );
}
