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
        <div className="w-70">
          <h1 className="mb-2 text-lg">Sign Up</h1>

          <p className="mb-10 text-sm">
            By continiuing you agree to our User Agreement and Privacy Policy
          </p>
          <form action="">
            <div className="mb-6">
              <input
                type="checkbox"
                className="mr-1 cursor-pointer"
                id="agreement"
              />
              <label htmlFor="agreemetn" className="text-xs cursor-pointer">
                I agree to get emails about cool stuff on Readit
              </label>
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
                placeholder="Email"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
                placeholder="username"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
                placeholder="password"
              />
            </div>
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border rounded border-blue 500">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
