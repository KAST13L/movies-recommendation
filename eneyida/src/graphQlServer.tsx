import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    createHttpLink,
    from,
    InMemoryCache
} from "@apollo/client";
import React, {ReactComponentElement, useContext} from "react";
import {AppContext} from "./providers/context";
import {I18nProvider} from "./providers/i18n";
import {URI_FOR_GRAPHQL} from "./variables";

interface GraphQlServerPropsType {
    component: ReactComponentElement<any>
}

export const GraphQlServer = ({component}: GraphQlServerPropsType,) => {

    const {state} = useContext(AppContext)


    const httpLink = createHttpLink({
        uri: URI_FOR_GRAPHQL
    });

    const localeMiddleware = new ApolloLink((operation, forward) => {
        const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};
        operation.setContext({
            headers: {...customHeaders, locale: state.locale}
        });

        return forward(operation);
    });

    const client = new ApolloClient({
        link: from([localeMiddleware, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true
    });

    return (
        <I18nProvider locale={state.locale}>
            <ApolloProvider client={client}>
                {component}
            </ApolloProvider>
        </I18nProvider>
    )
};

