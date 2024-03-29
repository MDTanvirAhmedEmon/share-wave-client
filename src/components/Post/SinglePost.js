import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import profile from "../../../public/profile.jpg";

const SinglePost = ({ post }) => {
  const {text, imageUrl} = post;

  const profileImage = {
    backgroundImage: `URL(${profile.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
        <div className="flex gap-4 mt-4">
          <button className=" items-center cursor-pointer">
            <CiHeart className="h-9 w-9" />
          </button>
          <button className=" items-center cursor-pointer">
            <CiChat1 className="h-8 w-8" />
          </button>
          <button className="items-center cursor-pointer">
            <CiLocationArrow1 className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
