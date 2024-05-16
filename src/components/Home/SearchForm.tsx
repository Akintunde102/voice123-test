import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
    },
    stack: {
        spacing: 2,
        useFlexGap: true,
        width: { xs: '100%', sm: '70%' },
        maxWidth: 600,
    },
    title: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 'clamp(3.5rem, 10vw, 4rem)',
    },
    titleSpan: {
        fontSize: 'clamp(3rem, 10vw, 4rem)',
        ml: 2,
        color: 'primary.main',
    },
    grid: {
        pt: 2,
        width: { xs: '100%', sm: 'auto' },
    },
};

export default function SearchForm() {
    return (
        <Container sx={styles.container}>
            <Stack sx={styles.stack}>
                <Typography variant="h1" sx={styles.title}>
                    Voice123
                    <Typography component="span" variant="h1" sx={styles.titleSpan}>
                        Search
                    </Typography>
                </Typography>
                <Grid container spacing={0.5} alignItems="center" sx={styles.grid}>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            id="outlined-basic"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            aria-label="Search for Voice Actors"
                            placeholder="Cartoon Voice Actor"
                            inputProps={{
                                autoComplete: 'off',
                                'aria-label': 'Search for Voice Actors',
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
}
