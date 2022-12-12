const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d6cc3373b99551fe298c6c6ad9bd5b93&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const wIcon = `http://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`;
        const iconDesc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = wIcon;
        document.getElementById('icon').setAttribute('src', wIcon);
        document.getElementById('icon').setAttribute('alt', iconDesc);
    });
