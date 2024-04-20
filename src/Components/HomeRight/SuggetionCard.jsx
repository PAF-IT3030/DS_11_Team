import React from 'react'

const SuggetionCard = () => {
  return (
    // Container for each suggestion card
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        {/* User profile picture */}
        <img className='w-9 h-9 rounded-full' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s' 
          alt=''
        />
        <div className='ml-2'>
          {/* Username */}
          <p className='text-sm font-semibold'>username</p>
          {/* "Follows you" indication */}
          <p className='text-sm font-semibold opacity-70m'>Follows you</p>
        </div>
      </div>
      {/* "Follow" button */}
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggetionCard;
