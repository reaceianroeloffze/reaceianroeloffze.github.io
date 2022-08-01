// const date = new Date(Date.UTC(2022, 6, 8, 12, 55, 0))

// Display the year numerically
const options1 = {
    year: 'numeric'
}

document.querySelector('.year').textContent = new Date().toLocaleDateString('en-US', options1);

// Display the full date in British English
const options2 = {
    dateStyle: 'full', // Full: Tuesday, 21 June 2022
}

let update = document.querySelector('.date').innerText = new Date(document.lastModified).toLocaleDateString('en-gb', options2);
console.log(update) // Display full format

// Toggle responsive menu using classes
const menuToggle = () => {
    document.querySelector('#main-nav').classList.toggle('open');
    document.getElementById('menu-button').classList.toggle('open');
}

// Set the applicable CSS to be applied once the menu button is clicked.
const menuBtn = document.querySelector('#menu-button');

menuBtn.onclick = menuToggle;

// Set a condition to display a banner above the header if the current day is Friday
const currentDate = new Date();
const currentDay = currentDate.getDay();
console.log(currentDay);


const displayBanner = () => {
    let p = document.createElement('p');
    p.textContent = 'Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion!';
    p.classList.add('banner');
    document.body.prepend(p);
};

if (currentDay === 5) {
    displayBanner();
}