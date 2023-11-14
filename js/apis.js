function fetchIss () {
    return fetch ('https://api.wheretheiss.at/v1/satellites/25544&units=kilometers')
      .then ( (result) => {
        return result.json();
      })
    };

    function fetchGeocode (lat, lon) {
      return fetch (`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&format=json`)
        .then ( (result) => {

          return result.json();
        })
        .catch ( (err) => {
          console.log('error!!' + err);
        })
    }

    export { fetchIss, fetchGeocode}

