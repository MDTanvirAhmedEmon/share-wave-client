"use client";
import Link from "next/link";

const FollowerUser = ({ user }) => {
  const {   createdAt, follower } = user;
  const {firstName, lastName, profileImageUrl, _id} = follower;


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
    <div className="flex items-center gap-4 mb-6 my-16 md:my-10">
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

    </div>
  );
};

export default FollowerUser;
