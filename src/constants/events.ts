export const Events = [
    {
        ids: 'freeze',
        note: '',
        event: {
            name: 'PREFREEZE',
            timer: '2022-01-18T22:00:00+03:00'
        },
        repeatable: '',
        sub_events: [
            {
                repeatable: 'weekly',
                name: 'snowball stockpile',
                timer: '2021-12-17T22:00:00+03:00'
            },
            {
                repeatable: 'weekly',
                name: 'now and later',
                timer: '2021-12-17T22:00:00+03:00'
            }
        ]
    },
    {
        ids: 'leagues',
        note: '',
        repeatable: 'weekly',
        event: {
            name: 'League matchups',
            timer: '2021-08-16T22:00:00+03:00'
        },
        sub_events: [
            {
                name: 'players update',
                repeatable: 'monthly',
                timer: '2021-09-20T22:00:00+03:00'
            }
        ]
    },
    {
        ids: 'icons',
        note: 'Dont forget to play skill games',
        repeatable: 'weekly',
        event: {
            name: 'icons strike',
            timer: '2021-01-22T22:00:00+03:00'
        },
        sub_events: []
    },
    {
        ids: 'becks',
        note: 'Dont forget to get Beckham points from ads',
        repeatable: 'weekly',
        event: {
            name: 'beckham quests',
            timer: '2021-01-08T22:00:00+03:00'
        },
        sub_events: []
    },
    {
        ids: 'rivals',
        note: '',
        repeatable: 'monthly',
        event: {
            name: 'division rivals',
            timer: '2021-12-28T22:00:00+03:00'
        },
        sub_events: [
            {
                name: 'weekly update',
                repeatable: 'weekly',
                timer: '2021-01-27T22:00:00+03:00'
            }
        ]
    },
    {
        ids: 'starpass',
        note: '',
        repeatable: 'monthly',
        event: {
            name: 'starpass',
            timer: '2021-12-30T22:00:00+03:00'
        },
        sub_events: [
            {
                repeatable: '',
                name: 'players update',
                timer: '2021-10-06T22:00:00+03:00'
            },
            {
                name: 'quests update',
                repeatable: 'weekly',
                timer: '2021-08-25T22:00:00+03:00'
            }
        ]
    }
];
