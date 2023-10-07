import React from 'react';
import { createCn } from 'bem-react-classname';

import './group.scss';

const cn = createCn('group');

type OwnProps = Partial<{
    group: any;
}>

export const Group = React.memo<OwnProps>((props) => {
    const { name, leagues } = props.group;
    const eventImg = '/f-mobile-timers/img/groups/' + name.replace(/\s/g, '').toLowerCase() + '.png';

    return (
        <div className={ cn() }>
            <div className={ cn('img') }>
                <img src={ eventImg } alt=""/>
            </div>
            <div className={ cn('content') }>
                <div className={ cn('header') }>

                    <div className={ cn('name') }>
                        { name }
                    </div>
                </div>

                <div className={ cn('leagues') }>
                    { leagues.map((league: string) => {
                        return <div className={ cn('league') }>{ league }</div>
                    }) }
                </div>
            </div>
        </div>
    );
});
