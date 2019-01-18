const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

//there is a new API in the browser called fetch.  This returns promises (prom) which I'll learn more about later.
fetch(endpoint)
  //tell the blob of data what kind of data it is (json). i.e. convert raw data to json
  .then(blob => blob.json())
  .then(data => cities.push(...data));
  //now we have a cities array with 1000 cities and their info

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    //here we need to figure out if the city or state matches what was searched
    //g = global(search entire string)
    //i = insensitive(not case sensitive)
  const regex = new RegExp(wordToMatch, 'gi')
  return place.city.match(regex) || place.state.match(regex);
  });
}
