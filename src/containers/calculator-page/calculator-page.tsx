import React, { useCallback, useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import { useDispatch, useSelector } from 'react-redux';
import './calculator-page.scss';
import * as actionCreators from '../../redux/action-creators';
import * as thunks from '../../redux/actions';
import { calculatorResultSelector, needsSelector, schemeSelector, totalOvrSelector } from '../../redux/selectors';
import { SCHEMES } from '../../redux/constants';

const cn = createCn('calculator-page');

export const CalculatorPage = React.memo(() => {
    const dispatch = useDispatch();
    const results = useSelector(calculatorResultSelector);
    const total = useSelector(totalOvrSelector);
    const needs = useSelector(needsSelector);
    const scheme = useSelector(schemeSelector);
    const [curScheme, setCurScheme] = useState('41212');

    const onChangeValue = useCallback(
        (id, e) => {
            console.log(id, e.target.value);
            dispatch(actionCreators.changeValue(id, e.target.value));
            dispatch(thunks.onCount());
        },
        [dispatch]
    );

    // const onCount = useCallback(
    //     () => {
    //         dispatch(thunks.onCount());
    //     },
    //     [dispatch]
    // );

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

    const onSelect = useCallback(
        (e) => {
            console.log(e.target.value);
            setCurScheme(e.target.value);
            dispatch(thunks.setScheme(e.target.value));
        }, []
    );

    useEffect(() => {
        console.log(scheme);
        setCurScheme(scheme);
    }, [scheme]);

    return (
        <div className={ cn() }>
            <div className={ cn('data') }>
                <div className={ cn('total') }>Total ovr: { total }</div>
                <div className={cn('buttons')}>
                    {/*<button className='button'  onClick={ onCount }>Count</button>*/}
                    <button className='button_load'  onClick={ onLoad }>Load</button>
                    <button className='button_save'  onClick={ onSave }>Save</button>
                </div>
            </div>
            <div className={cn('need-content')}>
                <div className={ cn('need') }>Next OVR:</div>
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
            </div>
            <div className={cn('scheme')}>
                <div>
                    Formation:
                </div>
                <select id={'scheme'} value={curScheme} onChange={onSelect}>
                    {SCHEMES.map((sch) => <option selected={curScheme === sch} value={sch}>{sch}</option>)}
                </select>
            </div>
            <div className={cn("field")}>
                { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((key) => (
                    <div className={cn("position", { master:results['ovr'+key] >= 90, ["position_" + key]: true, [scheme]: true })}>
                        { ['boost', 'ovr', 'rank'].map((sub) => (
                            <div className={cn(sub)}>
                                <input
                                    id={ sub + key }
                                    onChange={ (e) => onChangeValue(sub + key, e) }
                                    value={results[sub+key]}
                                />
                            </div>
                        )) }
                    </div>
                )) }
            </div>
        </div>
    );
});
