const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&appid=dac3894ce5b315ff2a0ab4b8421d5d35&units=imperial'

fetch (weatherURL)
	.then((response) => response.json())
	.then((weatherObj) => {
		console.log(weatherObj);
		document.querySelector('.wi-para__weather-desc').textContent = weatherObj.weather[0].description;
		let t = document.querySelector('.wi-para__current-temp').textContent = weatherObj.main.temp;
		document.querySelector('.wi-para__humidity').textContent = weatherObj.main.humidity;
		let s = document.querySelector('.wi-para__wind-speed').textContent = weatherObj.wind.speed;

		const windChill = () => {
			if (t > 50 || s < 3) {
			return 'N/A'
			}
			return Math.round(35.74 + (0.6215*t) - 35.75*(Math.pow(s, 0.16)) + 0.4275*t*(Math.pow(s, 0.16)), 2);
		};

		document.querySelector('.wi-para__wind-chill').textContent = windChill();
	});

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=d6cc3373b99551fe298c6c6ad9bd5b93&units=imperial';

fetch (forecastURL)
	.then((response) => response.json())
	.then((forecastObj) => {
		console.log(forecastObj);
		let fiveDayForecast = {};
		let dayOfWeek = 0;
		for (let i = 0; i < forecastObj.list.length; i++ ) {
			if (forecastObj.list[i].dt_txt.includes('12:00:00') === true) {
				
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

		const forecast = document.querySelector('.weather-forecast__days');
		
		for (i = 0; i < 5; i++) {
			let currentForecast = document.createElement('section');
			currentForecast.classList.add('days__day');
			
			let seconds = fiveDayForecast[i].date;
			let milisec = seconds * 1000;
			let forecastDate = new Date(milisec);

			let h4 = document.createElement('h4');
			h4.classList.add('day__weekday');
			let currentDayOfWeek = {weekday: 'long'};
			let day = forecastDate.toLocaleDateString(undefined, currentDayOfWeek);
			h4.textContent = day;
			currentForecast.appendChild(h4);

			let span = document.createElement('span');
			span.classList.add('day__month-day');
			let dateAndMonth = {month: 'numeric', day: 'numeric', timeStyle: undefined};
			let monthDateString = forecastDate.toLocaleDateString('en-GB', dateAndMonth);
			span.textContent = monthDateString;
			currentForecast.appendChild(span);

			let img = document.createElement('img');
			img.classList.add('day__weather-con');
            img.src = fiveDayForecast[i].icon;
            img.alt = fiveDayForecast[i].weatherDescr;
            currentForecast.appendChild(img);

			let temp = document.createElement('span');
			temp.classList.add('day__temp');
            temp.textContent = fiveDayForecast[i].temp;
            currentForecast.appendChild(temp);

			forecast.appendChild(currentForecast);	
		}

	});