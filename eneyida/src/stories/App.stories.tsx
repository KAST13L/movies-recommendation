import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {GraphQlServer} from "../graphQlServer";
import {App} from '../App';
import {AppContextProvider} from "../providers/context";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'App/ App',
    component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () =>
    <BrowserRouter>
        <AppContextProvider>
            <GraphQlServer component={<App/>}/>
        </AppContextProvider>
    </BrowserRouter>


export const View = Template.bind({});




