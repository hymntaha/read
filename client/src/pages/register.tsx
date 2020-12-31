import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [errors, setErrors] = useState<any>({});

  return (
    <div className="flex">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="h-screen bg-center bg-cover w-36"
        style={{ backgroundImage: "url('/images/bricks.jpg')" }}
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
                className="w-full p-3 py-2 duration-200 border border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white"
                placeholder="EMAIL"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="w-full p-3 py-2 duration-200 border border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white"
                placeholder="USERNAME"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="w-full p-3 py-2 duration-200 border border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white"
                placeholder="PASSWORD"
              />
            </div>
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border rounded border-blue 500">
              Sign Up
            </button>
          </form>
          <small>
            Already a member?
            <Link href="/login">
              <a className="ml-1 uppercase text-blue">Log In</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
