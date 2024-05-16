import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

const styles = {
    grid: {
        width: { xs: '100%', sm: '100%' },
        maxWidth: "1000px"
    },
    textField: {
        background: "white",
        borderRadius: 0,
        borderWidth: 0
    },
    button: {
        width: { xs: '100%', sm: 'auto' },
    }
};

export const SearchForm = () => {
    return (
        <Grid
            container
            spacing={0.5}
            alignItems="center"
            sx={styles.grid}
        >
            <Grid item xs={12} sm={9}>
                <TextField
                    id="outlined-basic"
                    hiddenLabel
                    size="small"
                    variant="outlined"
                    aria-label="Search for Voice Actors"
                    placeholder="Cartoon Voice Actor"
                    inputProps={{
                        'aria-label': 'Search for Voice Actors',
                    }}
                    fullWidth
                    autoComplete="on"
                    sx={styles.textField}
                />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
                <Button
                    sx={styles.button}
                    variant="contained" color="primary" startIcon={<SearchIcon />}>
                    Search
                </Button>
            </Grid>
        </Grid>

    );
}
