
// Create a toggle function for expanding/collapsing sections on a webpage.
const sectionToggle = () => {
    document.querySelector('.weather-article').classList.toggle('expand');
    document.querySelector('#weather-story').classList.toggle('expand');
    // document.getElementById('hazards').classList.toggle('expand');
    // document.querySelector('#town-info').classList.toggle('expand');
    document.querySelector('.section-toggle').classList.toggle('expand');
}

// Set the applicable CSS to be applied once the menu button is clicked.
const sectionBtn = document.querySelector('.section-toggle');

sectionBtn.onclick = sectionToggle;