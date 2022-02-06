import React, { useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import Events  from '../../constants/events.json';
import { EventRow } from '../../components/event-row/event-row';
import { getActualEvent } from '../../utils/getActualEvent';

import './timers-page.scss';

localStorage.setItem('evts', JSON.stringify(Events))

const cn = createCn('timers-page');
const now = new Date().getTime();

export const TimersPage = React.memo(() => {
    const [actualEvents, setActualEvents] = useState([]);

    useEffect(() => {
        let actualEvents = Events;
        for (let i = 0; i < Events.length; i++) {
            actualEvents[i] = getActualEvent(actualEvents[i]);
            let subEvents:any = actualEvents[i].sub_events;

            if (subEvents.length > 0) {
                let actualSubEvents:any = [];
                for (let i = 0; i < subEvents.length; i++) {
                    if (subEvents[i].end_timer) {
                        const eventTimer = new Date(subEvents[i].end_timer).getTime();
                        if (eventTimer > now) {
                            actualSubEvents.push(getActualEvent(subEvents[i]));
                        }
                    } else {
                        actualSubEvents.push(getActualEvent(subEvents[i]));
                    }
                }
                actualEvents[i].sub_events = actualSubEvents;
            }
        }

        const filteredEvents = actualEvents.filter((event) => {
            if (event.end_timer) {
                return new Date(event.end_timer).getTime() > now;
            }
            return true;
        })

        // @ts-ignore
        setActualEvents(filteredEvents);
    }, []);

    return (
        <div className={ cn() }>
            <div className={ cn('header-row') }>
                <div className={ cn('ending')}>Ending</div>
                <div className={ cn('update') }>Update</div>
            </div>
            { actualEvents.map((value: any) => {
                return <EventRow key={ value.ids } event={ value } />;
            }) }
        </div>
    );
});
