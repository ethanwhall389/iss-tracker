import Calculate from "./calc.js";

export default class UI {
   
    
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

    static updateSpeed (speed, speedMetaphor) {
        const speedCont = document.querySelector('.speed-container');
        const speedElem = document.createElement('p');
        speedElem.classList.add('dynamic', 'speed');
        speedElem.textContent = speed;

        const speedMetaElem = document.createElement('p');
        speedMetaElem.classList.add('dynamic', 'speed');
        speedMetaElem.textContent = `That means it could fly across the United States in about ${speedMetaphor} minutes!`;


        speedCont.append(speedElem, speedMetaElem);

    }

    static displayLocation (res) {  
        // lastKnownLoc = res;
        localStorage.setItem('lastKnownLocation', res);
        localStorage.setItem('lastKnownTime', Calculate.calcDate());
        

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
        locationElem.textContent = 'The ISS is currently over an unidentifiable land mass or ocean. Check back shortly.'
        locationContainer.appendChild(locationElem);
        
        const lastLocElem = document.createElement('p');
        lastLocElem.classList.add('dynamic');
        if (localStorage.getItem('lastKnownLocation') !== null) {
            lastLocElem.textContent = `Last known location: ${localStorage.getItem('lastKnownLocation')}.`
            locationContainer.appendChild(lastLocElem);
        }

        const lastTimeElem = document.createElement('p');
        lastTimeElem.classList.add('dynamic');
        if (localStorage.getItem('lastKnownTime') !== null) {
            lastTimeElem.textContent = `Recorded at: ${localStorage.getItem('lastKnownTime')}.`
            locationContainer.appendChild(lastTimeElem);
        }
    }
}
