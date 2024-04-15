import {
  useDoCommentMutation,
  useGetAllCommentQuery,
  useGetSinglePostQuery,
} from "@/redux/features/post/postApi";
import { Modal } from "react-responsive-modal";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import SingleComment from "./SingleComment";
import { useRef } from "react";

const CommentModal = ({ open, onCloseModal, id }) => {
  const { data } = useGetSinglePostQuery(id);
  const { data: comments } = useGetAllCommentQuery(id);
  const [doComment, { isLoading, isSuccess }] = useDoCommentMutation();

  const commentRef = useRef(null);

  const handleComment = (e) => {
    e.preventDefault();

    const commentData = {
      postId: id,
      text: commentRef.current.value,
    };
    doComment(commentData);
    commentRef.current.value = "";
  };

  const mobileCommentRef = useRef(null);

  const handleMobileComment = (e) => {
    e.preventDefault();

    const commentData = {
      postId: id,
      text: mobileCommentRef.current.value,
    };
    doComment(commentData);
    mobileCommentRef.current.value = "";
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className=" h-[90vh]  md:py-12 px-4 mx-auto flex flex-col md:flex-row  gap-4 relative">
          <div className="mt-3 self-center">
            <p>{data?.data?.text}</p>
            <Image
              className="mt-2"
              src={data?.data?.imageUrl}
              height={500}
              width={500}
              alt="post"
            />
            <div className=" hidden md:block mt-6">
              <div className=" w-full flex justify-center mb-4 items-center md:w-[300px] ">
                <input
                  className=" border border-black  py-2  rounded-full mr-2 px-6"
                  type="text"
                  name=""
                  ref={commentRef}
                  placeholder="Your comment..."
                  id=""
                />
                <FiSend
                  disabled={isLoading}
                  onClick={handleComment}
                  className="h-8 w-8 cursor-pointer "
                />
              </div>
            </div>
          </div>
          {/* comments */}
          <div className="md:w-[300px] mt-4 md:mt-0">
            <div className=" block md:hidden">
              <div className=" w-full flex justify-center mb-4 items-center md:w-[300px] ">
                <input
                  className=" border border-black  py-2  rounded-full mr-2 px-6"
                  type="text"
                  name=""
                  ref={mobileCommentRef}
                  placeholder="Your comment..."
                  id=""
                />
                <FiSend
                  disabled={isLoading}
                  onClick={handleMobileComment}
                  className="h-8 w-8 cursor-pointer "
                />
              </div>
            </div>
            <div className="">
              {comments?.data?.map((comment) => (
                <SingleComment
                  key={comment._id}
                  comment={comment}
                ></SingleComment>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CommentModal;
