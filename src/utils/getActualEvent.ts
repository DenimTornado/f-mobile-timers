import differenceInWeeks from 'date-fns/differenceInWeeks'
import add from 'date-fns/add'

export function getActualEvent(event:any) {
    const now = new Date().getTime();
    let actualEvent = event;
    let eventTime, newDate;

    if (event.event) {
        eventTime = new Date(event.event.timer).getTime();
    } else {
        eventTime = new Date(event.timer).getTime();
    }


    if (actualEvent.repeatable !== '' && eventTime <= now) {
        const weeks = differenceInWeeks(eventTime, now) * -1 + 1;
        newDate = add(eventTime, {weeks});

        if (actualEvent.event) {
            actualEvent.event.timer = newDate;
        } else {
            actualEvent.timer = newDate;
        }
    }

    const timer = actualEvent.event ? actualEvent.event.timer : actualEvent.timer;
    const newDateSeconds = new Date(timer).getTime();
    const expiring = newDateSeconds - now <= 1000 * 60 * 60 * 24;

    if (actualEvent.event) {
        actualEvent.event.expiring = expiring;
    } else {
        actualEvent.expiring = expiring;
    }

    return actualEvent;
}
