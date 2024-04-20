import { TbCircleDashed } from 'react-icons/tb';

export const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">

      {/* General info. of the user */}
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>anne_123</p>
            <button>Edit Profile</button>
            <TbCircleDashed />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>following</span>
            </div>
          </div>

          {/* User Bio */}
          <div>
            <p className="font-semibold">Anne Smith</p>
            <p className="font-thin text-sm">
              Data Science Undergraduate | SLIIT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
