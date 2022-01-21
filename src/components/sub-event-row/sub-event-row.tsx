import React, { useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import { EventDuration } from '../event-duration/event-duration';

import './sub-event-row.scss';

const cn = createCn('sub-event-row');

type OwnProps = Partial<{
    event: any;
}>

export const SubEventRow = React.memo<OwnProps>((props) => {
    const { name, timer, expiring } = props.event;
    const [now, setNow] = useState(new Date());
    const eventDate = new Date(timer);
    const longRange = new Date(new Date().getTime() + 31556952000);

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            setNow(now)
        }, 1000)
    }, []);

    return (
        <div className={ cn() }>
            <div className={ cn('name') }>{ name }</div>
            <div className={ cn('timer', {expiring: expiring}) }>
                {longRange > eventDate &&
                    <EventDuration now={ now } duration={ eventDate }/>
                }
            </div>
        </div>
    );
});
