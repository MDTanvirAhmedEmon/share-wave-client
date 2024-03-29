"use client";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useCreatePostMutation } from "@/redux/features/post/postApi";
import { redirect } from "next/navigation";

export const PostModal = ({ open, onCloseModal }) => {
  const [createPost, { isLoading, isError, isSuccess }] =
    useCreatePostMutation();

  const [file, setFile] = useState(null);
  const [textData, setTextData] = useState({
    text: "",
  });

  console.log(textData);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleText = (e) => {
    const name = e.target.name;
    const textDatInfo = e.target.value;
    setTextData({
      ...textData,
      [name]: textDatInfo,
    });
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify(textData));
    createPost(formData);
  };

  if(isSuccess){
    redirect('/profile');
  }

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <form onSubmit={handleFileUpload} className="p-10">
          <div>
            <textarea
              rows="6"
              className="border text-lg p-3 w-full my-8"
              type="text"
              name="text"
              id=""
              onChange={handleText}
              placeholder="Write something about your post"
            />
          </div>

          <div>
            <p className="text-md mb-1">Choose your photo</p>
            <input
              onChange={handleFile}
              className="font-lg block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name=""
              id=""
              required
            />
          </div>
          <div>
            <input
              disabled={isLoading}
              className="mt-6 bg-primary text-white py-1 px-5 rounded-lg cursor-pointer text-lg"
              type="submit"
              value="Post"
            />
          </div>
          {isLoading && (
            <p className="  font-semibold my-3">
              Loading...
            </p>
          )}
          {isError && (
            <p className=" text-red-500 font-semibold my-3">
              Something went wrong...
            </p>
          )}
        </form>
      </Modal>
    </div>
  );
};
