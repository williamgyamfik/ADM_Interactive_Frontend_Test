import React, { useEffect, useState } from "react";

const CardDetails = ({ postDetail }) => {
  const [num, setNum] = useState("");

  useEffect(() => {
    const totalCargoNumber = () => {
      if (!postDetail?.boxes) {
        return;
      }
      const sumValues = postDetail.boxes
        .split(",")
        .reduce((a, b) => Number(b) + a, 0);
      const totalValue = Math.ceil(sumValues / 10);
      setNum(totalValue);
    };
    totalCargoNumber();
  }, [postDetail?.boxes]);

  return (
    <div className="p-5 sm:w-[1036px] flex-grow rounded-[20px] bg-gradient-to-br from-[#2D3038] to-[#2D303800]">
      <h4 className=" text-white font-normal text-[28px] sm:text-[64px] sm:leading-[74px] leading-[38px]">
        {postDetail?.name ?? ""}
      </h4>
      <p className=" pb-5  text-[#979797] font-normal text-[16px] sm:w-[170px]">
        {postDetail?.email ?? ""}
      </p>
      <p className="pb-2 text-[#979797] font-normal text-[16px] leading-[24px] sm:w-[170px]">
        CARGO BOXES
      </p>

      <div className="mb-10 rounded-lg  bg-white sm:w-[320px] ">
        <input
          value={postDetail?.boxes ?? ""}
          readOnly
          className="p-2 rounded-lg sm:w-[320px] "
        />
      </div>

      <p className="text-[#979797]  font-normal md:text-left text-center  sm:text-[34px] text-[18px] sm:leading-[44px]  leading-[20px] ">
        Number of required cargo bays
      </p>
      <p className="sm:w-[32px] text-center mt-5 sm:text-[56px] sm:leading-[66px]  text-white font-normal text-[34px] leading-[44px]">
        {num}
      </p>
    </div>
  );
};

export default CardDetails;
