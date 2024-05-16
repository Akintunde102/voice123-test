import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ActorCard } from '@/src/components/Search/ActorCard';
import { SearchForm } from '@/src/components/Search/SearchForm';
import Paper from '@mui/material/Paper';

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#ddc",
  },
  headerPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ddd",
    height: { xs: "auto", sm: "80px" },
    padding: "10px 10px",
  },
  contentBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px",
  },
  gridContainer: {
    width: { xs: '100%', sm: '100%' },
    maxWidth: "1200px",
    padding: "10px",
  },
};

export default function SearchListPage() {
  return (
    <>
      <Box sx={styles.mainContainer}>
        <Paper
          component={"div"}
          elevation={1}
          sx={styles.headerPaper}
        >
          <SearchForm />
        </Paper>
        <Box sx={styles.contentBox}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={styles.gridContainer}
          >
            {
              Array(10).fill(null).map((_, i) => <ActorCard key={i} />)
            }
          </Grid>
        </Box>
      </Box>
    </>
  );
}
