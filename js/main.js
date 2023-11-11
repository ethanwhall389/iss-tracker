import fetchIss from "./fetch-iss.js";
import Calculate from "./calc-distance.js";
import UI from "./ui-control.js";
import calcDistance from "./calc-distance.js";
import Convert from "./convert-units.js";

document.addEventListener('DOMContentLoaded', () => {
    fetchIss()
    .then( (res) => {
        UI.updateIssCoordinates(res);
        console.log(res);
        const distance = Calculate.calcDistance(res.latitude, res.longitude, 34.885740, -82.407650);
        const distanceKm = Convert.toKm(distance);
        UI.updateDistance(distanceKm);
        const direction = Calculate.calcDirection(-82.407650, res.longitude);
        UI.updateDirection(direction);
    })
});
// import { UI } from "./js/ui-control.js";
