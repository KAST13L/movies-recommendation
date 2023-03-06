import React, {useCallback, useState} from 'react';
import {MovieType} from "../../types/types";
import {MAX_SELECTED_MOVIES} from "../../variables";

export const useMovies = () => {

    const [selectedMovies, setSelectedMovies] = useState<MovieType[]>([])

    const selectMovie = useCallback((movie: MovieType) => {

        const selectedMoviesLength = selectedMovies.length
        const isNewMovie = !selectedMovies.find(({id}) => id === movie.id)

        if (isNewMovie && selectedMoviesLength < MAX_SELECTED_MOVIES) {
            setSelectedMovies([movie, ...selectedMovies])
        }

    }, [selectedMovies])

    const deleteMovie = useCallback((movie: MovieType) => {
        setSelectedMovies(selectedMovies.filter(({id}) => id !== movie.id))
    }, [selectedMovies])


    return {
        selectedMovies,
        selectMovie,
        deleteMovie
    }
};

