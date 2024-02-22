import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePhoto,
  HiOutlineHome,
  HiOutlineCog8Tooth,
  HiOutlineBell,
} from "react-icons/hi2";

const MobileFooter = () => {
  return (
    <div className=" flex justify-between h-14 items-center fixed bottom-0 left-0 right-0 px-4 border-t">
      <HiOutlineHome className="h-8 w-8" />
      <HiOutlineBell ottomCenter className="h-8 w-8" />
      <HiOutlinePhoto className="h-8 w-8" />
      <HiOutlineChatBubbleLeftRight className="h-8 w-8" />
      <HiOutlineCog8Tooth ottomCenter className="h-8 w-8" />
    </div>
  );
};

export default MobileFooter;
