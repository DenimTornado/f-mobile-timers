import React, { useCallback, useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import { useDispatch, useSelector } from 'react-redux';
import './calculator-page.scss';
import * as actionCreators from '../../redux/action-creators';
import * as thunks from '../../redux/actions';
import { calculatorResultSelector, needsSelector, schemeSelector, totalOvrSelector } from '../../redux/selectors';
import { SCHEMES } from '../../redux/constants';
import { countBase } from '../../utils/countBase';
import { RankSelect } from './rank-select/rank-select';

const cn = createCn('calculator-page');

export const CalculatorPage = (() => {
    const dispatch = useDispatch();
    const results = useSelector(calculatorResultSelector);
    const total = useSelector(totalOvrSelector);
    const needs = useSelector(needsSelector);
    const scheme = useSelector(schemeSelector);
    const [curScheme, setCurScheme] = useState('41212');

    const onChangeValue = useCallback(
        (id, e) => {
            console.log(id);
            dispatch(actionCreators.changeValue(id, e.target.value));
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

    const onSelect = useCallback(
        (e) => {
            setCurScheme(e.target.value);
            dispatch(thunks.setScheme(e.target.value));
        }, []
    );

    useEffect(() => {
        setCurScheme(scheme);
    }, [scheme]);

    return (
        <div className={ cn() }>
            <div className={ cn('data') }>
                {/*<div className={ cn('total') }>Total ovr: { total }</div>*/ }
                <div className={ cn('buttons') }>
                    {/*<button className='button'  onClick={ onCount }>Count</button>*/ }
                    <button className="button_load" onClick={ onLoad }>Load</button>
                    <button className="button_save" onClick={ onSave }>Save</button>
                </div>
            </div>
            <div className={ cn('need-content') }>
                <div className={ cn('total') }>Total OVR: { total }</div>
                <div className={ cn('hr') }/>
                <div className={ cn('need') }>Next OVR</div>
                <table className={ cn('need-table') }>
                    <tr>
                        <td>OVR:</td>
                        <td>{ needs.ovr }</td>
                    </tr>
                    <tr>
                        <td>Ranks:</td>
                        <td>{ needs.ranks }</td>
                    </tr>
                </table>
                <div className={ cn('scheme') }>
                    <select id={ 'scheme' } value={ curScheme } onChange={ onSelect }>
                        { SCHEMES.map((sch) => <option selected={ curScheme === sch } value={ sch }>{ sch }</option>) }
                    </select>
                </div>
            </div>
            <div className={ cn('field') }>
                { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((key) => (
                    <div className={ cn('position',
                        { master: results['ovr' + key] >= 90, ['position_' + key]: true, [scheme]: true }) }>
                        <div className={ cn('stone', {
                            emerald: results['rank' + key] === '1',
                            saphire: results['rank' + key] === '2',
                            ametyst: results['rank' + key] === '3',
                            ruby: results['rank' + key] === '4',
                            ember: results['rank' + key] === '5'
                        }) }/>
                        { ['ovr'].map((sub) => (
                            <div className={ cn(sub) }>
                                <input
                                    id={ sub + key }
                                    // onFocus={ (e) => onFocus(e) }
                                    onChange={ (e) => onChangeValue(sub + key, e) }
                                    value={ results[sub + key] }
                                    type={ 'number' }
                                />
                            </div>
                        )) }
                        { ['rank'].map((sub) => (
                            <RankSelect
                                id={ sub + key }
                            />
                        )) }
                        <div className={ cn('base_ovr') }>
                            { countBase(results['ovr' + key], results['rank' + key]) }
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
});
