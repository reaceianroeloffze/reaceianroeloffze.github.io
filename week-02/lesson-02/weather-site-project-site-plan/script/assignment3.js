// const date = new Date(Date.UTC(2022, 6, 8, 12, 55, 0))
const options1 = {
    year: 'numeric'
}

document.querySelector('.year').textContent = new Date().toLocaleDateString('en-US', options1);

const options2 = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24'
}

let update = document.querySelector('.date').innerText = new Date(document.lastModified).toLocaleDateString('en-US', options2);
console.log(update)