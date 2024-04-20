import { 
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalOverlay} from '@chakra-ui/react'
import {BsBookmark, BsBookmarkFill, BsThreeDots} from 'react-icons/bs'
import CommentsCard from './CommentsCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';

const CommentModal = (onClose, isOpen) => {
  return (
    <div>
        <Modal size = {'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
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
                    <img className="h-9 w-9 rounded-full" 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s' 
                    alt='' />
                    </div>

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

              <div>
                  {[1,1,1,1].map((item, index) => <CommentsCard key={index}/>)}
              </div>

              <div className='flex justify-between items-center w-full px-5 py-4'>
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
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal;