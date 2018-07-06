import React from 'react';
import StoryModeList from '../containers/StoryModeList';
import './StoryMode.css';

const StoryMode = () => {
    return (
        <div className="story-mode main-content">
            <h1>Story Mode</h1>
            <StoryModeList />
        </div>
    )
}

export default StoryMode;