import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MoviesList} from '../components/moviesList';
import {action} from "@storybook/addon-actions";
import {GraphQlServer} from "../graphQlServer";
import {AppContextProvider} from "../providers/context";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'List/ MoviesList',
    component: MoviesList
} as ComponentMeta<typeof MoviesList>;

const Template: ComponentStory<typeof MoviesList> = (args) =>
    <BrowserRouter>
        <AppContextProvider>
            <GraphQlServer component={<MoviesList {...args}/>}/>
        </AppContextProvider>
    </BrowserRouter>


export const View = Template.bind({});
View.args = {
    selectMovie: action('select movie')
}




