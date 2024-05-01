"use client";

import emptyProfile from "../../../../public/empty-profile.jpg";
import emptyCover from "../../../../public/your-cover.png";
import { useGetSingleUserQuery } from "@/redux/features/user/userApi";
import { useGetUserMyPostQuery } from "@/redux/features/post/postApi";
import ProfileSinglePost from "@/components/Post/ProfileSinglePost";

const UserProfile = ({ params }) => {
  const { data, isLoading } = useGetSingleUserQuery(params.id);

  const { data: postData, isLoading: postLoading } = useGetUserMyPostQuery(
    params.id
  );
  console.log(postData);

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


  if (postLoading) {
    return (
      <div>
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
              <div className=" bg-slate-100 w-[300px] md:w-[500px] h-10 mb-3 animate-pulse"></div>
              {/* image */}
              <div className=" bg-slate-100 w-[300px] md:w-[500px] h-96 animate-pulse"></div>
            </div>
          </div>
        </div>
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
              <div className=" bg-slate-100 w-[300px] md:w-[500px] h-10 mb-3 animate-pulse"></div>
              {/* image */}
              <div className=" bg-slate-100 w-[300px] md:w-[500px] h-96 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div>
      {/* cover */}

      <div
        className="w-full h-[200px] md:h-[400px] rounded-b-lg"
        style={imageStyle}
      ></div>

      {/* details */}
      <div className="flex ">
        <div
          className={`w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full ring-4 shadow-lg ring-white mt-[-60px]`}
          style={profileImage}
        ></div>
        <div className="mt-8 ml-6">
          <h2 className="text-lg md:text-2xl font-semibold">
            {data?.data?.firstName + " "}
            {data?.data?.lastName}
          </h2>
          <div className="flex gap-2 md:gap-6 mt-2 md:mt-4 md:text-md">
            <p>post {postData?.data?.length}</p>
          </div>
        </div>
      </div>
      {/* all post loaded */}
      {/* post */}

      <div className="w-auto md:w-[700px] mx-auto mt-8 flex flex-col justify-center mb-14">
        {postData?.data.map((post) => (
          <ProfileSinglePost key={post._id} post={post}></ProfileSinglePost>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
