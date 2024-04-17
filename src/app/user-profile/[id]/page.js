"use client";
import SinglePost from "@/components/Post/SinglePost";
import emptyProfile from "../../../../public/empty-profile.jpg"
import emptyCover from "../../../../public/your-cover.png";
import { useGetSingleUserQuery } from "@/redux/features/user/userApi";
import { useGetUserMyPostQuery } from "@/redux/features/post/postApi";

const UserProfile = ({params}) => {


    const {data, isLoading} = useGetSingleUserQuery(params.id);

    const { data: postData, isLoading: postLoading } = useGetUserMyPostQuery(params.id);
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
    
      return (
        <div>
          {/* cover */}
    
          <div
            className="w-full h-[200px] md:h-[400px] rounded-b-lg cursor-pointer"
            style={imageStyle}
          >
          </div>
    
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
                <p>post 14</p>
                <p>followers 243</p>
                <p>following 57</p>
              </div>
            </div>
          </div>
          {/* all post loaded */}
          {/* post */}

          <div className="w-auto md:w-[700px] mx-auto mt-8 flex flex-col justify-center mb-14">
            {postData?.data.map((post) => (
              <SinglePost key={post._id} post={post}></SinglePost>
            ))}
          </div>
        </div>
      );
};

export default UserProfile;