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
}