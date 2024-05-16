import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import AudioPlayer from '@/src/components/AudioPlayer/AudioPlayer';

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "20px 0"
    },
    avatar: {
        bgcolor: "#f50",
        width: "75px",
        height: "75px",
        borderRadius: "50px",
    },
    actorName: {
        padding: "5px 0",
        textDecoration: 'none',
    },
    actorDescription: {
        padding: "10px 0",
    },
};

export const ActorCard = () => {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card elevation={1}>
                <CardContent>
                    <Box
                        sx={styles.card}
                    >
                        <Avatar
                            sizes="large"
                            sx={styles.avatar}
                            aria-label="recipe">
                            MD
                        </Avatar>

                        <Typography sx={styles.actorName} variant="subtitle1" component="div">
                            <Link href="https://voice123.com/dave" target="_blank" sx={styles.actorName}>
                                Mathew Dave
                            </Link>
                        </Typography>

                        <Typography sx={styles.actorDescription} variant="subtitle2" component="div">
                            Dave is a special dude
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <AudioPlayer
                        track={{
                            title: 'Its a beautiful day',
                            src: "https://res.cloudinary.com/dsph6hnfu/video/upload/v1715810030/kio_oq3pcr.mp3",
                            author: 'Trinix ft Rushawn',
                            thumbnail: "https://srv.carbonads.net/static/30242/5553640155979510763aebb62751652e628b00e1",
                        }} />
                </CardActions>
            </Card>
        </Grid >
    )
}
