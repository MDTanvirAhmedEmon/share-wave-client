"use client";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import profile from "../../../public/profile.jpg";
import { useLoveReactMutation } from "@/redux/features/post/postApi";
import { useState } from "react";
import Heart from "react-heart";

const SinglePost = ({ post }) => {
  const { text, imageUrl, _id, reactions, userAlreadyReacted } = post;
  console.log(reactions);
  const [active, setActive] = useState(userAlreadyReacted);
  const [loveReact, { isLoading, isSuccess, isError }] = useLoveReactMutation();

  const profileImage = {
    backgroundImage: `URL(${profile.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleLoveReact = () => {
    const data = {
      postId: _id,
      reaction: "loved",
    };
    loveReact(data);
  };

  return (
    <div className="border-b py-5 px-4 mx-auto">
      <div className="flex gap-4">
        <div
          className=" w-[50px] h-[50px] rounded-full shadow-md"
          style={profileImage}
        ></div>
        <div>
          <p className=" font-bold">Tanvir Ahmed Emon</p>
          <p>December 21</p>
        </div>
      </div>
      <div className="mt-3">
        <p>{text}</p>
        <Image
          className="mt-2"
          src={imageUrl}
          height={500}
          width={500}
          alt="post"
        />
        <div className="flex gap-4 mt-4 items-center">
          <button className=" items-center cursor-pointer">
            <div className="" style={{ width: "1.7rem" }}>
              <Heart
                isActive={active}
                onClick={() => {
                  setActive(!active);
                  handleLoveReact();
                }}
                animationScale={1.25}
                style={{}}
              />
            </div>
          </button>
          <button className=" items-center cursor-pointer">
            <CiChat1 className="h-8 w-8" />
          </button>
          <button className="items-center cursor-pointer">
            <CiLocationArrow1 className="h-8 w-8" />
          </button>
        </div>
        {reactions?.length !== 0 && (
          <div className=" text-sm font-semibold">
            <p>{reactions?.length} loves</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
