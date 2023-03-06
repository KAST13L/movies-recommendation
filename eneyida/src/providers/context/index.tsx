import React, {createContext, useReducer} from 'react';
import {STORAGE_KEY} from "../../variables";
import {saveToStorage} from "../../utils/localStorage";
import {useDefaultContext} from "./defaultContext";

const AppContext = createContext<any | null>(null);

let reducer = (state: { locale: string }, action: any): any => {
    switch (action.type) {
        case "setLocale":
            saveToStorage(STORAGE_KEY, action.locale);
            return {...state, locale: action.locale};
    }
};

const AppContextProvider = ({children}: any) => {

    const defaultContext = useDefaultContext();
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = {state, dispatch};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext, AppContextProvider};