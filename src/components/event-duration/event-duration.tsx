import React, { useEffect, useState } from 'react';
import differenceInDays from 'date-fns/differenceInDays';
import intervalToDuration from 'date-fns/intervalToDuration';

import './event-duration.scss';

type OwnProps = Partial<{
    now: any;
    duration: any;
}>

const addLeadingZero = (number: number | undefined, add?: number) => {
    if (!number || number === 0) {
        return '00';
    }
    const withAdditional = add ? number + add : number;
    return withAdditional < 10 ? '0' + withAdditional : withAdditional;
};

export const EventDuration = React.memo<OwnProps>((props) => {
    const { now, duration } = props;
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const diff = differenceInDays(duration, now);
        const interval = intervalToDuration({
            start: now,
            end: duration
        });
        if (diff > 2) {
            const days = diff + 1;
            setTimeLeft(`${ days } days`);
        }
        else {
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
