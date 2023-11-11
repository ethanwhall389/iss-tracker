export default class UI {
    static updateIssCoordinates (data) {
        const latContainer = document.querySelector('.lat-container');
        const lonContainer = document.querySelector('.lon-container');
        let lat;
        let lon;
        if (lat !== null && lon !== null) {
            latContainer.removeChild(latContainer.lastChild);
            lonContainer.removeChild(lonContainer.lastChild);
        }
        lat = document.createElement('p');
        lon = document.createElement('p');
        lat.textContent = data.latitude;
        lon.textContent = data.longitude;
        latContainer.appendChild(lat);
        lonContainer.appendChild(lon);
    }

    static updateDistance (distance) {
        const distanceContainer = document.querySelector('.distance-container');
        const distanceElem = document.createElement('p');
        distanceElem.textContent = distance;
        distanceContainer.appendChild(distanceElem);
    }

    static updateDirection (message) {
        const distanceContainer = document.querySelector('.distance-container');
        const directionElem = document.createElement('p');
        directionElem.textContent = message;
        distanceContainer.appendChild(directionElem);
    }

    static updateSpeed (data) {
        const speedCont = document.querySelector('.speed-container');
        const speedElem = document.createElement('p');
        speedElem.textContent = `${Math.round(data).toLocaleString()} Km/h`;

        speedCont.appendChild(speedElem);

    }

    static displayLocation (res) {  
        lastKnownLoc = res;
        const locationContainer = document.querySelector('.location-container');
        const locationElem = document.createElement('p');
        locationElem.textContent = `The ISS is currently over ${res}`;

        locationContainer.appendChild(locationElem);
    }

    static displayLastKnownLocation () {
        const locationContainer = document.querySelector('.location-container');
        const locationElem = document.createElement('p');
        locationElem.textContent = 'The ISS is currently over an unidentifiable land mass or ocean.'
        const lastLocElem = document.createElement('p');
        locationContainer.appendChild(locationElem);
        if (lastKnownLoc !== undefined) {
            lastLocElem.textContent = `Last known location: ${lastKnownLoc}.`
            locationContainer.appendChild(lastLocElem);
        }
    }

    static displayLocationError () {
        
    }
}

let lastKnownLoc;