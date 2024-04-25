import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { FaPhotoVideo } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { useCreatePost } from '../../hooks/postHooks';

const CreatePostModal = ({ onClose, isOpen }) => {

  const { mutate: createPost, isLoading } = useCreatePost();

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

  // Function to handle post creation
  const handleCreatePost = () => {
    const formData = new FormData();
    formData.append('description', caption);
    formData.append('image', file)
    createPost(formData);

    // Close the modal after posting
    handleClose();
  };

  return (
    <div>
      <Modal size={'4xl'} onClose={handleClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create New Post</p>
            <Button
              className=""
              variant={'ghost'}
              size="sm"
              colorScheme={'blue'}
              onClick={handleCreatePost}
              disabled={!file || isLoading} // Disable the button if no file is selected or if loading
            >
              {isLoading ? 'Posting...' : 'Share'}
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="h-[70vh] justify-between pb-5 flex">
              <div className="w-[50%]">
                {!file && (
                  <div className="drag-drop h-full">
                    <div>
                      <FaPhotoVideo className="text-3xl" />
                      <p>Drag Photos or videos here</p>
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Select From Computer
                    </label>
                    <input
                      className="fileInput"
                      type="file"
                      id="file-upload"
                      accept="image/*, video/*"
                      onChange={handleFileChange}
                    />
                  </div>
                )}
                {file && (
                  <img
                    className="max-h-full"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                )}
              </div>
              <div className="w-[1px] border-2 h-full"></div>
              <div className="w-[50%]">
                <div className="flex items-center px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s"
                    alt=""
                  />
                  <p className="font-semibold ml-4">username</p>
                </div>
                <div className="px-2 py-2">
                  <textarea
                    placeholder="Write a Caption"
                    className="captionInput"
                    name="caption"
                    rows="8"
                    onChange={handleCaptionChange}
                  ></textarea>
                </div>
                <div className="flex justify-between px-2">
                  <GrEmoji />
                  <p className="opacity-70">{caption?.length} /2,200</p>
                </div>
                <hr />
                <div className="p-2 flex justify-between items-center">
                  <input
                    className="locationInput"
                    type="text"
                    placeholder="location"
                    name="location"
                  />
                  <GoLocation />
                </div>
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
