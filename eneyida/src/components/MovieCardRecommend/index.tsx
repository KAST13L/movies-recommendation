import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {MovieType} from "../../types/types";


interface MovieCardRecommendPropsType {
    movie: MovieType,
}

export const MovieCardRecommend: React.FC<MovieCardRecommendPropsType> = ({movie}) => {

    const {title, posterPath, releaseDate} = movie

    return (
        <Card sx={{maxWidth: 330}}>
            <CardMedia
                component="img"
                height="400"
                image={posterPath}
                alt={title}
            />
            <CardContent>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {releaseDate}
                </Typography>
            </CardContent>
        </Card>
    );
};

