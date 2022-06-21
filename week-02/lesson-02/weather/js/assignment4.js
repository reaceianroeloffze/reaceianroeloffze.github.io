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