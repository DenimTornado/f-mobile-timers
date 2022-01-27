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
    const { event } = props;
    const [now, setNow] = useState(new Date());
    const eventImg = '/fmt/img/programs/' + event.ids + '.png';

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
                    <div className={ cn('timer', { expiring: event.expiring }) }>
                        { event.end_timer &&
                            <EventDuration now={ now } duration={ event.end_timer }/>
                        }
                    </div>
                    <div className={ cn('update') }>
                        { event.update_timer &&
                            <EventDuration now={ now } duration={ event.update_timer }/>
                        }
                    </div>
                </div>

                <div className={ cn('sub_events') }>
                    { event.sub_events.map((value: any) => {
                        return <SubEventRow key={ value.ids } event={ value }/>
                    }) }
                </div>

                <div className={ cn('event_note') }>
                    { event.note }
                </div>
            </div>
        </div>
    );
});
