const fs = require('fs');
const es = require('event-stream');

let result = {};
let resultArr = [];

function parseEvent(data) {
    let event = {};
    event.ids = data[0];
    event.name = data[2];
    if (data[3]) {
        const dateArr = data[3].split('/');
        event.end_timer = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2];
    } else {
        event.end_timer = '';
    }

    if (data[5]) {
        const dateArr = data[5].split('/');
        event.repeatable = {
            date: dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2],
            value: data[6],
            type: data[7],

        }
    } else {
        event.repeatable = {}
    }
    event.note = data[8];
    event.sub_events = [];
    return event;
}

fs.createReadStream('events.csv').pipe(es.split())
.on('data', (row) => {
    const data = row.toString().split(',');
    if (data[0]) {
        let event = parseEvent(data);
        if (!result[data[0]]) {
            result[data[0]] = {};
        }
        result[data[0]] = event;
    }

    if (data[1]) {
        let subEvent = {};
        subEvent = parseEvent(data);

        if (!result[data[1]]) {
            result[data[1]] = {};
        }

        if (!result[data[1]].sub_events) {
            result[data[1]].sub_events = [];
        }

        result[data[1]].sub_events.push(subEvent);
    }
})
.on('end', () => {
    for (const [key, value] of Object.entries(result)) {
        resultArr.push(value);
    }
    fs.writeFile('events.json', JSON.stringify(resultArr), function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
});
