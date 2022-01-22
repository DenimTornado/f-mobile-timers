import React, { useCallback, useEffect } from 'react';
import { createCn } from 'bem-react-classname';
import { useDispatch, useSelector } from 'react-redux';
// import Events  from '../../constants/events.json';
// import { EventRow } from '../../components/event-row/event-row';
// import { getActualEvent } from '../../utils/getActualEvent';
import './calculator-page.scss';
import * as actionCreators from '../../redux/action-creators';
import * as thunks from '../../redux/actions';
import { calculatorResultSelector, needsSelector, totalOvrSelector } from '../../redux/selectors';

const cn = createCn('calculator-page');
// const now = new Date().getTime();

export const CalculatorPage = React.memo(() => {
    // const [actualEvents, setActualEvents] = useState([]);
    const dispatch = useDispatch();
    const results = useSelector(calculatorResultSelector);
    const total = useSelector(totalOvrSelector);
    const needs = useSelector(needsSelector);

    const onChangeValue = useCallback(
        (id, e) => {
            console.log(id, e.target.value);
            dispatch(actionCreators.changeValue(id, e.target.value));
        },
        [dispatch]
    );

    const onCount = useCallback(
        () => {
            dispatch(thunks.onCount());
        },
        [dispatch]
    );

    const onSave = useCallback(
        () => {
            dispatch(thunks.onSave());
        },
        [dispatch]
    );

    const onLoad = useCallback(
        () => {
            dispatch(thunks.onLoad());
        },
        [dispatch]
    );

    useEffect(() => {
        console.log(results);
        // let actualEvents = [...Events];
        // for (let i = 0; i < Events.length; i++) {
        //     actualEvents[i] = getActualEvent(actualEvents[i]);
        //     let subEvents = actualEvents[i].sub_events;
        //
        //     let actualSubEvents = [];
        //     for (let i = 0; i < subEvents.length; i++) {
        //         const eventTimer = new Date(subEvents[i].timer).getTime();
        //         if (eventTimer > now || subEvents[i].repeatable !== '') {
        //             actualSubEvents.push(getActualEvent(subEvents[i]));
        //         }
        //     }
        //     actualEvents[i].sub_events = actualSubEvents;
        // }
        // // @ts-ignore
        // setActualEvents(actualEvents);
    }, [results]);

    return (
        <div className={ cn() }>
            <div className={ cn('data') }>
                <div className={ cn('total') }>Total ovr: { total }</div>
                <div className={ cn('need') }>Next OVR need one of:</div>
                <div className={cn('need-content')}>
                    <table className={cn('need-table')}>
                        <tr>
                            <td>OVR:</td>
                            <td>{ needs.ovr }</td>
                        </tr>
                        <tr>
                            <td>Ranks:</td>
                            <td>{ needs.ranks }</td>
                        </tr>
                        <tr>
                            <td>Boosts:</td>
                            <td>{ needs.boosts }</td>
                        </tr>
                    </table>
                    <button className={ cn('button') } onClick={ onCount }>Count</button>
                </div>

            </div>
            <div className={ cn('buttons') }>
                <button className={ cn('button_save') } onClick={ onSave }>Save</button>
                <button className={ cn('button_load') } onClick={ onLoad }>Load</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Rating</th>
                    <th>Tr.Level</th>
                    <th>Boost</th>
                </tr>
                </thead>
                <tbody>
                { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((key) => (
                    <tr>
                        { ['ovr', 'rank', 'boost'].map((sub) => (
                            <td>
                                <input
                                    type="number"
                                    id={ sub + key }
                                    onChange={ (e) => onChangeValue(sub + key, e) }
                                    value={results[sub+key]}
                                />
                            </td>
                        )) }
                    </tr>
                )) }
                </tbody>
            </table>
        </div>
    );
});
