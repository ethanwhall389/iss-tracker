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
}
UI.updateIssCoordinates({
    "latitude": "hehe",
    "longitude": "haha"
})

UI.updateIssCoordinates({
    "latitude": "-1.55555",
    "longitude": "1.5432"
});
