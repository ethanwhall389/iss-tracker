import { fetchIss, fetchGeocode } from "./apis.js";
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


function loadPage () {
    fetchIss ()
    .then( (result) => {
        loadInfo(result)
    })
}

function loadInfo (data) {
    UI.updateIssCoordinates(data);
    
    const distance = Calculate.calcDistance(data.latitude, data.longitude, 34.885740, -82.407650);
    const distanceConverted = Convert.convertDistance(distance, units);
    UI.updateDistance(distanceConverted);
    
    const direction = Calculate.calcDirection(-82.407650, data.longitude);
    UI.updateDirection(direction);
    
    const convertedSpeed = Convert.convertSpeed(data, units);
    const speedMetaphor = Calculate.calcSpeedMetaphor(convertedSpeed, units);
    UI.updateSpeed(convertedSpeed, speedMetaphor);

    fetchGeocode(data.latitude, data.longitude)
    .then( (result) => {
        UI.displayLocation(result.address.country);
    })
    .catch( (err) => {
        UI.displayLastKnownLocation();
    })
}
