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
          src="https://hips.hearstapps.com/hmg-prod/images/30-day-challenge-bird-dog-ab-wo0-1576613500.jpg?crop=0.565xw:1.00xh;0.218xw,0&resize=1200:*"
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
