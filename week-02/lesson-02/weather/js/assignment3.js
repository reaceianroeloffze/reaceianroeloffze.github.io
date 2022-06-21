const date = new Date(Date.UTC(2022, 6, 8, 12, 55, 0))
const options1 = {
    year: 'numeric'
}

document.querySelector('.year').textContent = new Date().toLocaleDateString('en-US', options1);

const options2 = {
    dateStyle: 'full',
}

let update = document.querySelector('.date').innerText = new Date(document.lastModified).toLocaleDateString('en-gb', options2);
console.log(update)