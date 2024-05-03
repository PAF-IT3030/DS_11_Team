import React from "react";

const RightBar = () => {
  return (
    <div
      className="pr-5"
      style={{
        flex: 3,
        position: "sticky",
        top: "70px",
        height: "calc(100vh - 70px)",
      }}
    >
      {/* container */}
      <div className="py-5">
        {/* friends */}
        <div className="p-5 mb-5 bg-white drop-shadow rounded-2xl">
          <span className="text-gray-500 font-semibold text-lg">Friends</span>
          {/* friend */}
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="font-medium">Jane Doe</span>
            </div>
            <div className="flex items-center">
              <button className="border-none py-1 px-5 rounded-full bg-blue-400 hover:bg-blue-500 active:bg-blue-400 text-white">
                Add
              </button>
            </div>
          </div>
          {/* friend */}
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="font-medium">Jane Doe</span>
            </div>
            <div className="flex items-center">
              <button className="border-none py-1 px-5 rounded-full bg-blue-400 hover:bg-blue-500 active:bg-blue-400 text-white">
                Add
              </button>
            </div>
          </div>
          {/* friend */}
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="font-medium">Jane Doe</span>
            </div>
            <div className="flex items-center">
              <button className="border-none py-1 px-5 rounded-full bg-blue-400 hover:bg-blue-500 active:bg-blue-400 text-white">
                Add
              </button>
            </div>
          </div>
          {/* friend */}
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="font-medium">Jane Doe</span>
            </div>
            <div className="flex items-center">
              <button className="border-none py-1 px-5 rounded-full bg-blue-400 hover:bg-blue-500 active:bg-blue-400 text-white">
                Add
              </button>
            </div>
          </div>
          {/* friend */}
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="font-medium">Jane Doe</span>
            </div>
            <div className="flex items-center">
              <button className="border-none py-1 px-5 rounded-full bg-blue-400 hover:bg-blue-500 active:bg-blue-400 text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
