import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

import Wall from "../components/Posts/Wall";

const HomePage = () => {
  return (
    <div className="flex gap-x-14 bg-black/5">
      <Sidebar />
      <Wall />
    </div>
  );
};

export default HomePage;
