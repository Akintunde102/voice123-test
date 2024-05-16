import { useState, useEffect, useRef, useCallback } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseIcon from '@mui/icons-material/Pause';
import React from 'react';
import { formatTime } from '../utils';
import './styles.css'

interface ControlProps {
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    progressBarRef: React.MutableRefObject<HTMLInputElement>;
    duration: number;
    setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
    timeProgress: number;
    seekTime: number;
    defaultVolumeInPercentage: number
}

const Controls = ({
    audioRef,
    progressBarRef,
    duration,
    setTimeProgress,
    timeProgress,
    seekTime,
    defaultVolumeInPercentage
}: ControlProps) => {
    const [isPlaying, setIsPlaying] = useState(false);


    const togglePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    const playAnimationRef: any = useRef(null);

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = String(currentTime);
        const progressPercentage = (currentTime / duration) * 100;
        progressBarRef.current.style.setProperty('--range-progress', `${progressPercentage}%`);
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, setTimeProgress]);

    useEffect(() => {
        audioRef.current.volume = defaultVolumeInPercentage / 100;
        if (isPlaying) {
            audioRef.current.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
            audioRef.current.pause();
            if (playAnimationRef.current) {
                cancelAnimationFrame(playAnimationRef.current);
            }
        }

        return () => {
            if (playAnimationRef.current) {
                cancelAnimationFrame(playAnimationRef.current);
            }
        };
    }, [isPlaying, audioRef, repeat]);



    const skipForward = () => {
        audioRef.current.currentTime += seekTime;
    };

    const skipBackward = () => {
        audioRef.current.currentTime -= seekTime;
    };

    const handleProgressChange = () => {
        audioRef.current.currentTime = Number(progressBarRef.current.value);
        setTimeProgress(audioRef.current.currentTime);
    };

    return (
        <Stack direction="column">
            <Box sx={{
                display: "flex",
                flexDirection: "row"
            }}>
                <IconButton sx={{ flex: 1 }} onClick={skipBackward}>
                    <FastRewindIcon />
                </IconButton>
                <IconButton sx={{ flex: 1 }} onClick={togglePlayPause}>
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <IconButton sx={{ flex: 1 }} onClick={skipForward}>
                    <FastForwardIcon />
                </IconButton>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%"
            }}>
                <Typography>{formatTime(timeProgress)}</Typography>
                <input
                    style={{
                        width: "100%"
                    }}
                    type="range"
                    ref={progressBarRef}
                    defaultValue="0"
                    onChange={handleProgressChange}
                />
                <Typography>{formatTime(duration)}</Typography>
            </Box>
        </Stack>
    );
};

export default Controls;
