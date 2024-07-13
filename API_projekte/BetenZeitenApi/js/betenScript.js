// Array of city objects, each containing an Arabic name, an English name, and a country.
let cities = [
    {
        arabicName: 'choose your city to display the prayer times on current day',
        name: '',
        country: ''
    },
    {
        arabicName: 'دمشق',
        name: 'damascus',
        country: 'Syria'
    },
    {
        arabicName: 'القدس',
        name: 'al-Quds',
        country: 'Palastina'
    }
    ,
    {
        arabicName: 'صنعاء',
        name: 'sanaa',
        country: 'Yemen'
    },
    {
        arabicName: 'برلين',
        name: 'berlin',
        country: 'Deutschland'
    }
]

let currentDate = new Date()
let day = currentDate.getDate()
let month = currentDate.getMonth()
let year = currentDate.getFullYear()

document.getElementById('currentCity').innerHTML = `
    <h2>${day}, ${month}, ${year}</h2>
`
document.getElementById('print').innerHTML = `
  <div id="beschreibung">
    <h3> Das Beten (Salah) im Islam ist eine der fünf Säulen und umfasst fünf tägliche Pflichtgebete zu festgelegten Zeiten:
            Jedes Gebet besteht aus bestimmten Bewegungen und Rezitationen, durchgeführt in Richtung der Kaaba in Mekka. Vor dem Gebet ist eine rituelle Waschung (Wudu) erforderlich. Das Gebet stärkt die Beziehung zu Gott, fördert Disziplin und Gemeinschaft. 
    </h3>
  </div>
`

/*
 * Populates the dropdown menu with city options.
 * This function finds the HTML element with the ID 'city' and appends an option for each city in the cities array.
 */
function populateCityDropdown() {
    let cityElement = document.getElementById('city');
    if (cityElement) {
        for (let city of cities) {
            cityElement.innerHTML += `
                <option value="${city.name}">${city.name} ${city.arabicName}</option>
            `;
        }
    } else {
        console.log('Element with ID "city" not found.');
    }
}


populateCityDropdown()

/**
 * Fetches prayer timings for the selected city and updates the page with the timings.
 * @param {string} cityName - The name of the city for which to fetch prayer timings.
 */
function getQueryParams(cityName) {
    let queryParams = {
        country: ``,
        city: ``
    }
    for (let city of cities) {
        if (city.name === cityName) {
            queryParams = {
                city: `${cityName}`,
                country: `${city.country}`
            }
            // console.log(queryParams.city + ' ' + queryParams.country)
            break
        }
    }
    document.getElementById('print').innerHTML = ``
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: queryParams
    })

        .then(response => {
            let timings = response.data.data.timings
            let obDate = response.data.data.date.readable

            document.getElementById('currentCity').innerHTML = `
            <h2><strong><span>${queryParams.country}, ${cityName}</span>, ${obDate}</strong></h2>
            `
            // for (let key in timings) {
            //     if (key === 'Fajr' || key === 'Sunrise' || key === 'Dhuhr' || key === 'Asr' || key === 'Maghrib' || key === 'Isha')
            //         document.getElementById('print').innerHTML +=
            //             `
            //         <p>${key}:  ${timings[key]}</p>
            //     `
            // }
            const prayerNames = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
            prayerNames.forEach(prayer => {
                document.getElementById('print').innerHTML += `<p><span>${prayer}</span>: ${timings[prayer]}</p>`;
            });
        })
        .catch(error => console.log(error))

}
// Add an event listener to the dropdown menu.
// When the selected option changes, the getQueryParams function is called with the selected city's name.
document.getElementById('city').addEventListener('change', function () {
    getQueryParams(this.value)
})
