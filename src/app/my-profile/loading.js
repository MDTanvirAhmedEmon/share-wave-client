"use client";
import { Spinner } from "keep-react";

const Loading = () => {
  return (
    <div className=" w-7 mx-auto ">
      <Spinner className="my-60" color="gray" size="lg" />
    </div>
  );
};

export default Loading;
