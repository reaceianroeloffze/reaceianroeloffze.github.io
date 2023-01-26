
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0369&lon=-111.2963&appid=d6cc3373b99551fe298c6c6ad9bd5b93&units=imperial';

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

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0369&lon=-111.2963&appid=d6cc3373b99551fe298c6c6ad9bd5b93&units=imperial';

fetch (forecastURL)
	.then((response) => response.json())
	.then((forecastObj) => {
		// console.log(forecastObj);
		let fiveDayForecast = {};
		let dayOfWeek = 0;
		for (let i = 0; i < forecastObj.list.length; i++ ) {
			if (forecastObj.list[i].dt_txt.includes('18:00:00') === true) {
				console.log(forecastObj.list[i]);
				console.log(forecastObj.list[i].main.temp);
				
				let date = forecastObj.list[i].dt;
				let temp = `${forecastObj.list[i].main.temp}°F`;
				let forcastImg = `https://openweathermap.org/img/w/${forecastObj.list[i].weather[0].icon}.png`;
				let weatherDescr = forecastObj.list[i].weather[0].description;

				today = {
					'date': date,
					'temp': temp,
					'icon': forcastImg,
					'weatherDescr': weatherDescr
				};

				fiveDayForecast[dayOfWeek] = today;
				dayOfWeek = dayOfWeek + 1;
			};
		};

		const forecast = document.querySelector('.days');
		
		for (i = 0; i < 5; i++) {
			let currentForecast = document.createElement('section');
			// currentForecast.classList.add('days');

			let seconds = fiveDayForecast[i].date;
			let milisec = seconds * 1000;
			let forecastDate = new Date(milisec);

			let h4 = document.createElement('h4');
			let currentDayOfWeek = {weekday: 'long'};
			let day = forecastDate.toLocaleDateString(undefined, currentDayOfWeek);
			h4.textContent = day;
			currentForecast.appendChild(h4);

			let span = document.createElement('span');
			let dateAndMonth = {month: 'numeric', day: 'numeric', timeStyle: undefined};
			let monthDateString = forecastDate.toLocaleDateString('en-GB', dateAndMonth);
			span.textContent = monthDateString;
			currentForecast.appendChild(span);

			let img = document.createElement('img');
            img.src = fiveDayForecast[i].icon;
            img.alt = fiveDayForecast[i].weatherDescr;
            currentForecast.appendChild(img);

			let temp = document.createElement('span');
            temp.textContent = fiveDayForecast[i].temp;
            currentForecast.appendChild(temp);

			forecast.appendChild(currentForecast);	
		}

	});