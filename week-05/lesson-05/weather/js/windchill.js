
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d6cc3373b99551fe298c6c6ad9bd5b93&units=imperial';

fetch (weatherURL)
	.then((response) => response.json())
	.then((weatherObj) => {
		console.log(weatherObj);
		document.getElementById('weather-description').textContent = weatherObj.weather[0].description;
		let t = document.getElementById('temp').textContent = weatherObj.main.temp_max;
		document.getElementById('humidity').textContent = weatherObj.main.humidity;
		let s = document.getElementById('wind-speed').textContent = weatherObj.wind.speed;

		const windChill = () => {
			if (t > 50 || s < 3) {
			return 'N/A'
			}
			return Math.round(35.74 + (0.6215*t) - 35.75*(Math.pow(s, 0.16)) + 0.4275*t*(Math.pow(s, 0.16)), 2);
		};

		document.getElementById('wind-chill').textContent = windChill();
	});

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d6cc3373b99551fe298c6c6ad9bd5b93&units=imperial';

fetch (forecastURL)
	.then((response) => response.json())
	.then((forecastObj) => {
		console.log(forecastObj);
		for (let i = 0; i < forecastObj.length; i++ ) {
			forecastObj.list[i].filter(() => {
				if (forecastObj.list[i].clouds.dt_txt === '18:00:00') {
					console.log(forecastObj.list[i].main.temp);
					// return forecastObj.list[i].main.temp;
					document.querySelectorAll('#daily-forecast').textContent = forecastObj.list[i].main.temp;
				}
			});
		};
	});