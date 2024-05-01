"use client";
import SinglePost from "@/components/Post/SinglePost";
import { useGetAllPostQuery } from "@/redux/features/post/postApi";

const HomePage = () => {
  const { data, isLoading } = useGetAllPostQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
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
    <div className="w-auto md:w-[700px] mx-auto mt-8 flex flex-col justify-center mb-14">
      {data?.data.map((post) => (
        <SinglePost
          key={post._id}
          post={post}
          isLoading={isLoading}
        ></SinglePost>
      ))}
    </div>
  );
};

export default HomePage;
