// Retrieve Town Data for Preston, Soda Springs & Fish Haven from a JSON file
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

const townInformation = document.getElementById('town-info');

// Fetch the relevant information from the file using the fetch method.
fetch(requestURL)
    .then((retrieval) => {
        console.log(retrieval);
        if (!retrieval.ok) {
            throw Error('Content not loading')
        };
        return retrieval.json();
    })
    .then((townData) => {
        const towns = townData['towns'];                                 
        towns.forEach(townInfo => {
            Object.entries(townInfo).forEach(([key, value]) => {
                let prestonBox = document.createElement('section')
                prestonBox.classList.add('preston-info');
                let sodaSpringsBox = document.createElement('section')
                sodaSpringsBox.classList.add('soda-springs-info');
                let fishHavenBox = document.createElement('section')
                fishHavenBox.classList.add('fish-haven-info');

                let prestonH2 = document.createElement('h2');
                prestonH2.classList.add('preston-heading');
                let sodaSpringsH2 = document.createElement('h2');
                sodaSpringsH2.classList.add('soda-springs-heading');
                let fishHaveH2 = document.createElement('h2');
                fishHaveH2.classList.add('fish-haven-heading');

                let townImage = document.createElement('img');
                let motto = document.createElement('span');
                let yearFounded = document.createElement('span');
                let population = document.createElement('span');
                let averageRainfall = document.createElement('span');
                if (value === 'Preston' || value === 'Soda Springs' || value === 'Fish Haven') {
                    prestonH2.textContent = `${townInfo.name}`;
                    sodaSpringsH2.textContent = `${townInfo.name}`;
                    fishHaveH2.textContent = `${townInfo.name}`;
                    motto.textContent = `${townInfo.motto}`;
                    yearFounded.textContent = `Year Founded: ${townInfo.yearFounded}`;
                    population.textContent = `Population: ${townInfo.currentPopulation}`;
                    averageRainfall.textContent = `Annual Rain Fall: ${townInfo.averageRainfall}`;
                    townImage.setAttribute('src', townInfo.photo);
                    townImage.setAttribute('alt', townInfo.name);
                    if (value === 'Preston') {
                        prestonBox.appendChild(prestonH2);
                        prestonBox.appendChild(motto);
                        prestonBox.appendChild(yearFounded);
                        prestonBox.appendChild(population);
                        prestonBox.appendChild(averageRainfall);
                        prestonBox.appendChild(townImage);    
                        townInformation.appendChild(prestonBox);
                    }
                    if (value === 'Soda Springs') {
                        sodaSpringsBox.appendChild(sodaSpringsH2);
                        sodaSpringsBox.appendChild(motto);
                        sodaSpringsBox.appendChild(yearFounded);
                        sodaSpringsBox.appendChild(population);
                        sodaSpringsBox.appendChild(averageRainfall);
                        sodaSpringsBox.appendChild(townImage);
                        townInformation.appendChild(sodaSpringsBox);
                    }
                    if (value === 'Fish Haven') {
                        fishHavenBox.appendChild(fishHaveH2);
                        fishHavenBox.appendChild(motto);
                        fishHavenBox.appendChild(yearFounded);
                        fishHavenBox.appendChild(population);
                        fishHavenBox.appendChild(averageRainfall);
                        fishHavenBox.appendChild(townImage);
                        townInformation.appendChild(fishHavenBox);
                    }
                };
                
                
            });
        });
    })
    .catch(errorMessage => {
        console.log(errorMessage);
    });