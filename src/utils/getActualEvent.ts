import moment from 'moment';
const format = 'YYYY-MM-DDTHH:mm:ss+03:00';

export function getActualEvent(value:any) {
    const now = new Date().getTime();
    let actualEvent = value;
    let eventTime, newDate;

    if (value.event) {
        eventTime = new Date(value.event.timer).getTime();
    } else {
        eventTime = new Date(value.timer).getTime();
    }


    if (actualEvent.repeatable !== '' && eventTime <= now) {
        if (actualEvent.repeatable === 'weekly') {
            const fullWeeks = moment(eventTime).diff(now, 'w') * -1 + 1;
            newDate = moment(eventTime).add(fullWeeks, 'w');
            const newDateFormatted = newDate.format(format);

            if (actualEvent.event) {
                actualEvent.event.timer = newDateFormatted;
            } else {
                actualEvent.timer = newDateFormatted;
            }
        }
    }

    const timer = actualEvent.event ? actualEvent.event.timer : actualEvent.timer;
    const newDateSeconds = new Date(moment(timer).format()).getTime();
    const expiring = newDateSeconds - now <= 1000 * 60 * 60 * 24;

    if (actualEvent.event) {
        actualEvent.event.expiring = expiring;
    } else {
        actualEvent.expiring = expiring;
    }

    return actualEvent;
}
