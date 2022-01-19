import { ValuesType } from 'utility-types';
import { Store } from 'redux';

import { CalculatorState } from './reducers';
import { ReducerManager } from './reducer-manager';

export type SearchResult = {
    id: string;
    title: string;
    description: string;
    link: {
        type: string;
        value: string;
    };
    type: string;
    productId: string;
    searchScore: number;
};

export type HistoryResult = {
    date: string;
    searchQuery: string;
    id: string;
};

export enum RequestState {
    UNKNOWN = 'UNKNOWN',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAny = any;

export type ActionType<ActionCreators extends Record<TAny, TAny>> = ReturnType<ValuesType<ActionCreators>>;

export type TimerType = ReturnType<typeof setTimeout>;

export type AppStoreStateCalculator = { calculator: CalculatorState };

export type AppStoreState = AppStoreStateCalculator;

export type AppStore = Store & { reducerManager: ReducerManager };

