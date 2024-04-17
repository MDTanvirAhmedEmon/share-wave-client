"use client";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { useLoveReactMutation } from "@/redux/features/post/postApi";
import { useState } from "react";
import Heart from "react-heart";
import CommentModal from "../Comment/CommentModal";
import ShareModel from "../Share/ShareModel";
import ShareDeleteModel from "../Share/ShareDeleteModel";

const SinglePost = ({ post, isLoading: postLoading }) => {
  const isSharedPost = !!post?.postId;

  const { _id, userAlreadyReacted, userId } = post;

  // shared post
  let sharedAlreadyLoveReacted, sharedPostId;
  if (isSharedPost) {
    sharedAlreadyLoveReacted = post.userAlreadyReacted;
    sharedPostId = post.postId._id;
  }
  // state for normal post
  const [active, setActive] = useState(userAlreadyReacted);

  // state for shared post
  const [shareActive, setShareActive] = useState(sharedAlreadyLoveReacted);

  const [loveReact, { isLoading, isSuccess, isError }] = useLoveReactMutation();

  const postProfileImage = {
    backgroundImage: `URL(${post?.userId?.profileImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const ownerProfileImage = {
    backgroundImage: `URL(${post?.ownerId?.profileImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // love react handler for normal post
  const handleLoveReact = () => {
    const data = {
      postId: post?._id,
      reaction: "loved",
    };
    loveReact(data);
  };

  // love react handler for shared post
  const handleSharedLoveReact = () => {
    const data = {
      postId: post?.postId?._id,
      reaction: "loved",
    };
    loveReact(data);
  };

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // share model
  const [shareOpen, setShareOpen] = useState(false);
  const onShareOpenModal = () => setShareOpen(true);
  const onShareCloseModal = () => setShareOpen(false);

  // delete share model
  const [deleteShareOpen, setDeleteShareOpen] = useState(false);
  const onDeleteShareOpenModal = () => setDeleteShareOpen(true);
  const onDeleteShareCloseModal = () => setDeleteShareOpen(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (postLoading) {
    return (
      <div className="w-auto md:w-[700px] mx-auto mt-8 flex flex-col justify-center">
        <div className="border-b py-5 px-4 mx-auto">
          <div className="flex gap-4 mb-10">
            {/* profile */}
            <div className=" w-[50px] h-[50px] rounded-full shadow-md bg-slate-100 animate-pulse"></div>
            <div>
              <div className=" bg-slate-100 w-52 h-6 mb-2 animate-pulse"> </div>
              <div className=" bg-slate-100 w-40 h-6 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-3">
            {/* text */}
            <div className=" bg-slate-100 w-[500px] h-10 mb-3 animate-pulse"></div>
            {/* image */}
            <div className=" bg-slate-100 w-[500px] h-96 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* shared post */}
      {isSharedPost ? (
        <div className="border-b py-5 px-4 mx-auto">
          <div className="flex gap-4 mb-2">
            <div
              className=" w-[50px] h-[50px] rounded-full shadow-md"
              style={postProfileImage}
            ></div>
            <div>
              <p className=" font-bold">
                {post?.userId?.firstName + " " + post?.userId?.lastName}
              </p>
              <p>
                {months[new Date(post?.createdAt).getMonth()]}{" "}
                {new Date(post?.createdAt).getDate()}
              </p>
            </div>
          </div>
          <div className=" border p-4">
            {/* post owner */}
            <div className="flex justify-between">
              <div className="flex gap-4 mt-1">
                <div
                  className=" w-[50px] h-[50px] rounded-full shadow-md"
                  style={ownerProfileImage}
                ></div>
                <div>
                  <p className=" font-bold">
                    {post?.ownerId?.firstName + " " + post?.ownerId?.lastName}
                  </p>
                  <p>
                    {months[new Date(post?.postId?.createdAt).getMonth()]}{" "}
                    {new Date(post?.postId?.createdAt).getDate()}
                  </p>
                </div>
              </div>
              <div>
                <p onClick={onDeleteShareOpenModal} className=" text-4xl cursor-pointer">...</p>
              </div>
            </div>
            <div className="mt-3">
              <p>{post?.postId?.text}</p>
              <Image
                className="mt-2"
                src={post?.postId?.imageUrl}
                height={500}
                width={500}
                alt="post"
              />
              <div className="flex gap-4 mt-4 items-center">
                <button className=" items-center cursor-pointer">
                  <div className="" style={{ width: "1.7rem" }}>
                    <Heart
                      isActive={shareActive}
                      onClick={() => {
                        setShareActive(!shareActive);
                        handleSharedLoveReact();
                      }}
                      animationScale={1.25}
                      style={{}}
                    />
                  </div>
                </button>
                <button className=" items-center cursor-pointer">
                  <CiChat1 onClick={onOpenModal} className="h-8 w-8" />
                </button>
                <button className="items-center cursor-pointer">
                  <CiLocationArrow1
                    onClick={onShareOpenModal}
                    className="h-8 w-8"
                  />
                </button>
              </div>
              {post?.reactions?.length !== 0 && (
                <div className=" text-sm font-semibold">
                  <p>{post?.reactions?.length} loves</p>
                </div>
              )}
            </div>
          </div>
          <CommentModal
            open={open}
            onCloseModal={onCloseModal}
            id={sharedPostId}
          ></CommentModal>

          <ShareModel
            open={shareOpen}
            onCloseModal={onShareCloseModal}
            postId={sharedPostId}
            ownerId={post?.ownerId?._id}
            imageUrl={post?.postId?.imageUrl}
          ></ShareModel>

          <ShareDeleteModel
            open={deleteShareOpen}
            onCloseModal={onDeleteShareCloseModal}
            id={_id}
            imageUrl={post?.postId?.imageUrl}
          ></ShareDeleteModel>
        </div>
      ) : (
        //  normal post
        <div className="border-b py-5 px-4 mx-auto">
          <div className="flex gap-4">
            <div
              className=" w-[50px] h-[50px] rounded-full shadow-md"
              style={postProfileImage}
            ></div>
            <div>
              <p className=" font-bold">
                {post?.userId?.firstName + " " + post?.userId?.lastName}
              </p>
              <p>
                {" "}
                {months[new Date(post?.createdAt).getMonth()]}{" "}
                {new Date(post?.createdAt).getDate()}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p>{post?.text}</p>
            <Image
              className="mt-2"
              src={post?.imageUrl}
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
                <CiChat1 onClick={onOpenModal} className="h-8 w-8" />
              </button>
              <button className="items-center cursor-pointer">
                <CiLocationArrow1
                  onClick={onShareOpenModal}
                  className="h-8 w-8"
                />
              </button>
            </div>
            {post?.reactions?.length !== 0 && (
              <div className=" text-sm font-semibold">
                <p>{post?.reactions?.length} loves</p>
              </div>
            )}
          </div>
          <CommentModal
            open={open}
            onCloseModal={onCloseModal}
            id={_id}
          ></CommentModal>
          <ShareModel
            open={shareOpen}
            onCloseModal={onShareCloseModal}
            postId={_id}
            ownerId={userId?._id}
            imageUrl={post?.imageUrl}
          ></ShareModel>
        </div>
      )}
    </>
  );
};

export default SinglePost;
