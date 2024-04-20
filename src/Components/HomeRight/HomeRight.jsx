import SuggetionCard from './SuggetionCard';

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='w-12 h-12 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s' alt=''/>
            </div>
            <div className='ml-3'>
              <p>FullName</p>
              <p>username</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold'>switch</p>
          </div>
        </div>
        <div className='space-y-5 mt-10'>
            {[1,1,1,1,1].map((item, index)=><SuggetionCard key={index}/>)}
          </div>
      </div>
    </div>
  )
}

export default HomeRight;