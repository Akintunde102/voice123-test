
"use client"
import { useEffect, useRef, useState } from 'react';
import Controls from './Controls';
import Box from '@mui/material/Box';
import { isAUrl } from '@/src/app/utils';
import { Typography } from '@mui/material';

const styles = {
  mainContainer: {
    background: "#c1b6bc",
    width: "100%",
    height: "150px",
  },
  innerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    height: "100%",
  },
  authorText: {
    display: "flex",
    gap: "20px",
    color: "#f50"
  }
};

const AudioPlayerContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.innerContainer}>
        {children}
      </Box>
    </Box>
  );
};

const _AudioPlayer = ({ track }: {
  track: {
    title: string;
    src: string;
    author: string;
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
    <>
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
    </>
  );
};

const AudioPlayer = ({ track }: {
  track: {
    title: string;
    src: string;
    author: string;
  }
}) => {

  if (!isAUrl(track.src)) {
    return (
      <AudioPlayerContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
          }}>
          <Typography variant="subtitle1"> No Track Found</Typography>
        </Box>
      </AudioPlayerContainer>
    )
  }

  return (
    <AudioPlayerContainer>
      <Box sx={{
        padding: "20px",
      }}>
        <_AudioPlayer track={track} />
      </Box>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
