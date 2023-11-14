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
    console.log(units);
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
    console.log(typeof(distance.num));
    const distanceConverted = Convert.convertDistance(distance, units);
    console.log(typeof(distanceConverted));
    console.log(`converted: ${distanceConverted}`);
    // console.log(`distance before conversion: ${distanceToKm}`);
    // console.log(`distance after: ${distanceConverted}`);
    UI.updateDistance(distanceConverted);
    
    const direction = Calculate.calcDirection(-82.407650, data.longitude);
    UI.updateDirection(direction);
    
    const convertedSpeed = Convert.convertSpeed(data, units);
    const speedMetaphor = Calculate.calcSpeedMetaphor(convertedSpeed, units);
    UI.updateSpeed(convertedSpeed, speedMetaphor);

    fetchGeocode(data.latitude, data.longitude)
    .then( (result) => {
        UI.displayLocation(result.address.country);
        console.log(result);
    })
    .catch( (err) => {
        UI.displayLastKnownLocation();
        //display last known country.
    })
}
