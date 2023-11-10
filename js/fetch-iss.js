export default function fetchIss () {
    return fetch ('https://api.wheretheiss.at/v1/satellites/25544')
      .then ( (result) => {
      return result.json();
      })
    };

