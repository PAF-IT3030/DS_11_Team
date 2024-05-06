import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Statuses from "../WorkoutStatus/Statuses"

const Wall = () => {
  return (
    <div
      style={{
        flex: 6,
        top: "70px",
        maxHeight: "calc(100vh - 70px)",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="flex flex-col py-5 gap-y-4"
    >
      <CreatePost />
      <Posts />
      <Statuses />
    </div>
  );
};

export default Wall;
