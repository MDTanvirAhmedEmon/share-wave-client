import FriendsList from "@/components/Message/FriendsList";
import PrivateRoutes from "@/libs/privateRoutes";

const layout = ({ children }) => {
  return (
    <PrivateRoutes>
      <div className="flex h-[100vh]">
        <div className=" w-[75%] h-full relative">{children}</div>
        <div className=" w-[25%] h-full shadow-md  fixed top-0 right-0 bottom-0 overflow-scroll">
          <FriendsList></FriendsList>
        </div>
      </div>
    </PrivateRoutes>
  );
};

export default layout;
