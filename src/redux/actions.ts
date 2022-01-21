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

        // const test:any = {
        // boost1: "6",
        //     boost2: "7",
        //     boost3: "6",
        //     boost4: "6",
        //     boost5: "6",
        //     boost6: "6",
        //     boost7: "6",
        //     boost8: "7",
        //     boost9: "6",
        //     boost10: "7",
        //     boost11: "6",
        //     ovr1: "88",
        //     ovr2: "89",
        //     ovr3: "93",
        //     ovr4: "87",
        //     ovr5: "87",
        //     ovr6: "88",
        //     ovr7: "88",
        //     ovr8: "89",
        //     ovr9: "90",
        //     ovr10: "89",
        //     ovr11: "88",
        //     rank1: "5",
        //     rank2: "5",
        //     rank3: "5",
        //     rank4: "5",
        //     rank5: "5",
        //     rank6: "5",
        //     rank7: "5",
        //     rank8: "5",
        //     rank9: "5",
        //     rank10: "10",
        //     rank11: "5"
        // }

        for (let i = 1; i <= Object.keys(results).length; i++) {
            if (results['ovr' + i]) {
                ovr += parseInt(results['ovr' + i]);
            }
            if (results['rank' + i]) {
                ranks += Math.round(parseInt(results['rank' + i]) / 5);
            }
            if (results['boost' + i]) {
                boosts += parseInt(results['boost' + i]);
            }
        }
        const avgRanks = Math.ceil(ranks / 11);
        const avgBoosts = Math.ceil(boosts / 11);
        const avgOvr = Math.ceil((ovr - ranks) / 11);

        const total = avgRanks + avgBoosts + avgOvr;

        dispatch(actionCreators.setTotal(total));
        dispatch(actionCreators.setNeeds({
            ranks: countNeed(ranks),
            boosts: countNeed(boosts),
            ovr: countNeed(ovr, ranks)
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
