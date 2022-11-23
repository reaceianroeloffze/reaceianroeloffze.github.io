
// Create a toggle function for expanding/collapsing sections on a webpage.
const storyToggle = () => {
    document.querySelector('.story-toggle').classList.toggle('expand');
    document.querySelector('.weather-article').classList.toggle('expand');
    document.querySelector('#weather-story').classList.toggle('expand');
}

const hazardToggle = () => {
    document.getElementById('hazards').classList.toggle('expand');
    // document.getElementById('hazards').classList.toggle('expand-large');
    document.querySelector('.hazard-toggle').classList.toggle('expand');
    document.querySelector('.veld-fire').classList.toggle('expand');
    // document.querySelector('.veld-fire').classList.toggle('expand-large');
    document.querySelector('.heat-wave').classList.toggle('expand');
    // document.querySelector('.heat-wave').classList.toggle('expand-large');
}

const infoToggle = () => {
    // document.querySelector('#town-info').classList.toggle('expand');
    document.querySelector('.info-toggle').classList.toggle('expand');
}

// Set the applicable CSS to be applied once the menu button is clicked.
const storyBtn = document.querySelector('.story-toggle');
const hazardBtn = document.querySelector('.hazard-toggle');
const infoBtn = document.querySelector('.info-toggle');

storyBtn.onclick = storyToggle;
hazardBtn.onclick = hazardToggle;
infoBtn.onclick = infoToggle;