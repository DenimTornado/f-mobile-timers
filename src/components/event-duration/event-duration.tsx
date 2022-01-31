import React, { useEffect, useState } from 'react';
import differenceInDays from 'date-fns/differenceInDays';
import intervalToDuration from 'date-fns/intervalToDuration';
import { differenceInHours } from 'date-fns';
import { addLeadingZero } from '../../utils/addLeadingZero';

import './event-duration.scss';

type OwnProps = Partial<{
    now: any;
    duration: any;
}>



export const EventDuration = React.memo<OwnProps>((props) => {
    const { now, duration } = props;
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const endDate = new Date(duration);
        const diff = differenceInHours(endDate, now);
        const interval = intervalToDuration({
            start: now,
            end: endDate
        });


        if (diff >= 48) {
            setTimeLeft(`${ differenceInDays(endDate, now) + 1} days`);
        } else {
            const days = interval.days && interval.days > 0 ? 24 : 0;
            const hours = addLeadingZero(interval.hours, days);
            const minutes = addLeadingZero(interval.minutes);
            const seconds = addLeadingZero(interval.seconds);

            setTimeLeft(`${ hours }:${ minutes }:${ seconds }`);
        }
    }, [now, duration])

    return (
        <React.Fragment>
            { timeLeft }
        </React.Fragment>
    );
});
