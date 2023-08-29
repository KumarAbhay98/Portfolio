import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import './MusicPlayer.css'; // You can create this CSS file for styling

const MusicPlayer = ({ audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audioElement = document.getElementById('background-audio');
        if (isPlaying) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`music-player ${isPlaying ? 'playing' : 'paused'}`}>
            <audio id="background-audio" loop={true}>
                <source src={audioUrl} type="audio/mp3" />
            </audio>
            <button className="play-pause-button" onClick={togglePlay}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
        </div>
    );
};

export default MusicPlayer;
