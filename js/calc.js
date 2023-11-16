import Convert from "./convert-units.js";

export default class Calculate {
    static calcDistance (latitude1, longitude1, latitude2, longitude2) {
        const earthRadius = 6371e3; //meters

        function toRadians (deg) {
            const convert = deg * (Math.PI/180);
            return convert;
          }
    
        // convert degrees to radians
        const lat1 = toRadians(latitude1);
        const lat2 = toRadians(latitude2);
        const long1 = toRadians(longitude1);
        const long2 = toRadians(longitude2);
        
        // const lat1 = 34.885740;
        // const lat2 = -32.992146727229;
        // const long1 = -82.407650;
        // const long2 = -158.4439469965;
        
        
        //calculate the change
        const changeInLat = lat2 - lat1;
        const changeInLong = long2 - long1;
        
        //Haversine formula
        const a = Math.pow(Math.sin(changeInLat/2), 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.pow(Math.sin(changeInLong/2), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        
        //distance in meters
        const meters = earthRadius * c;
    
        const metersRounded = Math.round(meters);
    

        const distance = {
            "num": Convert.metToKm(metersRounded),
            "units": 'kilometers'
        }

        return distance;
    }

    static calcDirection (userLon, issLon) {
        const diff = userLon - issLon;
        if (diff < 0 && diff > -180) {
            return 'The ISS is currently moving away from your location.'
        } else if (diff < -180 || diff < 180 && diff > 0) {
            return 'The ISS is currently moving towards your location.'
        }
    }

    static calcSpeedMetaphor (speed, units) {
        const usMiles = 2742;
        const usKilometers = usMiles * 1.60934;
        let time;
        let speedStr = speed;
        // Remove non-numeric characters using a regular expression
        speedStr = speedStr.replace(/[^\d.]/g, '');
        const speedNum = parseFloat(speedStr);

        if (units === 'miles') {
            time = usMiles / speedNum;
        } else if (units === 'kilometers') {
            time = usKilometers / speedNum;
        }

        const convertToMin = time*60;
        return Math.round(convertToMin);
    }

    static calcDate () {
        const date = new Date();
        const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        // const hours = date.getHours();
        // const minutes = date.getMinutes();
        // const time = `${hours}:${minutes}`
        return time;
    }
    

}

