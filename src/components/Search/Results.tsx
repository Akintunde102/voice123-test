'use client'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { ActorCard } from '@/src/components/Search/ActorCard';
import { Typography } from '@mui/material';
import { PartialActorResponseItem } from '@/src/app/type';

const styles = {
    gridContainer: {
        width: { xs: '100%', sm: '100%' },
        maxWidth: "1200px",
        padding: "10px",
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }
};

interface ResultsProps {
    items: PartialActorResponseItem[]
    matchingValue: string;
    searchQuery: string;
    loading: boolean
}

export const Results = ({ items, matchingValue, loading, searchQuery }: ResultsProps) => {
    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            sx={styles.gridContainer}
        >
            {
                items.length !== 0
                    ? items.map((item, key) => <ActorCard key={key} item={item} matchingValue={matchingValue} />)
                    : (
                        <Grid
                            item
                            xs={12}
                            sx={styles.item}
                        >
                            <Typography variant="subtitle1">{loading ? "...Loading data for" : "No Search Results for"}</Typography>
                            <Typography variant="subtitle1" component="span" sx={{ color: "#f50" }}> &nbsp; "{searchQuery}"</Typography>
                        </Grid>
                    )
            }
        </Grid>

    );
}
