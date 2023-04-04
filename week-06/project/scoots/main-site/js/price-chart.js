const chartURL = 'data/price-chart.json';

fetch(chartURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonChart) => {
        const priceChart = jsonChart['price-chart'];
        console.log(priceChart)
        for (let i = 0; i < priceChart.length; i++) {
            let box = document.createElement('section');
            box.classList.add('product-info');

            let h3 = document.createElement('h3');
            h3.classList.add('product-info__name', 'product-info__h3');
            h3.textContent = priceChart[i].vehicle;

            let photo = document.createElement('img');
            photo.classList.add('product-info__photo');
            photo.setAttribute('src', priceChart[i].image);
            photo.setAttribute('alt', priceChart[i].vehicle);

            let maxPeople = document.createElement('p');
            maxPeople.classList.add('product-info__seats');
            maxPeople.textContent = `Max People: ${priceChart[i].seats}`;

            let reserveH3 = document.createElement('h4');
            reserveH3.classList.add('product-info__h4');
            reserveH3.textContent = 'Reservations';
            
            let resPrice1 = document.createElement('p');
            resPrice1.classList.add('product-info__r-price');
            resPrice1.textContent = `Half Day (3hrs): ${priceChart[i].reservation[0]}`;

            let resPrice2 = document.createElement('p');
            resPrice2.classList.add('product-info__r-price');
            resPrice2.textContent = `Full Day: ${priceChart[i].reservation[1]}`;

            let walkInH3 = document.createElement('h4');
            walkInH3.textContent = 'Walk-In';
            walkInH3.classList.add('product-info__h4')

            let walkInPrice1 = document.createElement('p');
            walkInPrice1.classList.add('product-info__wprice');
            walkInPrice1.textContent = `Half Day (3hrs): ${priceChart[i].walkIn[0]}`;

            let walkInPrice2 = document.createElement('p');
            walkInPrice2.classList.add('product-info__w-price');
            walkInPrice2.textContent = `Full Day: ${priceChart[i].walkIn[1]}`;

            
            box.appendChild(h3);
            box.appendChild(photo);
            box.appendChild(maxPeople);
            box.appendChild(reserveH3);
            box.appendChild(resPrice1);
            box.appendChild(resPrice2);
            box.appendChild(walkInH3);
            box.appendChild(walkInPrice1);
            box.appendChild(walkInPrice2);

            document.querySelector('.price-chart__chart-grid').appendChild(box);
        }
    })