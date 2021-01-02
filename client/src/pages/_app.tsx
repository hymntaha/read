import { AppProps } from "next/app";
import { Fragment } from "react";
import Axios from "axios";

import "../styles/tailwind.css";

import Navbar from "../components/Navbar";

Axios.defaults.baseURL = "http://localhost:5000";
Axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar /> <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
