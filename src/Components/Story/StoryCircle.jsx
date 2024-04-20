import React from 'react'
import { useNavigate } from 'react-router-dom';

const StoryCircle = () => {
    // Hook for navigation
    const navigate = useNavigate()

    // Function to handle navigation to the story page
    const handleNavigate = () => {
        navigate("/story")
    }
    
    return (
        // Clickable circle for the story with username
        <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
            {/* User profile picture */}
            <img className='w-16 h-16 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiYBIe_swsfn0db7rVgkduH693aWsqKqtCm_WB6GoRQ&s' alt='' />
            {/* Username */}
            <p>username</p>
        </div>
    )
}

export default StoryCircle;
