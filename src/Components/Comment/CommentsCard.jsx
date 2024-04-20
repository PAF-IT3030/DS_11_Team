import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentsCard = () => {
  const [isCommentLike, setIsCommentLiked] = useState(false);

  const hancdleLikeComment = () => {
    setIsCommentLiked(!isCommentLike);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              className="h-9 w-9 rounded-full"
              src="https://img.freepik.com/free-photo/side-view-young-woman-shooting-with-projector_23-2149424927.jpg?w=360&t=st=1713608879~exp=1713609479~hmac=08f4db8d129cd6ceed384e2ce2c76b76ab9270d69ffcfb76de092f81d797fc0c"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">Username</span>
              <span className="ml-2">Nice Post</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span>10 min ago</span>
              <span>14 likes</span>
            </div>
          </div>
        </div>
        {isCommentLike ? (
          <AiFillHeart
            onClick={hancdleLikeComment}
            className="text-xs hover:opacity-50 cursor-pointer text-red-600"
          />
        ) : (
          <AiOutlineHeart
            onClick={hancdleLikeComment}
            className="text-xs hover:opacity-50 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default CommentsCard;
