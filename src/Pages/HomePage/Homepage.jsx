import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard";
// import CreatePostModal from "../../Components/Post/CreatePostModal";

const Homepage = () => {
  // Render the homepage layout
  return (
    <div>
      {/* Main content area */}
      <div className="mt-10 flex w-[100%] justify-center">
        {/* Left section */}
        <div className="w-[44%] px-10">
          {/* Story section */}
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {/* Render story circles */}
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <StoryCircle key={index} />
            ))}
          </div>
          {/* Post section */}
          <div className="space-y-10 w-full mt-10">
            {/* Render post cards */}
            {[1,1,1].map((item, index)=><PostCard key={index}/>)}
          </div>
        </div>
        {/* Right section */}
        <div className="w-[35%]">
          {/* Render home right component */}
          <HomeRight/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
