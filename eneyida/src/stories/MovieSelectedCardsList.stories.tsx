import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {SelectedCardMoviesList} from "../components/selectedMoviesList";
import {movies} from "./stub";
import {GraphQlServer} from "../graphQlServer";
import {AppContextProvider} from "../providers/context";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'List/ SelectedCardMoviesList',
    component: SelectedCardMoviesList
} as ComponentMeta<typeof SelectedCardMoviesList>;

const Template: ComponentStory<typeof SelectedCardMoviesList> = (args) =>
    <BrowserRouter>
        <AppContextProvider>
            <GraphQlServer component={<SelectedCardMoviesList {...args}/>}/>
        </AppContextProvider>
    </BrowserRouter>


export const View = Template.bind({});
View.args = {
    deleteMovie: action('delete movie'),
    selectedMovies: movies
}




