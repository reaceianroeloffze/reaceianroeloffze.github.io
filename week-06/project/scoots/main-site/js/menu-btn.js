const menuToggle = () => {
    document.querySelector('.site-navigation__links').classList.toggle('expand');
    document.querySelector('.sm-links-list').classList.toggle('expand');
    document.querySelector('.site-navigation').classList.toggle('expand');
    document.querySelector('.menu-button').classList.toggle('expand');
    document.querySelector('.logo-box').classList.toggle('expand');
}

// Set the applicable CSS to be applied once the menu button is clicked.
const menuBtn = document.querySelector('.menu-button');

menuBtn.onclick = menuToggle;