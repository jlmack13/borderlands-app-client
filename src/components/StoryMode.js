import React from 'react';
import StoryList from '../containers/StoryList';
import './StoryMode.css';

const StoryMode = () => {
    return (
        <div className="story-mode main-content">
            <h1>Story Mode</h1>
            <StoryList />
        </div>
    )
}

export default StoryMode;