const options = {
    year: 'numeric'
}

document.querySelector('.copyright').textContent = new Date().toLocaleDateString('en-US', options)