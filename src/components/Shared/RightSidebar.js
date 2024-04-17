"use client"
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import SuggestedUser from "../Users/SuggestedUser";


const RightSidebar = () => {

  const {data, isLoading} = useGetAllUsersQuery();
  console.log(data);

  return (
    <div className="px-8 pt-6">
      <p className="font-bold text-lg mb-4">Suggested for you</p>
      
        {
          data?.data?.map(user => <SuggestedUser key={user._id} user={user} ></SuggestedUser>)
        }
      
    </div>
  );
};

export default RightSidebar;
