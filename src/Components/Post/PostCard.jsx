import { useState } from 'react';
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import "./PostCard.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../Comment/CommentModal';  

const PostCard = () => {
    const [showDropDown,setShowDropDown]=useState(false);
    const [isPostLiked, setIsPostLiked]=useState(false);
    const [isSaved, setIsSaved]=useState(false);

    const handleSavePost=()=>{
        setIsSaved(!isSaved)
    }
    const handlePostLike=()=>{
        setIsPostLiked(!isPostLiked);
    }
    const handleClick=()=> {
        setShowDropDown(!showDropDown);
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

                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleClick}/>
                    <div className='dropdown-content'>
                        {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                </div>
            </div>

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

            <div className='w-full py-2 px-5'>
                <p>
                    10 likes
                </p>
                <p className='opacity-50 py-2 cursor-pointer'>
                    View all comments
                </p>
            </div>

            <div className='border border-t w-full'>
                <div className='flex w-full items-center px-5'>
                    <BsEmojiSmile/>
                    <input className='commentInput' type='text' placeholder='Add a comment...'/>
                </div>
            </div>
        </div>
        <CommentModal/>
    
    </div>
  )
}

export default PostCard;