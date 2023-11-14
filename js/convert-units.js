export default class Convert {

    static convertDistance (distance, selectedUnits) {
        if (selectedUnits === 'miles') {
            if (distance.units === 'miles') {
                return `${distance.num.toLocaleString()} Miles`;
            } else {
                return `${this.kmToMi(distance.num)} Miles`;
            }
        } else if (selectedUnits === 'kilometers') {
            if (distance.units === 'kilometers') {
                return `${distance.num.toLocaleString()} Kilometers`;
            } else {
                return `${this.miToKm(distance.num)} Kilometers`;
            }
        }
    }

    static convertSpeed (data, selectedUnits) {
        if (selectedUnits === 'miles' && data.units === 'miles') {
            return `${data.velocity} mi/hr`;
        } else if (selectedUnits === 'kilometers' && data.units === 'kilometers') {
            return `${Math.round(data.velocity).toLocaleString()} km/hr`;
        } else {
            return `${this.kmToMi(data.velocity)} mi/hr`;
        }
    }
    
    static metToKm (meters) {
        const rounded = Math.round(meters * 0.001)
        return rounded;
    }

    static kmToMi (km) {
        const rounded = Math.round(km * 0.62137);
        return rounded.toLocaleString();
    }

    static miToKm (miles) {
        const rounded = Math.round(miles * 1.60934);
        return rounded.toLocaleString();
    }
}