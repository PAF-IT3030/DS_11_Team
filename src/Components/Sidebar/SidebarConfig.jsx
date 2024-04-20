import {
  AiFillCompass,
  AiFillHeart,
  AiFillHome,
  AiFillMessage,
  AiFillPlusCircle,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from 'react-icons/ai';
import { RiVideoFill, RiVideoLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { PiPersonSimpleRunBold } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";

export const menu = [
  {
    title: 'Home',
    icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
    activeIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>,
  },

  {
    title: 'Search',
    icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
    activeIcon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
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
    icon: <PiPersonSimpleRunBold className="text-2xl mr-5"></PiPersonSimpleRunBold>,
    activeIcon: <PiPersonSimpleRunBold className="text-2xl mr-5"></PiPersonSimpleRunBold>,
  },

  {
    title: 'Meal Plans',
    icon: <GiHotMeal className="text-2xl mr-5"></GiHotMeal>,
    activeIcon: <GiHotMeal className="text-2xl mr-5"></GiHotMeal>,
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
