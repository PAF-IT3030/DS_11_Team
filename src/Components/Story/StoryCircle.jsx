import React from 'react'
import { useNavigate } from 'react-router-dom';

const StoryCircle = () => {
    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate("/story")
    }
    return (
        <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
            <img className='w-16 h-16 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiYBIe_swsfn0db7rVgkduH693aWsqKqtCm_WB6GoRQ&s' alt='' />
            <p>username</p>
        </div>
    )
}

export default StoryCircle;