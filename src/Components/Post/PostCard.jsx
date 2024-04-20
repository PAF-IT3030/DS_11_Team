import { useState } from 'react';
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import "./PostCard.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../Comment/CommentModal';  
import { useDisclosure } from '@chakra-ui/react';

const PostCard = () => {
    const [showDropDown,setShowDropDown]=useState(false);
    const [isPostLiked, setIsPostLiked]=useState(false);
    const [isSaved, setIsSaved]=useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();

    // Function to handle saving/un-saving a post
    const handleSavePost = () => {
        setIsSaved(!isSaved);
    }

    // Function to handle liking/un-liking a post
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

    // Function to toggle dropdown visibility
    const handleClick = () => {
        setShowDropDown(!showDropDown);
    } 
    const handleOpenCommentModal =() =>{
        onOpen()
    }

  return (
    <div className = 'border rounded-md w-full'>
        <div className='border round-md w-full'>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center'>
                    <img className="h-12 w-12 rounded-full" 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s' 
                    alt=''/>
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>
                            username
                        </p>
                        <p className='font-thin text-sm'>
                            location
                        </p>
                    </div>
                </div>

                    {/* Dropdown for post options */}
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick}/>
                        <div className='dropdown-content'>
                            {/* Dropdown item to delete post */}
                            {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>

                {/* Post image */}
                <div className="w-full">
                    <img className="w-full" 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiYBIe_swsfn0db7rVgkduH693aWsqKqtCm_WB6GoRQ&s' 
                    alt='' />
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

                    <FaRegComment onClick = {handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
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

                {/* Post likes count and view all comments */}
                <div className='w-full py-2 px-5'>
                    <p>
                        10 likes
                    </p>
                    <p className='opacity-50 py-2 cursor-pointer'>
                        View all comments
                    </p>
                </div>

                {/* Comment input */}
                <div className='border border-t w-full'>
                    <div className='flex w-full items-center px-5'>
                        <BsEmojiSmile/>
                        <input className='commentInput' type='text' placeholder='Add a comment...' />
                    </div>
                </div>
            </div>
            {/* Comment modal */}
            <CommentModal/>
        </div>
        <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved}/>
    
    </div>
  )
}

export default PostCard;
