'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SearchForm from './components/SearchForm';

export default function HomePage() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #CEE5FD, #FFF)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SearchForm />
    </Box>
  );
}
