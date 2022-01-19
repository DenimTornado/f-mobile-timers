import {
    combineReducers, Reducer, ReducersMapObject, Store,
} from 'redux';

export class ReducerManager {
    reducers: ReducersMapObject;

    store: Store;

    constructor(initialReducers: ReducersMapObject, store: Store) {
        this.reducers = { ...initialReducers };
        this.store = store;
    }

    add(key: string, reducer: Reducer) {
        if (!key || this.reducers[key]) {
            return;
        }

        this.reducers[key] = reducer;
        this.store?.replaceReducer(combineReducers(this.reducers));
    }

    remove(key: string) {
        if (!key || !this.reducers[key]) {
            return;
        }

        delete this.reducers[key];

        this.store?.replaceReducer(combineReducers(this.reducers));
    }
}
