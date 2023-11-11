export default class Calculate {
    static calcDistance (latitude1, longitude1, latitude2, longitude2) {
        const earthRadius = 6371e3; //meters

        function toRadians (deg) {
            const convert = deg * (Math.PI/180);
            console.log(convert);
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
        
        console.log(`Change in lat: ${changeInLat}`);
        console.log(`Change in long: ${changeInLong}`);
        
        //Haversine formula
        const a = Math.pow(Math.sin(changeInLat/2), 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.pow(Math.sin(changeInLong/2), 2);
        console.log('a: ' + a);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        console.log(`C: ${c}`);
        
        //distance in meters
        const meters = earthRadius * c;
    
        const metersRounded = Math.round(meters);
    
        console.log(`meters: ${meters}`);
    
        return metersRounded;
        
        // console.log(`Distance in meters: ${meters}`);
        // console.log(`Distance in Km: ${convertToKm(meters)}`)
        // console.log(`Distance in Mi: ${convertToMiles(meters)}`)
        // console.log(`Distance in Km rounded: ${Math.round(convertToKm(meters))}`)
    }

    static calcDirection (userLon, issLon) {
        const diff = userLon - issLon;
        if (diff < 0 && diff > -180) {
            console.log('moving away');
            return 'The ISS is currently moving away from your location.'
        } else if (diff < -180 || diff < 180 && diff > 0) {
            console.log('moving towards');
            return 'The ISS is currently moving towards your location'
        }
    }
    

}

