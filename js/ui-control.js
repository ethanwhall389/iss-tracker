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
        speedElem.textContent = `${Math.round(data.velocity).toLocaleString()} Km/h`;

        speedCont.appendChild(speedElem);

    }

    static displayLocation (res) {
        const locationContainer = document.querySelector('.location-container');
        const locationElem = document.createElement('p');
        locationElem.textContent = `The ISS is currently over ${res}`;

        locationContainer.appendChild(locationElem);
    }

    static displayLocationError () {
        
    }
}