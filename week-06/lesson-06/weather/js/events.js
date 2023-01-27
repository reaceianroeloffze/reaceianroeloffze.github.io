// Retrieve the JSON File Containing the Town Data for Preston, Soda Springs & Fish Haven.
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// Retrieve the HTML element responsible for storing the towns' event data.
const prestonEvents = document.querySelector('.preston-events');
const fishHavenEvents = document.querySelector('.fh-events');
const sodaSpringsEvents = document.querySelector('.ss-events');
let prestonH3 = document.createElement('h3');
prestonH3.textContent = 'Upcoming Events';
prestonEvents.appendChild(prestonH3);
let fhH3 = document.createElement('h3');
fhH3.textContent = 'Upcoming Events';
fishHavenEvents.appendChild(fhH3);
let ssH3 = document.createElement('h3');
ssH3.textContent = 'Upcoming Events';
sodaSpringsEvents.appendChild(ssH3);

// Use Fetch API to Convert JSON into JavaScript & retrieve relevant Info.
fetch(requestURL)
    .then((townEventInfo) => {
        // if (townEventInfo.ok) {
        //     throw Error('Content Not Loading')
        // };
        return townEventInfo.json();
    })
    .then((events) => {
        const townEvents = events['towns'];
        console.log(townEvents);
        townEvents.forEach(eventInfo => {
            Object.entries(eventInfo).forEach(([key, value]) => {
                    let span1 = document.createElement('span');     
                    let span2 = document.createElement('span');     
                    let span3 = document.createElement('span');     
                    let span4 = document.createElement('span');     
                    span1.textContent = `${eventInfo.events[0]}`;
                    span2.textContent = `${eventInfo.events[1]}`;
                    span3.textContent = `${eventInfo.events[2]}`;
                    span4.textContent = `${eventInfo.events[3]}`;
                if (value === 'Preston') {
                    // span1.textContent = `${eventInfo.events[0]}`;
                    // span2.textContent = `${eventInfo.events[1]}`;
                    // span3.textContent = `${eventInfo.events[2]}`;
                    prestonEvents.appendChild(span1);
                    prestonEvents.appendChild(span2);
                    prestonEvents.appendChild(span3);
                }
                else if (value === 'Fish Haven') {
                    fishHavenEvents.appendChild(span1);
                    fishHavenEvents.appendChild(span2);
                    fishHavenEvents.appendChild(span3);
                    fishHavenEvents.appendChild(span4);
                }
                else if (value === 'Soda Springs') {
                    // span1.textContent = `${eventInfo.events[0]}`;
                    // span2.textContent = `${eventInfo.events[1]}`;
                    // span3.textContent = `${eventInfo.events[2]}`;
                    // span4.textContent = `${eventInfo.events[3]}`;
                    sodaSpringsEvents.appendChild(span1);
                    sodaSpringsEvents.appendChild(span2);
                    sodaSpringsEvents.appendChild(span3);
                }
            });
        });
    });