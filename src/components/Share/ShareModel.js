import { Modal } from "react-responsive-modal";
import Image from "next/image";
import { useSharePostMutation } from "@/redux/features/post/postApi";
import { redirect } from "next/navigation";

const ShareModel = ({ open, onCloseModal, postId, ownerId, imageUrl }) => {

    const [sharePost, {isLoading, isSuccess}] = useSharePostMutation();

    const handleSharePost = () => {
        const data = {
            postId: postId,
            ownerId: ownerId
        };
        sharePost(data);
    };

    if(isSuccess) {
        redirect('/profile')
    }
    
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="p-8">
        <div className="">
          <Image
            className="mt-2"
            src={imageUrl}
            height={400}
            width={400}
            alt="post"
          />
        </div>
        <button disabled={isLoading} onClick={handleSharePost}  className=" bg-primary text-white py-2 px-4 rounded-md mt-6">Share Wave</button>
        {
            isLoading && <div><p>Loading...</p> </div>
        }
        </div>
      </Modal>
    </div>
  );
};

export default ShareModel;
