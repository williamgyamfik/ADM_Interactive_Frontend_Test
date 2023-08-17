import "@/styles/globals.css";

import { context } from "@/store/context";
import { useState } from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [post, setPost] = useState([]);
  return (
    <context.Provider value={{ post, setPost }}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </context.Provider>
  );
}
