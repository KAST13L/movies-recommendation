import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import {MoviesList} from "../../components/moviesList";
import {useMovies} from "../../hooks/useMovies/useMovies";
import { SelectedCardMoviesList } from '../../components/selectedMoviesList';

export const Home = () => {

    const {selectedMovies, deleteMovie, selectMovie} = useMovies()

    return (
        <Box sx={{flexGrow: 1, marginTop: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={5}>
                        filters section
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <MoviesList selectMovie={selectMovie}/>
                </Grid>

                <Grid item xs={12} md={4}>
                    <SelectedCardMoviesList selectedMovies={selectedMovies}
                                        deleteMovie={deleteMovie}/>
                </Grid>
            </Grid>
        </Box>
    );
};