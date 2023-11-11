import { fetchIss, fetchGeocode } from "./apis.js";
import Calculate from "./calc-distance.js";
import UI from "./ui-control.js";
import Convert from "./convert-units.js";

document.addEventListener('DOMContentLoaded', () => {
    fetchIss()
    .then( (res) => { 
        loadInfo(res) 
        fetchGeocode(res.latitude, res.longitude)
            .then( (res) => {
                UI.displayLocation(res.address.country);
                console.log(res);
            })
            .catch( (err) => {
                UI.displayLocation('an unidentifiable land mass or ocean.');
                //display last known country.
            })
    })
});

function loadInfo (data) {
    UI.updateIssCoordinates(data);
    console.log(data);
    const distance = Calculate.calcDistance(data.latitude, data.longitude, 34.885740, -82.407650);
    const distanceKm = Convert.toKm(distance);
    UI.updateDistance(distanceKm);
    const direction = Calculate.calcDirection(-82.407650, data.longitude);
    UI.updateDirection(direction);
    UI.updateSpeed(data);
}
