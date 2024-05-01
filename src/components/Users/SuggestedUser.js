"use client";
import { useDoFollowMutation, useUnFollowMutation } from "@/redux/features/follow/followApi";
import Link from "next/link";

const SuggestedUser = ({ user }) => {
  const { firstName, lastName, profileImageUrl, createdAt, _id, isFollowing } =
    user;

  const [doFollow, { isLoading }] = useDoFollowMutation();
  const [unFollow, { isLoading: isLoadingUnFollow} ] = useUnFollowMutation();

  const handleDoFollow = () => {
    doFollow(_id);
  };

  const handleUnFollow = () => {
    unFollow(_id);
  };

  const profileImage = {
    backgroundImage: `URL(${profileImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

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

  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className=" w-[50px] h-[50px] rounded-full ring-white shadow"
        style={profileImage}
      ></div>
      <div>
        <Link href={`/user-profile/${_id}`}>
          <p className=" font-semibold text-sm">
            {firstName} {lastName}
          </p>
        </Link>
        <p className="  text-sm">
          {months[new Date(createdAt).getMonth()]}{" "}
          {new Date(createdAt).getDate()}
        </p>
      </div>
      {isLoading || isLoadingUnFollow ? 
        <p>loading...</p>
       : (
        <div>
          {isFollowing ? (
            <p onClick={handleUnFollow} className="bg-[#636363] hover:bg-[#6328a7] text-white px-2 rounded-lg cursor-pointer">
              unfollow
            </p>
          ) : (
            <p
              onClick={handleDoFollow}
              className="bg-primary hover:bg-[#6328a7] text-white px-2 rounded-lg cursor-pointer"
            >
              follow
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SuggestedUser;
