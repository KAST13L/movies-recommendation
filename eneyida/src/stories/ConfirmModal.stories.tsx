import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ConfirmModal} from "../components/ConfirmModal";
import {AppContextProvider} from "../providers/context";
import {BrowserRouter} from "react-router-dom";
import {GraphQlServer} from "../graphQlServer";

export default {
    title: 'Components/Confirm Modal',
    component: ConfirmModal
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) =>
    <BrowserRouter>
        <AppContextProvider>
            <GraphQlServer component={<ConfirmModal {...args}/>}/>
        </AppContextProvider>
    </BrowserRouter>

export const View = Template.bind({});
View.args = {
    open: true,
    onClose: (isOpen) => {
    },
    url: 'http://localhost:3000/recomend/movies/en/hallo%daskoli_202/yoyosamurai',
    title: 'My favorite films list'
}


