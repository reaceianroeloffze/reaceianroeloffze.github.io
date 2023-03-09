const options1 = {
    year: 'numeric'
};

document.querySelector('.copyright__date').textContent = new Date().toLocaleDateString('en-gb', options1);

const options2 = {
    dateStyle: 'short'
};

let update = document.querySelector('.last-updated__date').textContent = new Date(document.lastModified).toLocaleDateString('en-za', options2);

