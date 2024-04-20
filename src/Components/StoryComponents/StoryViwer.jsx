// Import styled-components library for styling
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Progressbar from './Progressbar'

// Styled component for the container of the Story Viewer
const StoryViwerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
`

// Styled component for the Story Image
const StoryImage = styled.img`
    max-height: 90vh;
    object-fit: contain;
`

const StoryViwer = ({ stories }) => {
    // State variables to manage the current and active story indexes
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle switching to the next story
    const handleNextStory = () => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
            setActiveIndex(activeIndex + 1);
        } else if (currentStoryIndex === stories.length - 1) {
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        }
    }

    // Effect to auto-play the stories with a specified duration
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextStory();
        }, 2000);
        return () => clearInterval(interval);
    }, [currentStoryIndex]);

    return (
        <div className='relative w-full'>
            {/* Container for the story viewer */}
            <StoryViwerContainer>
                {/* Render the current story image */}
                <StoryImage src={stories?.[currentStoryIndex].image} />
                
                {/* Progress bars for all stories */}
                <div className='absolute top-0 flex w-full'>
                    {/* Render progress bars for each story */}
                    {stories.map((item, index) => <Progressbar key={index} duration={2000} index={index} activeIndex={activeIndex} />)}
                </div>
            </StoryViwerContainer>
        </div>
    )
}

export default StoryViwer;
