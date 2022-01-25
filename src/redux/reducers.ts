import { ActionType } from './types';
import * as actionCreators from './action-creators';

export type CalculatorStateActionsType = ActionType<typeof actionCreators>;

export type CalculatorState = {
    results: any,
    total: number,
    needs: any,
    scheme: string
};

const initialState: CalculatorState = {
    results: {},
    total: 0,
    needs: {
        ranks: 0,
        boosts: 0,
        ovr: 0
    },
    scheme: '41212'
};

export function calculatorReducer(
    state: CalculatorState = initialState,
    action: CalculatorStateActionsType
): CalculatorState {
    switch (action.type) {
        case actionCreators.changeValue.type:
            return {
                ...state,
                results: {...state.results, [action.id]: action.value}
            };
        case actionCreators.setTotal.type:
            return {
                ...state,
                total: action.total
            };
        case actionCreators.setResults.type:
            return {
                ...state,
                results: action.results
            };
        case actionCreators.setNeeds.type:
            return {
                ...state,
                needs: action.needs
            };
        case actionCreators.setScheme.type:
            console.log(action.scheme);
            return {
                ...state,
                scheme: action.scheme
            };
        default:
            return state;
    }
}
