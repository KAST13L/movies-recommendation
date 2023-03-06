import React from 'react';
import {MovieCardSelected} from "../components";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {movies} from "./stub";
import {AppContextProvider} from "../providers/context";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'Card/MovieCardSelected',
    component: MovieCardSelected,
    argTypes: {
        onSelectClick: action('film selected')
    }
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (args) =>
    <BrowserRouter>
        <AppContextProvider>
            <MovieCardSelected {...args}/>
        </AppContextProvider>
    </BrowserRouter>

export const View = Template.bind({});
View.args = {
    movie: movies[0],
}


