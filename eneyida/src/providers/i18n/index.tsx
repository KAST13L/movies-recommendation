import React, {Fragment, ReactComponentElement} from 'react';
import {IntlProvider} from 'react-intl';
import {LOCALES} from "../../variables";
import messages from "../../messages";
import {flatten} from 'flat';


export const I18nProvider = ({
                      children,
                      locale = LOCALES.ENGLISH
                  }: { children: ReactComponentElement<any>, locale: string }) => (
    <IntlProvider
        textComponent={Fragment}
        locale={locale}
        messages={flatten(messages[locale])}
    >
        {children}
    </IntlProvider>
);

