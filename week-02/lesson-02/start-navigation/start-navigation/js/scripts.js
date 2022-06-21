const menuToggle = () => {
    document.querySelector('#primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
    

const menuBtn = document.querySelector('#hamburgerBtn');

menuBtn.onclick = menuToggle;