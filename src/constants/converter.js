const fs = require('fs');
const es = require('event-stream');

let result = {};
let resultArr = [];

fs.createReadStream('events.csv').pipe(es.split())
.on('data', (row) => {
    const data = row.toString().split(',');
    if (data[0]) {
        let event = {};
        event.ids = data[0];
        event.event = {
            name: data[2],
            timer: data[3]
        }
        event.repeatable = data[4];
        event.note = data[5];
        event.sub_events = [];
        if (!result[data[0]]) {
            result[data[0]] = {};
        }
        result[data[0]] = event;
    }

    if (data[1]) {
        let subEvent = {};
        subEvent.name = data[2];
        subEvent.timer = data[3];
        subEvent.repeatable = data[4];
        subEvent.note = data[5];

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
