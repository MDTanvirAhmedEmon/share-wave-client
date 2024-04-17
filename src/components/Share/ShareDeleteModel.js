import { Modal } from "react-responsive-modal";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useDeleteSharePostMutation } from "@/redux/features/post/postApi";


const ShareDeleteModel = ({ open, onCloseModal, id, imageUrl }) => {

    const [deleteSharePost, {isLoading}] = useDeleteSharePostMutation();

    const handleDeleteSharePost = () => {
        deleteSharePost(id);
    };

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
        <button disabled={isLoading} onClick={handleDeleteSharePost}  className=" bg-red-500 text-white py-2 px-4 rounded-md mt-6">Delete Share</button>
        {
            isLoading && <div><p>Loading...</p> </div>
        }
        </div>
      </Modal>
    </div>
  )
};

export default ShareDeleteModel;