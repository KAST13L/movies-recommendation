import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, IconButton, Paper} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {MovieType} from "../../../types/types";


interface MovieCardSelectedPropsType {
    movie: MovieType
    onCardDelete: (movie: MovieType) => void
}

export const MovieCardSelected: React.FC<MovieCardSelectedPropsType> = ({
                                                                            movie,
                                                                            onCardDelete
                                                                        }) => {

    const {title, posterPath, releaseDate} = movie;

    return (
        <Paper elevation={5} sx={{margin: 1}}>
            <Card sx={{display: 'flex'}}>
                <CardMedia
                    component="img"
                    sx={{width: 100}}
                    image={posterPath}
                    alt={title}
                />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    position: 'relative'
                }}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1"
                                    component="div">
                            {releaseDate}
                        </Typography>
                    </CardContent>
                    <IconButton
                        onClick={() => onCardDelete(movie)}
                        sx={{
                            position: 'absolute',
                            right: 5,
                            top: 5,
                            background: 'rgba(255,255,255,.3)',
                            color: 'red'
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            </Card>
        </Paper>
    );
}