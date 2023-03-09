import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import {MoviesList} from "../../components/moviesList";
import {useMovies} from "../../hooks/useMovies/useMovies";
import {Filters} from '../../components/filters';
import {useFilters} from "../../hooks/useFilters";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "./queries";
import {SelectedCardMoviesList} from "../../components";


export const Home = () => {
    const {selectedMovies, deleteMovie, selectMovie} = useMovies()
    const {filter, setPage, setFilter} = useFilters();
    const {loading, error, data } = useQuery(MOVIES_QUERY, { variables: filter});

    return (
        <Box sx={{flexGrow: 1, marginTop: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={5} sx={{p:'16px'}}>
                        <Filters onSubmit={setFilter} initialValues={filter}/>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <MoviesList selectMovie={selectMovie} filter={filter}
                                setPage={setPage}/>
                </Grid>

                <Grid item xs={12} md={4}>
                    <SelectedCardMoviesList selectedMovies={selectedMovies}
                                            deleteMovie={deleteMovie}/>
                </Grid>
            </Grid>
        </Box>
    );
};