import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { FaPhotoVideo } from 'react-icons/fa';
import './CreatePostModel.css';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';

const CreatePostModal = ({ onClose, isOpen }) => {
  // State for the caption of the post
  const [caption, setCaption] = useState('');

  // State for the selected file (photo or video)
  const [file, setFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Function to handle caption input change
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  // Function to close the modal and reset file state
  const handleClose = () => {
    onClose();
    setFile(null);
  };

  return (
    <div>
      {/* Modal component */}
      <Modal size={'4xl'} onClose={handleClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* Header of the modal */}
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create New Post</p>
            <Button
              className=""
              variant={'ghost'}
              size="sm"
              colorScheme={'blue'}
            >
              Share
            </Button>
          </div>
          {/* Divider */}
          <hr />
          <ModalBody>
            {/* Body of the modal */}
            <div className="h-[70vh] justify-between pb-5 flex">
              {/* Left section for file upload */}
              <div className="w-[50%]">
                {/* Display file upload area if no file is selected */}
                {!file && (
                  <div className="drag-drop h-full">
                    <div>
                      <FaPhotoVideo className="text-3xl" />
                      <p>Drag Photos or videos here</p>
                    </div>
                    {/* Button to select file from computer */}
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Select From Computer
                    </label>
                    {/* Input element to select file */}
                    <input
                      className="fileInput"
                      type="file"
                      id="file-upload"
                      accept="image/*, video/*"
                      onChange={handleFileChange}
                    />
                  </div>
                )}
                {/* Display selected file */}
                {file && (
                  <img
                    className="max-h-full"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                )}
              </div>
              {/* Divider */}
              <div className="w-[1px] border-2 h-full"></div>
              {/* Right section for post details */}
              <div className="w-[50%]">
                {/* User details */}
                <div className="flex items-center px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s"
                    alt=""
                  />
                  <p className="font-semibold ml-4">username</p>
                </div>
                {/* Caption input */}
                <div className="px-2 py-2">
                  <textarea
                    placeholder="Write a Caption"
                    className="captionInput"
                    name="caption"
                    rows="8"
                    onChange={handleCaptionChange}
                  ></textarea>
                </div>
                {/* Display character count */}
                <div className="flex justify-between px-2">
                  <GrEmoji />
                  <p className="opacity-70">{caption?.length} /2,200</p>
                </div>
                {/* Divider */}
                <hr />
                {/* Location input */}
                <div className="p-2 flex justify-between items-center">
                  <input
                    className="locationInput"
                    type="text"
                    placeholder="location"
                    name="location"
                  />
                  <GoLocation />
                </div>
                {/* Divider */}
                <hr />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
