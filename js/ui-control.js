// all dynamic elements are given a class of dynamic
// loop through all elements with that class and remove them

export default class UI {
    // static changeUnits (units) {
    //     const distanceElem = document.querySelector('distance');
    //     const speedElem = document.querySelector('speed');

    //     if (units === 'miles') {
    //         //convert from km to miles
    //         distanceElem.textContent = Convert.kmToMi(units)
    //     } else if (units === 'kilometers') {
    //         //convert from miles to km.
    //     }
    // }
    
    static clearPage () {
        const elements = document.querySelectorAll('.dynamic');
        elements.forEach( (elem) => {
            elem.remove();
        })

    }
    
    static updateIssCoordinates (data) {
        const latContainer = document.querySelector('.lat-container');
        const lonContainer = document.querySelector('.lon-container');
        let lat;
        let lon;
        lat = document.createElement('p');
        lat.classList.add('dynamic');
        lon = document.createElement('p');
        lon.classList.add('dynamic');
        lat.textContent = data.latitude;
        lon.textContent = data.longitude;
        latContainer.appendChild(lat);
        lonContainer.appendChild(lon);
    }

    static updateDistance (distance) {
        const distanceContainer = document.querySelector('.distance-container');
        const distanceElem = document.createElement('p');
        distanceElem.classList.add('dynamic', 'distance');
        console.log(typeof(distance));
        distanceElem.textContent = `—${distance.toLocaleString()}`;
        distanceContainer.appendChild(distanceElem);
    }

    static updateDirection (message) {
        const distanceContainer = document.querySelector('.distance-container');
        const directionElem = document.createElement('p');
        directionElem.classList.add('dynamic');
        directionElem.textContent = `—${message}`;
        distanceContainer.appendChild(directionElem);
    }

    static updateSpeed (data) {
        const speedCont = document.querySelector('.speed-container');
        const speedElem = document.createElement('p');
        speedElem.classList.add('dynamic', 'speed');
        speedElem.textContent = data;

        speedCont.appendChild(speedElem);

    }

    static displayLocation (res) {  
        // lastKnownLoc = res;
        localStorage.setItem('lastKnownLocation', res);
        const locationContainer = document.querySelector('.location-container');
        const locationElem = document.createElement('p');
        locationElem.classList.add('dynamic');
        locationElem.textContent = `The ISS is currently over ${res}`;

        locationContainer.appendChild(locationElem);
    }

    static displayLastKnownLocation () {
        const locationContainer = document.querySelector('.location-container');
        const locationElem = document.createElement('p');
        locationElem.classList.add('dynamic');
        locationElem.textContent = 'The ISS is currently over an unidentifiable land mass or ocean.'
        const lastLocElem = document.createElement('p');
        lastLocElem.classList.add('dynamic');
        locationContainer.appendChild(locationElem);
        if (localStorage.getItem('lastKnownLocation') !== null) {
            lastLocElem.textContent = `Last known location: ${localStorage.getItem('lastKnownLocation')}.`
            locationContainer.appendChild(lastLocElem);
        }
    }

    static displayLocationError () {
        
    }
}

// let lastKnownLoc;