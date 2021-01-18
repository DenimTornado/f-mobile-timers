import React, { useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import { SubEventRow } from '../sub-event-row/sub-event-row';
import { EventDuration } from '../event-duration/event-duration';

import './event-row.scss';

const cn = createCn('event-row');

type OwnProps = Partial<{
    event: any;
}>

export const EventRow = React.memo<OwnProps>((props) => {
    const { ids, event, note, sub_events } = props.event;
    const [now, setNow] = useState(new Date());
    const eventDate = new Date(event.timer);
    const eventImg = '/fmt/img/programs/' + ids + '.png';

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            setNow(now)
        }, 1000)
    }, []);

    return (
        <div className={ cn() }>
            <div className={ cn('img') }><img src={ eventImg } alt=""/></div>
            <div className={ cn('content') }>
                <div className={ cn('main_event') }>
                    <div className={ cn('name') }>{ event.name }</div>
                    <div className={ cn('timer') }>
                        <EventDuration now={ now } duration={ eventDate }/>
                    </div>
                </div>

                <div className={ cn('sub_events') }>
                    { sub_events.map((value: any) => (<SubEventRow key={ value.ids } event={ value }/>)) }
                </div>

                <div className={ cn('event_note') }>
                    { note }
                </div>
            </div>
        </div>
    );
});
