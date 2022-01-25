import { createSelector } from 'reselect';

import { AppStoreState } from './types';

export const calculatorSelector = (state: AppStoreState) => state.calculator;

export const calculatorResultSelector = (state: AppStoreState) => calculatorSelector(state).results;
export const totalOvrSelector = (state: AppStoreState) => calculatorSelector(state).total;
export const needsSelector = (state: AppStoreState) => calculatorSelector(state).needs;
export const schemeSelector = (state: AppStoreState) => calculatorSelector(state).scheme;

export const customGlobalSearchSelector = createSelector(calculatorResultSelector, (result) => result);
