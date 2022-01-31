import add from 'date-fns/add'

export function getActualEvent(event: any) {
    const now = new Date().getTime();
    let actualEvent = event;
    actualEvent.expiring = false;

    if (actualEvent.end_timer) {
        const end = actualEvent.end_timer;
        const newDateSeconds = new Date(end).getTime();
        actualEvent.expiring = newDateSeconds - now <= 1000 * 60 * 60 * 24;
        actualEvent.timer = newDateSeconds;
    }

    if (actualEvent?.repeatable?.date) {
        const { date, type, value } = actualEvent?.repeatable;
        const dateObj = new Date(date);
        //Default type is 'd' for days
        let addType = 'days';
        let nextUpdate = dateObj;
        const valueNumber = value;

        if (type === 'h') {
            addType = 'hours'
        }

        while (nextUpdate.getTime() < now) {
            nextUpdate = add(nextUpdate, {
                [addType]: valueNumber
            });
        }

        actualEvent.update_timer =  new Date(nextUpdate).getTime();
    }

    return actualEvent;
}
