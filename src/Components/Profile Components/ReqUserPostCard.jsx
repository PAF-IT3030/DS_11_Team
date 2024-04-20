import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import './ReqUserPostCard.css';

const ReqUserPostCard = () => {
  return (
    <div className="p-2">
      <div className="post w-60 h-60">

        {/* Post */}
        <img
          className="cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiYBIe_swsfn0db7rVgkduH693aWsqKqtCm_WB6GoRQ&s"
          alt=""
        />

        {/* Likes & Comments */}
        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div>
              <AiFillHeart></AiFillHeart> <span>10</span>
            </div>
            <div>
              <FaComment /> <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
