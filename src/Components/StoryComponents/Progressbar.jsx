import React, { useEffect, useState } from 'react'
import "./Progressbar.css";
//import { progress } from 'framer-motion';

const Progressbar = ({index, activeIndex, duration}) => {
    // State to track the progress of the progress bar
    const [progress, setProgress] = useState(0);

    // Effect to update the progress bar
    useEffect(() => {
        // Interval to update progress every 10ms based on the duration
        const interval = setInterval(() => {
            setProgress((preProgress) => {
                // Increment progress until it reaches 100
                if (preProgress < 100) {
                    return preProgress + 1;
                }
                // Clear interval when progress reaches 100
                clearInterval(interval);
                return preProgress;
            });
        }, duration / 100); // Dividing duration by 100 to update progress every 10ms
        // Cleanup function to clear interval
        return () => {
            clearInterval(interval);
        };
    }, [duration, activeIndex]); // Dependencies: duration and activeIndex

    // Effect to reset progress when activeIndex changes
    useEffect(() => {
        setProgress(0);
    }, [activeIndex]); // Dependency: activeIndex

    // Check if the progress bar is active
    const isActive = index === activeIndex;

    // Render the progress bar
    return (
        <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
            <div className={` ${isActive ? "progress-bar" : ""}`} style={{ width:`${progress}%` }}>
            </div>
        </div>
    );
};

export default Progressbar;
