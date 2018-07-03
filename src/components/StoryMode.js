import React from 'react';
import StoryModeContainer from '../containers/StoryModeContainer';
import './StoryMode.css';

const StoryMode = () => {
    return (
        <div className="story-mode main-content">
            <h1>Story Mode</h1>
            <StoryModeContainer />
        </div>
    )
}

export default StoryMode;