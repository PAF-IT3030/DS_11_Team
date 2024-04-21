import React, { useState } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import ReqUserPostCard from './ReqUserPostCard';
import { PiPersonSimpleRun } from 'react-icons/pi';
import { IoFastFoodOutline } from 'react-icons/io5';

const ReqUserPostPart = () => {
  const [activeTab, setActiveTab] = useState();
  const tabs = [
    {
      tab: 'Post',
      icon: <AiOutlineTable></AiOutlineTable>,
      activeTab: '',
    },
    {
      tab: 'Meal Plans',
      icon: <IoFastFoodOutline></IoFastFoodOutline>,
    },
    {
      tab: 'Workout Plans',
      icon: <PiPersonSimpleRun></PiPersonSimpleRun>,
    },
    {
      tab: 'Saved',
      icon: <BiBookmark></BiBookmark>,
    },
  ];
  return (
    <div>
      <div className="flex space-x-14 border-t realtive">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={`${activeTab === item.tab ? 'border-t border-black' : 'opacity-60'} flex items-center cursor-pointer py-2 text-sm`}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {[1, 1, 1, 1].map((item) => (
            <ReqUserPostCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostPart;
