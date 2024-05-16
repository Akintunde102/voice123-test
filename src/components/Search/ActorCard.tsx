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
import { PartialActorResponseItem } from '@/src/app/type';
import { mapActorDetails } from '@/src/app/utils';

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "20px 0",
        height: "200px"
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


interface ActorCardProps {
    item: PartialActorResponseItem;
    matchingValue: string;
}


export const ActorCard = ({ item, matchingValue }: ActorCardProps) => {
    const { name, summary, pictureSource, nameInitials, username, headline, track } = mapActorDetails(item, matchingValue);

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
                            aria-label="recipe"
                            src={pictureSource}
                        >
                            {nameInitials}
                        </Avatar>

                        <Typography sx={styles.actorName} variant="subtitle1" component="div">
                            <Link href={`https://voice123.com/${username}`} target="_blank" sx={styles.actorName}>
                                {name}
                            </Link>
                        </Typography>

                        <Typography sx={styles.actorDescription} variant="subtitle2" component="div">
                            {headline}
                        </Typography>
                    </Box>

                    <Box sx={{
                        height: "100px"
                    }}>
                        <Typography variant="subtitle2" color="text.secondary" >
                            {summary}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions disableSpacing>
                    <AudioPlayer
                        track={track} />
                </CardActions>
            </Card>
        </Grid >
    )
}
