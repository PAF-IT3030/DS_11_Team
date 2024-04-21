import React from 'react';
import StoryViwer from '../../Components/StoryComponents/StoryViwer';

const Story = () => {
  // Array of story objects containing image URLs
  const story = [
    {
      image:
        'https://images.pexels.com/photos/19285835/pexels-photo-19285835/free-photo-of-cocktail-with-slice-of-lime.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      image:
        'https://images.pexels.com/photos/11407376/pexels-photo-11407376.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      image:
        'https://images.pexels.com/photos/10994352/pexels-photo-10994352.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      image:
        'https://images.pexels.com/photos/11407376/pexels-photo-11407376.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      image:
        'https://images.pexels.com/photos/19285835/pexels-photo-19285835/free-photo-of-cocktail-with-slice-of-lime.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
  ];
  return (
    <div>
      {/* Render the StoryViwer component with the story array */}
      <StoryViwer stories={story} />
    </div>
  );
};

export default Story;
