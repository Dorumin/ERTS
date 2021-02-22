import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux';

import GlobalErrorBoundary from './GlobalErrorBoundary';
import App from './App';

export default function Root() {
    return (
        <GlobalErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </GlobalErrorBoundary>
    )
}
