// import differenceInWeeks from 'date-fns/differenceInWeeks'
import differenceInHours from 'date-fns/differenceInHours'
import differenceInDays from 'date-fns/differenceInDays'
import add from 'date-fns/add'

export function getActualEvent(event: any) {
    const now = new Date().getTime();
    let actualEvent = event;
    actualEvent.expiring = false;

    if (actualEvent.end_timer) {
        const end = actualEvent.end_timer;
        const newDateSeconds = new Date(end).getTime();
        actualEvent.expiring = newDateSeconds - now <= 1000 * 60 * 60 * 24;

        // const weeks = differenceInWeeks(end, now) * -1 + 1;
        actualEvent.timer = newDateSeconds;
    }

    if (actualEvent?.repeatable?.date) {
        const { date, type, value } = actualEvent?.repeatable;
        const dateObj = new Date(date);
        //Default type is 'd' for days
        let addType = 'days';
        let diffFunc = differenceInDays;
        const valueNumber = value * 1;

        if (type === 'h') {
            addType = 'hours'
            diffFunc = differenceInHours;
        }

        const diff = diffFunc(now, dateObj) + 1;
        let mod = diff % valueNumber;
        if (mod === 1) {
            mod  = valueNumber;
        }
        const nextUpdate = add(dateObj, {
            [addType]: diff + mod
        });

        actualEvent.update_timer =  new Date(nextUpdate).getTime();
    }

    return actualEvent;
}
