import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from './App';
import {GraphQlServer} from "./graphQlServer";
import {AppContextProvider} from "./providers/context";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <AppContextProvider>
            <GraphQlServer component={<App/>}/>
        </AppContextProvider>
    </BrowserRouter>);

