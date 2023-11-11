import { fetchIss, fetchGeocode } from "./apis.js";
import Calculate from "./calc-distance.js";
import UI from "./ui-control.js";
import Convert from "./convert-units.js";

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
    const distanceKm = Convert.toKm(distance);
    UI.updateDistance(distanceKm);
    
    const direction = Calculate.calcDirection(-82.407650, data.longitude);
    UI.updateDirection(direction);
    
    UI.updateSpeed(data.velocity);

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
