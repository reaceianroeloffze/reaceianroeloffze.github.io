// Retrieve the HTML element responsible for storing the towns' event data.
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// Retrieve the JSON File Containing the Town Data for Soda Springs
const sodaSpringsEvents = document.querySelector('.ss-events');

// Create headings for the events section.
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

                // Acquire listed events from JSON file based on the
                // name of the town.
                if (value === 'Soda Springs') {
                    sodaSpringsEvents.appendChild(span1);
                    sodaSpringsEvents.appendChild(span2);
                    sodaSpringsEvents.appendChild(span3);
                }
            });
        });
    });