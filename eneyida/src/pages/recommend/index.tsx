import React from 'react';
import {useSearchParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {useQuery} from "@apollo/client";
import {MOVIES_BY_IDS_QUERY} from "./queries";
import {MovieType} from "../../types/types";
import {Grid} from "@mui/material";
import {MovieCardRecommend} from "../../components/MovieCardRecommend";


export const Recommend = () => {

    const [searchParams] = useSearchParams();
    const {
        loading,
        error,
        data
    } = useQuery(MOVIES_BY_IDS_QUERY, {variables: {ids: searchParams.get('ids')?.split(',').map((id) => +id)}})

    if (error) {
        return <div>ERROR</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Typography variant={'h2'} component={'div'} sx={{p: 3}}>
                {searchParams.get('title')}
            </Typography>
            <Grid container spacing={2}>
                {
                    data.moviesByIds && data.moviesByIds.map((el: MovieType) =>
                        <Grid item xs={12} sm={6} md={4} lg={3}
                              key={el.id}>
                            <MovieCardRecommend movie={{...el}}/>
                        </Grid>)
                }
            </Grid>
        </>
    );
};
