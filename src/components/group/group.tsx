import React from 'react';
import { createCn } from 'bem-react-classname';

import './group.scss';

const cn = createCn('group');

type OwnProps = Partial<{
    group: any;
}>

export const Group = React.memo<OwnProps>((props) => {
    const { name, leagues } = props.group;

    return (
        <div className={ cn() }>
            <h2>{name}</h2>

            <div className={cn('leagues')}>
                {leagues.map((league:string) => {
                    return <div className={cn('league')}>{league}</div>
                })}
            </div>
        </div>
    );
});
