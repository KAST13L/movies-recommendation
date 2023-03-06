import React from 'react';
import Typography from "@mui/material/Typography";
import {MovieCardSelected} from "./movieCardSelected";
import {MovieType} from "../../types/types";
import {SelectedMoviesForm} from "./selectedMoviesForm";
import {Paper, styled} from "@mui/material";
import Stack from "@mui/material/Stack";
import {FormattedMessage} from "react-intl";

const MoviesList = styled(Stack)(() => ({
    overflow: 'auto',
    height: '90%'
}))

const SelectedMovies = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 6%)',
    position: 'sticky',
    top: theme.spacing(2),
}))

interface SelectedCardMoviesListPropsType {
    selectedMovies: any[]
    deleteMovie: (movie: MovieType) => void
}

export const SelectedCardMoviesList: React.FC<SelectedCardMoviesListPropsType> = ({
                                                                                      selectedMovies,
                                                                                      deleteMovie
                                                                                  }) => {

    return (
        <SelectedMovies>
            {
                !selectedMovies.length &&
                <Typography sx={{textAlign: 'center', paddingTop: 5}}
                            component="div" variant="h5"><FormattedMessage id="no_selected_movies" />
                </Typography>
            }
            <MoviesList>
                {
                    selectedMovies.map(el => <MovieCardSelected
                        key={el.id}
                        movie={{...el}}
                        onCardDelete={deleteMovie}/>)
                }
            </MoviesList>
            {
                !!selectedMovies.length &&
                <SelectedMoviesForm selectedMovies={selectedMovies}/>
            }
        </SelectedMovies>
    );
};

