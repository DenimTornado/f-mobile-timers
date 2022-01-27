import React, { useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import { EventDuration } from '../event-duration/event-duration';

import './sub-event-row.scss';

const cn = createCn('sub-event-row');

type OwnProps = Partial<{
    event: any;
}>

export const SubEventRow = React.memo<OwnProps>((props) => {
    const { event } = props;
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            setNow(now)
        }, 1000)
    }, []);

    return (
        <div className={ cn() }>
            <div className={ cn('name') }>{ event.name }</div>
            <div className={ cn('timer', {expiring: event.expiring}) }>
                {event.end_timer &&
                    <EventDuration now={ now } duration={ event.end_timer }/>
                }
            </div>
            <div className={ cn('update') }>
                { event.update_timer &&
                <EventDuration now={ now } duration={ event.update_timer }/>
                }
            </div>
        </div>
    );
});
