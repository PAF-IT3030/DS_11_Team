import React, { useEffect, useState } from 'react';
import StoryCircle from '../../components/Story/StoryCircle';
import HomeRight from '../../components/HomeRight/HomeRight';
import PostCard from '../../components/Post/PostCard';
import { useGetAllPosts } from '../../hooks/postHooks';
import { useLikePost } from '../../hooks/likeHooks';

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const { isLoading, isError, data, refetch } = useGetAllPosts();
  const { mutate: likePost } = useLikePost();

  useEffect(() => {
      if (data) {
        setPosts(data.content);
      }
  }, [data]);

  const handleLikePost = (postId) => {
    likePost(postId);
    refetch();
  };



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
            {posts && posts.map((post, index) => (
              <PostCard
                key={index}
                description={post?.description}
                imagePath={post?.imagePath}
                createdBy={post?.createdBy}
                creationDateTime={post?.creationDateTime}
                // likesCount={post?.likesCount}
                onSavePost={() => handleSavePost(post?.id)}
                onLikePost={() => handleLikePost(post?.id)}
                isPostLiked={post?.liked}
                isSaved={post?.isSaved}
              />
            ))}
          </div>
        </div>
        {/* Right section */}
        <div className="w-[35%]">
          {/* Render home right component */}
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
