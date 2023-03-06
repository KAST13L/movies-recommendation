import React from 'react';
import {MovieCard} from "../components";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {movies} from "./stub";
import {AppContextProvider} from "../providers/context";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'Card/MovieCard',
    component: MovieCard,
    argTypes: {
        onSelectClick: action('film selected')
    }
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) =>
    <BrowserRouter>
        <AppContextProvider>
            <MovieCard {...args}/>
        </AppContextProvider>
    </BrowserRouter>

export const View = Template.bind({});
View.args = {
    movie: movies[0],
}


