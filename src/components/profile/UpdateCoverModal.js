"use client";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useUpdateCoverMutation } from "@/redux/features/user/userApi";
import { redirect } from "next/navigation";


export const UpdateCoverModal = ({ open, onCloseModal }) => {

    const [updateCover, { isLoading, isError, isSuccess }] = useUpdateCoverMutation();

  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };


  const handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    updateCover(formData)
  };

  if(isSuccess) {
    redirect('/profile')
  }

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <form onSubmit={handleFileUpload} className="p-10">

          <div>
            <p className="text-md mb-1">Choose your cover photo</p>
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
              value="Upload"
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
