import React, { useState } from 'react';
import {Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from '@chakra-ui/react';
import { FaPhotoVideo } from 'react-icons/fa';
import "./CreatePostModel.css";
import { GrEmoji } from "react-icons/gr"
import { GoLocation } from "react-icons/go"

const CreatePostModal = ({onClose,isOpen}) => {

    const [caption,setCaption]=useState("");

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleCaptionChange=(e)=>{
        setCaption(e.target.value)
    }

    const handleClose=()=>{
        onClose();
        setFile(null)
    }

  return (
    <div>
        <Modal size={"4xl"} onClose={handleClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 items-center'>
            <p>Create New Post</p>
            <Button className='' variant={"ghost"} size="sm" colorScheme={'blue'}>Share</Button>
          </div>
          <hr/>
          <ModalBody>
            <div className='h-[70vh] justify-between pb-5 flex'>
                <div className='w-[50%]'>
                    {!file && <div
                    // onDrop={handleDrop}
                    // onDragOver={handleDragOver}
                    // onDragLeave={handleDragLeave}
                    className="drag-drop h-full"
                    >
                        <div>
                            <FaPhotoVideo className='text-3xl'/>
                            <p>Drag Photos or videos here</p>
                        </div>
                        <label htmlFor='file-upload' className='custom-file-upload'>Select From Computer</label>

                        <input className='fileInput' type='file' id='file-upload' accept='image/*, video/*' onChange={handleFileChange} />
                    </div>}

                    {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt="" />}    

                            
                </div>
                <div className='w-[1px] border-2 h-full'></div>

                <div className='w-[50%]'>
                    <div className='flex items-center px-2'>
                        <img className='w-7 h-7 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s' alt=''/>
                        <p className='font-semibold ml-4'>username</p>
                    </div>
                    <div className='px-2 py-2'>
                        <textarea placeholder='Write a Caption' className='captionInput' name="caption" rows="8" onChange={handleCaptionChange}></textarea>
                    </div>

                    <div className='flex justify-between px-2'>
                        <GrEmoji/>
                        <p className='opacity-70'>{caption?.length} /2,200</p>
                    </div>
                    <hr/>

                    <div className='p-2 flex justify-between items-center'>
                        <input className='locationInput' type="text" placeholder='location' name='location' />
                        <GoLocation/>
                    </div>
                    <hr />
                </div> 
            </div>
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePostModal;