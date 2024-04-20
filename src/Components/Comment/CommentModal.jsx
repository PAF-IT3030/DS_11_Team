import { 
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalOverlay} from '@chakra-ui/react'
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import CommentsCard from './CommentsCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import "./CommentModal.css";

const CommentModal = ({onClose, isOpen, isSaved, isPostLiked, handlePostLike, handleSavePost}) => {
  return (
    <div>
        <Modal size = {'4xl'} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className = 'flex h-[75vh]'>
              <div className = 'w-[45%] flex flex-col justify-center'>
                  <img className="max-h-full w-full" 
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiYBIe_swsfn0db7rVgkduH693aWsqKqtCm_WB6GoRQ&s' 
                  alt='' />
              </div>

              <div className = 'w-[55%] pl-10'>
                <div className = 'flex justify-between items-center py-5'>
                  <div className = 'flex items-center'>

                    <div>
                    <img className="w-9 h-9 rounded-full" 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s' 
                    alt='' />
                    </div>
                  <div className = 'ml-2'>
                      <p>
                        Username
                      </p>
                  </div>

                </div>
                <BsThreeDots/>
                </div>

              <hr />
              <div className = 'comment'>
                  {[1,1,1,1].map((item, index) => <CommentsCard key={index}/>)}
              </div>

              <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center space-x-2'>
                    {isPostLiked? (
                        <AiFillHeart 
                            className='text-2xl hover:opacity-50 cursor-pointer text-red-500' 
                            onClick={handlePostLike}
                        /> 
                            ) :(
                        <AiOutlineHeart
                            className='text-2xl hover:opacity-50 cursor-pointer' 
                            onClick={handlePostLike}
                        />
                )}

                    <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>

                <div className='cursor-pointer'>
                    {isSaved? (
                        <BsBookmarkFill
                            className='text-xl hover:opacity-50 cursor-pointer' 
                            onClick={handleSavePost}/> 
                    ):(
                        <BsBookmark
                            className='text-xl hover:opacity-50 cursor-pointer' 
                            onClick={handleSavePost}/>
                    )}
                </div>
                </div>

                <div>

                <div className='w-full py-2 px-5'>
                <p>
                    10 likes
                </p>
                <p className='opacity-50 text-sm'>
                    1 day ago
                </p>
                </div>

                <div className='border border-t w-full'>
                <div className='flex w-full items-center px-5'>
                    <BsEmojiSmile/>
                    <input className='commentInput' type='text' placeholder='Add a comment...'/>
                </div>
            </div>

            </div>

              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal;