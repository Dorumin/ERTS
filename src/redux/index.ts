import { createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useSelector as baseUseSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

export type RootState = ReturnType<typeof reducer>

const store = createStore<RootState, any, unknown, unknown>(
    reducer,
    composeWithDevTools(
        applyMiddleware()
    )
);

// Bound type helpers
const useSelector: TypedUseSelectorHook<RootState> = baseUseSelector;

export {
    store,
    useSelector
};
