import { createCn } from 'bem-react-classname';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { calculatorResultSelector } from '../../../redux/selectors';

import './rank-select.scss';
import * as actionCreators from '../../../redux/action-creators';
import * as thunks from '../../../redux/actions';

const cn = createCn('rank-select');

type RankSelect = {
    id: string,
}

export const RankSelect = ((props: RankSelect) => {
    const { id } = props;
    const results = useSelector(calculatorResultSelector);
    const dispatch = useDispatch();
    const componentRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const handleClickOutside = useCallback((event: any) => {
        // @ts-ignore
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            setVisible(false);
        }
    }, []);

    const onRankClick = useCallback(() => {
        setVisible(true);
    }, []);

    const onStoneClick = useCallback((key) => {
        setVisible(false);
        dispatch(actionCreators.changeValue(id, key.toString()));
        dispatch(thunks.onCount());
    }, [setVisible]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={ cn() } ref={ componentRef }>
            <div className={ cn('rank') }>
                <div className={ cn('result') } onClick={ () => onRankClick() }>{ results[id] || 0 }</div>
                <div className={ cn('dropdown', { visible: visible }) }>
                    { [0, 1, 2, 3, 4, 5].map((key) => (
                        <div
                            className={ cn('rank-item', { [key]: true }) }
                            onClick={ () => onStoneClick(key) }
                        >
                            { key }
                        </div>
                    )) }
                </div>
            </div>

        </div>
    );
});
