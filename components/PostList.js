import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { context } from "@/store/context";

const PostList = ({ searchTerm }) => {
  const { post } = useContext(context);

  const filteredSearchValue = post.filter((value) =>
    value.name
      .toLowerCase()
      .includes(typeof searchTerm === "string" ? searchTerm.toLowerCase() : "")
  );

  return (
    <>
      <div className="h-screen overflow-auto bg-[#1b1d22]  mt-[59px] sm:w-[270px]">
        <h4 className="font-normal text-[20px] leading-[38px] text-[#979797] ">
          SHIPMENT LIST
        </h4>
        {filteredSearchValue.map((post) => {
          return (
            <div key={post.id}>
              <p className="ml-0 m-5 font-normal  leading-[24px] text-[16px]  text-[#979797] hover:w-[333px] hover:bg-gradient-to-br from-[#2D303800] to-[#2D3038] cursor-pointer hover:text-white">
                <Link href={`/${post.id}`}>{post.name}</Link>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
