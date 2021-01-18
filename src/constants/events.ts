export const Events = [
    {
        ids: 'uel',
        note: '',
        event: {
            name: 'UEFA Europa League',
            timer: '2021-01-21T22:00:00+03:00'
        },
        repitable: '',
        sub_events: [
            {
                name: 'Energy offer (coins)',
                timer: '2021-01-21T22:00:00+03:00'
            }
        ]
    },
    {
        ids: 'leagues',
        note: '',
        repitable: 'weekly',
        event: {
            name: 'League matchups',
            timer: '2021-01-25T22:00:00+03:00'
        },
        sub_events: []
    },
    {
        ids: 'icons',
        note: 'Dont forget to play skill games',
        repitable: 'weekly',
        event: {
            name: 'icons strike',
            timer: '2021-01-21T22:00:00+03:00'
        },
        sub_events: []
    },
    {
        ids: 'becks',
        note: 'Dont forget to get Beckham points from ads',
        repitable: 'weekly',
        event: {
            name: 'beckham quests',
            timer: '2021-01-21T22:00:00+03:00'
        },
        sub_events: []
    },
    {
        ids: 'rivals',
        note: '',
        repitable: 'monthly',
        event: {
            name: 'division rivals',
            timer: '2021-01-25T22:00:00+03:00'
        },
        sub_events: [
            {
                name: 'weekly update',
                repitable: 'weekly',
                timer: '2021-01-20T22:00:00+03:00'
            }
        ]
    },
    {
        ids: 'starpass',
        note: '',
        repitable: 'monthly',
        event: {
            name: 'starpass',
            timer: '2021-01-27T22:00:00+03:00'
        },
        sub_events: []
    }
];
