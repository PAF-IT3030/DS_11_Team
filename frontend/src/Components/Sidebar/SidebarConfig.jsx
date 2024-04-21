import {
  AiFillHeart,
  AiFillHome,
  AiFillPlusCircle,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePlusCircle,  
} from 'react-icons/ai';
import { IoFastFoodOutline,IoFastFood } from "react-icons/io5";
import { CgProfile } from 'react-icons/cg';
import { GrSearch, GrSearchAdvanced } from "react-icons/gr";
import { PiPersonSimpleRun,PiPersonSimpleRunFill } from "react-icons/pi";



export const menu = [
  {
    title: 'Home',
    icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
    activeIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>,
  },

  {
    title: 'Search',
    icon: <GrSearch className="text-2xl mr-5"></GrSearch>,
    activeIcon: <GrSearchAdvanced className="text-2xl mr-5"></GrSearchAdvanced>,
  },

  // {
  //   title: 'Messages',
  //   icon: <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>,
  //   activeIcon: <AiFillMessage className="text-2xl mr-5"></AiFillMessage>,
  // },

  {
    title: 'Create',
    icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,
    activeIcon: <AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>,
  },

  {
    title: 'Workout Plans',
    icon: <PiPersonSimpleRun className="text-2xl mr-5"></PiPersonSimpleRun>,
    activeIcon: <PiPersonSimpleRunFill className="text-2xl mr-5"></PiPersonSimpleRunFill>,
  },

  {
    title: 'Meal Plans',
    icon: <IoFastFoodOutline className="text-2xl mr-5"></IoFastFoodOutline>,
    activeIcon: <IoFastFood className="text-2xl mr-5"></IoFastFood>,
  },
  
  {
    title: 'Notifications',
    icon: <AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>,
    activeIcon: <AiFillHeart className="text-2xl mr-5"></AiFillHeart>,
  },

  {
    title: 'Profile',
    icon: <CgProfile className="text-2xl mr-5"></CgProfile>,
    activeIcon: <CgProfile className="text-2xl mr-5"></CgProfile>,
  },
];
