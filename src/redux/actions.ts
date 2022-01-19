import { ThunkAction } from 'redux-thunk';
import { AppStoreState } from './types';
import { calculatorSelector } from './selectors';

import * as actionCreators from './action-creators';
import { CalculatorStateActionsType } from './reducers';
import { countNeed } from '../utils/countNeed';

export function onCount(): ThunkAction<void, AppStoreState, void, CalculatorStateActionsType> {
    console.log('onCount');
    return async (dispatch, getState) => {
        const state = getState();
        const results = calculatorSelector(state).results;
        console.log(results);
        let ovr = 0;
        let ranks = 0;
        let boosts = 0;

        const test:any = {
            boost1: '5',
            boost2: '4',
            boost3: '5',
            boost4: '5',
            boost5: '5',
            boost6: '5',
            boost7: '5',
            boost8: '6',
            boost9: '5',
            boost10: '6',
            boost11: '4',
            ovr1: '93',
            ovr2: '84',
            ovr3: '88',
            ovr4: '86',
            ovr5: '86',
            ovr6: '85',
            ovr7: '87',
            ovr8: '89',
            ovr9: '84',
            ovr10: '88',
            ovr11: '87',
            rank1: '5',
            rank3: '5',
            rank8: '6',
            rank10: '6'
        }

        for (let i = 1; i <= Object.keys(test).length; i++) {
            if (test['ovr' + i]) {
                ovr += parseInt(test['ovr' + i]);
            }
            if (test['rank' + i]) {
                ranks += parseInt(test['rank' + i]);
            }
            if (test['boost' + i]) {
                boosts += parseInt(test['boost' + i]);
            }
        }
        const avgRanks = Math.ceil(ranks / 11);
        const avgBoosts = Math.ceil(boosts / 11);
        const avgOvr = Math.ceil(ovr / 11);

        const total = avgRanks + avgBoosts + avgOvr;
        // const total = (ovr + ranks + boosts) / 11;

        dispatch(actionCreators.setTotal(total));
        dispatch(actionCreators.setNeeds({
            ranks: countNeed(ranks),
            boosts: countNeed(boosts),
            ovr: countNeed(ovr)
        }));
    };
}

// export function getHistory(): ThunkAction<void, AppStoreState, void, CalculatorStateActionsType> {
//     return async (dispatch) => {
//         await fetchers
//             .getHistory({
//                 count: 5,
//             })
//             .then((data: any) => {
//                 dispatch(actionCreators.getHistorySuccess(data));
//             })
//             .catch(() => {
//                 dispatch(actionCreators.getHistoryFailure());
//             });
//     };
// }
