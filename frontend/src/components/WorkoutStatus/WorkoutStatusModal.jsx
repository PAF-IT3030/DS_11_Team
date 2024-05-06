import React, { useState } from "react";
import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import axios from "axios";

import "tw-elements-react/dist/css/tw-elements-react.min.css";
import DragComponent from "./DragComponent";

// CreatePostModal, showModal, setShowModal
const WorkoutStatusModal = ({ showStatusModal, setShowStatusModal, userId, image, name }) => {
  const [content, setContent] = useState("");
  const [ownerLicense, setOwnerLicense] = useState([]);

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const addStatus = async (status) => {
    try {
      const response = await axios.status("http://localhost:9191/status", status);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async (imageData, statusId) => {
    const { name, photo } = imageData;

    const response = await fetch(photo);
    const blob = await response.blob();

    const formData = new FormData();
    formData.append("image", blob, name);
    formData.append("statusId", statusId);

    try {
      const response = await axios.status(
        "http://localhost:9191/image/fileSystem",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleStatusCreate = async () => {
    const newStatus = {
      type: "photo",
      time: new Date().toISOString(),
      userId: userId,
      userName: name,
      userImg: "http://example.com/image.jpg",
      content: content,
      likeCount: 0,
      commentCount: 0,
      comments: [],
    };

    addStatus(newStatus).then((data) => {
      if (ownerLicense.length !== 0) {
        ownerLicense.forEach((image, index) => {
          uploadImage(image, data.statusId).then((data) => {
            setShowStatusModal(!showStatusModal);
            setContent("");
            setOwnerLicense([]);
            window.location.reload();
          });
        });
      } else {
        setShowStatusModal(!showStatusModal);
        setContent("");
        setOwnerLicense([]);
        window.location.reload();
      }
    });
  };

  return (
    <div>
      {/* <!--Verically centered modal--> */}
      <TEModal show={showStatusModal} setShow={setShowStatusModal}>
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader className="flex justify-center items-center">
              {/* <!--Modal title--> */}
              <p className="text-xl font-semibold leading-normal text-neutral-800 dark:text-neutral-200 text-center">
                New Status Update
              </p>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowStatusModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div>
                <div className="flex items-center font-medium gap-x-3">
                  <img src={image} alt="" className="rounded-full w-10 h-10" />
                  <p>{name}</p>
                </div>
                <div className="mt-3">
                  <textarea
                    className="w-full p-3 rounded-lg resize-none outline-none"
                    placeholder={`What's on your mind, ${name.split(" ")[0]}?`}
                    value={content}
                    onChange={handleChangeContent}
                  ></textarea>
                  <DragComponent
                    ownerLicense={ownerLicense}
                    setOwnerLicense={setOwnerLicense}
                  />
                </div>
              </div>
            </TEModalBody>
            <TEModalFooter>
              <div className="w-full">
                <button
                  onClick={handleStatusCreate}
                  className="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-white py-2 w-full rounded-lg font-medium"
                >
                  Create Status
                </button>
              </div>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default WorkoutStatusModal;
