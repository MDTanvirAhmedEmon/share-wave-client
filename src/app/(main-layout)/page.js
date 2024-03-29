"use client";
import SinglePost from "@/components/Post/SinglePost";
import { useGetAllPostQuery } from "@/redux/features/post/postApi";

const HomePage = () => {
  const { data, isLoading } = useGetAllPostQuery();
  console.log(data?.data);

  return (
    <div className="w-auto md:w-[700px] mx-auto mt-8 flex flex-col justify-center">
      {data?.data.map((post) => (
        <SinglePost key={post._id} post={post}></SinglePost>
      ))}
    </div>
  );
};

export default HomePage;
