
"use client"
import { useEffect, useRef, useState } from 'react';
import Controls from './Controls';
import Box from '@mui/material/Box';

const styles = {
  mainContainer: {
    background: "#c1b6bc",
    width: "100%",
  },
  innerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px"
  },
  authorText: {
    display: "flex",
    gap: "20px",
    color: "#f50"
  }
};

const AudioPlayer = ({ track }: {
  track: {
    title: string;
    src: string;
    author: string;
    thumbnail: string;
  }
}) => {

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef: any = useRef();
  const progressBarRef: any = useRef();

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  useEffect(() => {
    onLoadedMetadata()
  }, [])


  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.innerContainer}>
        <Box>
          <audio
            src={track.src}
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
          />
          <Box sx={styles.authorText}>
            {track.author}
          </Box>
        </Box>
        <Controls
          {...{
            audioRef,
            progressBarRef,
            duration,
            setTimeProgress,
            timeProgress,
            seekTime: 15,
            defaultVolumeInPercentage: 60
          }}
        />
      </Box>
    </Box>
  );
};

export default AudioPlayer;
