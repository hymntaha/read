import { AppProps } from "next/app";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Axios from "axios";

import { AuthProvider } from "../context/auth";

import "../styles/tailwind.css";
import "../styles/icons.css";

import Navbar from "../components/Navbar";

Axios.defaults.baseURL = "http://localhost:5000";
Axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);
  return (
    <SWRConfig
      value={{
        fetcher: (url) => Axios.get(url).then((res) => res.data),
        dedupingInterval: 10000,
      }}
    >
      <AuthProvider>
        {!authRoute && <Navbar />}
        <div className={authRoute ? "" : "pt-12"}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </SWRConfig>
  );
}

export default App;
