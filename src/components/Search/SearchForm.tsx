'use client'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import Box from "@mui/material/Box";

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
        width: { xs: '100%', sm: '100%', md: "auto" },
    }
};


interface SearchFormProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean
}

export const SearchForm = ({ searchQuery, setSearchQuery, handleSubmit, loading }: SearchFormProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchQuery(e.target.value)
    }

    return (
        <Box sx={{
            width: { xs: '100%', sm: '100%', md: "100%" },
            maxWidth: "1000px",
        }}>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={0.5}
                    alignItems="center"
                >
                    <Grid item xs={12} sm={9} md={10} >
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
                            value={searchQuery}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2} >
                        <Button
                            sx={styles.button}
                            variant="contained"
                            color="primary"
                            startIcon={<SearchIcon />}
                            type="submit"
                            disabled={loading}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}
