import { fetchIss, fetchGeocode, getUserLocation } from "./apis.js";
import Calculate from "./calc.js";
import UI from "./ui-control.js";
import Convert from "./convert-units.js";

const unitSelector = document.querySelector('#select-units');
let units = unitSelector.value;
unitSelector.addEventListener('change', () => {
    units = unitSelector.value;
    UI.clearPage();
    loadPage();
})


document.addEventListener('DOMContentLoaded', () => {
    loadPage();
});

const bttnRefresh = document.querySelector('#bttn-refresh');
bttnRefresh.addEventListener('click', () => {
    UI.clearPage();
    loadPage();
});

// function fetchUserLocation (issData) {
//     getUserLocation()
//             .then( (location) => {
//                 loadInfo(issData, location);
//             })
//             .catch( (error) => {
//                 alert('Please allow location use');
//             })
// }


function loadPage () {
    fetchIss ()
    .then( (result) => {
        // fetchUserLocation(result);
        getUserLocation()
            .then( (location) => {
                loadInfo(result, location);
            })
            .catch( (error) => {
                alert('For the ISS Tracker to work properly, please allow it access to your location.')
                UI.updateDistance('Please refresh and allow location access for the ISS Tracker to function properly.')
            })
    })
}

function loadInfo (issData, userLocation) {
    UI.updateIssCoordinates(issData);

    const distance = Calculate.calcDistance(issData.latitude, issData.longitude, userLocation.lat, userLocation.lon);
    const distanceConverted = Convert.convertDistance(distance, units);
    UI.updateDistance(distanceConverted);
    
    const direction = Calculate.calcDirection(userLocation.lon, issData.longitude);
    UI.updateDirection(direction);
    
    const convertedSpeed = Convert.convertSpeed(issData, units);
    const speedMetaphor = Calculate.calcSpeedMetaphor(convertedSpeed, units);
    UI.updateSpeed(convertedSpeed, speedMetaphor);

    fetchGeocode(issData.latitude, issData.longitude)
    .then( (result) => {
        UI.displayLocation(result.address.country);
    })
    .catch( () => {
        UI.displayLastKnownLocation();
    })
}
