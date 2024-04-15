"use client";
import SinglePost from "@/components/Post/SinglePost";
import { useGetMyPostQuery } from "@/redux/features/post/postApi";
import { useGetUserInfoQuery } from "@/redux/features/user/userApi";
import { Tooltip } from "keep-react";
import emptyProfile from "../../../public/empty-profile.jpg";
import emptyCover from "../../../public/your-cover.png";
import { UpdateProfileModal } from "@/components/profile/UpdateProfileModal";
import { useState } from "react";
import { UpdateCoverModal } from "@/components/profile/UpdateCoverModal";

const Profile = () => {
  const { data, isLoading } = useGetUserInfoQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { data: postData, isLoading: postLoading } = useGetMyPostQuery(
    undefined,
    { refetchOnMountOrArgChange: true }
  );


  const imageStyle = data?.data?.coverPhoto
    ? {
        backgroundImage: `URL(${data?.data?.coverPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundImage: `URL(${emptyCover.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

  const profileImage = data?.data?.profileImageUrl
    ? {
        backgroundImage: `URL(${data?.data?.profileImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundImage: `URL(${emptyProfile.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

      const [open, setOpen] = useState(false);

      const onOpenModal = () => setOpen(true);
      const onCloseModal = () => setOpen(false);
      const [openCover, setCoverOpen] = useState(false);

      const onOpenCoverModal = () => setCoverOpen(true);
      const onCloseCoverModal = () => setCoverOpen(false);


  return (
    <div>
      {/* cover */}

      <div onClick={onOpenCoverModal}
        className="w-full h-[200px] md:h-[400px] rounded-b-lg cursor-pointer"
        style={imageStyle}
      >
      </div>

      {/* details */}
      <div className="flex ">
        <Tooltip
          content="Change profile photo"
          trigger="hover"
          placement="top"
          animation="duration-300"
          style="dark"
        >
          <div onClick={onOpenModal}
            className={`w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full ring-4 shadow-lg ring-white mt-[-60px] cursor-pointer`}
            style={profileImage}
          ></div>
        </Tooltip>
        <div className="mt-8 ml-6">
          <h2 className="text-lg md:text-2xl font-semibold">
            {data?.data?.firstName + " "}
            {data?.data?.lastName}
          </h2>
          <div className="flex gap-2 md:gap-6 mt-2 md:mt-4 md:text-md">
            <p>post 14</p>
            <p>followers 243</p>
            <p>following 57</p>
          </div>
        </div>
      </div>
      {/* all post loaded */}

      {/* post */}
      {postLoading && (
        <div className="w-auto md:w-[700px] mx-auto mt-8 flex flex-col justify-center">
          <div className="border-b py-5 px-4 mx-auto">
            <div className="flex gap-4 mb-10">
              {/* profile */}
              <div className=" w-[50px] h-[50px] rounded-full shadow-md bg-slate-100 animate-pulse"></div>
              <div>
                <div className=" bg-slate-100 w-52 h-6 mb-2 animate-pulse">
                  {" "}
                </div>
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
      )}
      <div className="w-auto md:w-[700px] mx-auto mt-8 flex flex-col justify-center">
        {postData?.data.map((post) => (
          <SinglePost key={post._id} post={post}></SinglePost>
        ))}
      </div>
      <UpdateProfileModal open={open} onCloseModal={onCloseModal}></UpdateProfileModal>
      <UpdateCoverModal open={openCover} onCloseModal={onCloseCoverModal}></UpdateCoverModal>
    </div>
  );
};

export default Profile;
