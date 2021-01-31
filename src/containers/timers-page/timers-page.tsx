import React, { useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import { Events } from '../../constants/events';
import { EventRow } from '../../components/event-row/event-row';
import { getActualEvent } from '../../utils/getActualEvent';

import './timers-page.scss';


const cn = createCn('timers-page');
const now = new Date().getTime();

export const TimersPage = React.memo(() => {
    const [actualEvents, setActualEvents] = useState([]);

    useEffect(() => {
        let actualEvents = [...Events];
        for (let i = 0; i < Events.length; i++) {
            actualEvents[i] = getActualEvent(actualEvents[i]);
            let subEvents = actualEvents[i].sub_events;
            console.log(actualEvents[i].ids);
            console.log(subEvents);
            let actualSubEvents = [];
            for (let i = 0; i < subEvents.length; i++) {
                const eventTimer = new Date(subEvents[i].timer).getTime();
                if (eventTimer > now || subEvents[i].repeatable !== '') {
                    actualSubEvents.push(getActualEvent(subEvents[i]));
                }
            }
            actualEvents[i].sub_events = actualSubEvents;
        }
        // @ts-ignore
        setActualEvents(actualEvents);
    }, []);

    return (
        <div className={ cn() }>
            { actualEvents.map((value:any) => {
                const eventTimer = new Date(value.event.timer).getTime();
                if (eventTimer > now) {
                    return <EventRow key={value.ids} event={ value }/>
                }

                return null;
            })}
        </div>
    );
});
