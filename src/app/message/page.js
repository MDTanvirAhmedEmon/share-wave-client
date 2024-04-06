import { FiSend } from "react-icons/fi";

const InBox = () => {
  return (
    <div className=" absolute left-0 right-0 bottom-8 flex mx-8 items-center">
      <input
        className=" border border-black w-[95%] py-2  rounded-full mr-2 px-6"
        type="text"
        name=""
        placeholder="Write your message..."
        id=""
      />
      <FiSend className="h-8 w-8 cursor-pointer " />
    </div>
  );
};

export default InBox;
