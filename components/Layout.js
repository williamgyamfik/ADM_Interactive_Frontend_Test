import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import PostList from "./PostList";
import { useContext } from "react";
import { context } from "@/store/context";
import "flowbite";
import Spinner from "../components/Spinner";
import SearchBar from "./SearchBar";

const Layout = (props) => {
  const { post, setPost } = useContext(context);

  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
      );
      setLoading(false);
      const posts = await res.json();
      setPost(posts);
    };
    fetchData();
  }, [setPost]);

  const searchTermHandler = (value) => setSearchTerm(value);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-screen flex flex-col p-5 ">
          <NavBar />
          <div className="flex flex-row ">
            <div className="w-64 hidden sm:flex ">
              <PostList searchTerm={searchTerm} />
            </div>

            <div
              id="drawer-example"
              className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-[#1b1d22]"
              tabIndex="-1"
              aria-labelledby="drawer-label"
            >
              <button
                type="button"
                data-drawer-hide="drawer-example"
                aria-controls="drawer-example"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>

              <PostList searchTerm={searchTermHandler} />
            </div>

            <div className="flex flex-col flex-grow p-5 w-full">
              <SearchBar
                searchTerm={searchTerm}
                searchTermHandler={searchTermHandler}
              />
              {props.children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Layout;
