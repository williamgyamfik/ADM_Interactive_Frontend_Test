import React, { useState } from "react";
import { useRouter } from "next/router";
import { context } from "@/store/context";
import { useContext } from "react";
import CardDetails from "@/components/CardDetails";
import SearchBar from "@/components/SearchBar";

const Index = (props) => {
  const router = useRouter();
  const { post } = useContext(context);
  const routerId = router.query.id;

  const postDetail = post.find((post) => post.id === routerId);

  return (
    <>
      <div className=" space-y-7 flex flex-col flex-grow">
        {/* <SearchBar /> */}
        <CardDetails postDetail={postDetail} />
      </div>
    </>
  );
};

export default Index;