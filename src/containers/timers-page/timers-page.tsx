import React from 'react';
import { createCn } from 'bem-react-classname';
import { Events } from '../../constants/events';
import { EventRow } from '../../components/event-row/event-row';

import './timers-page.scss';

const cn = createCn('timers-page');
const now = new Date().getTime();

export const TimersPage = React.memo(() => {
    return (
        <div className={ cn() }>
            { Events.map((value) => {
                let eventTime = new Date(value.event.timer).getTime();
                if (eventTime < now && value.repitable !== '') {
                    if (value.repitable === 'weekly') {

                    }
                }

                if (eventTime > now) {
                    return <EventRow key={value.ids} event={ value }/>
                }
            })}
        </div>
    );
});
