import {
    applyMiddleware, combineReducers, compose, createStore, PreloadedState, ReducersMapObject,
} from 'redux';
import thunk from 'redux-thunk';

import { ReducerManager } from './reducer-manager';
import { AppStore, AppStoreState } from './types';
import { calculatorReducer } from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line no-underscore-dangle

function configureStore(
    staticReducers: ReducersMapObject<Partial<AppStoreState>>,
    initialState?: PreloadedState<Partial<AppStoreState>>,
): AppStore {
    const store: AppStore = createStore(
        combineReducers(staticReducers),
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    );

    store.reducerManager = new ReducerManager(staticReducers, store);

    return store;
}

export const store = configureStore({
    calculator: calculatorReducer,
} as ReducersMapObject<Partial<AppStoreState>>);
