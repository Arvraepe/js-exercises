/*

    Exercise 1: Mastering, map, filter, and reduce

    Note: Re-use as many functions as possible.

    Datastructure: Impact

   {
     "fall": "Fell",
     "geolocation": {
      "type": "Point",
      "coordinates": [6.08333, 50.775]
     },
     "id": "1",
     "mass": "21",
     "name": "Aachen",
     "nametype": "Valid",
     "recclass": "L5",
     "reclat": "50.775000",
     "reclong": "6.083330",
     "year": "1880-01-01T00:00:00.000"
   }

 */
const Impacts = require('../datasets/meteor-impacts');


/**
 * A. i.  Log the amount of impacts that have a geolocation
 *    ii. Log the amount of impacts that have no geolocation
 */
const hasGeoLocation = ({ geolocation }) => !!geolocation;
const hasNoGeoLocation = (impact) => !hasGeoLocation(impact);

console.log(Impacts.filter(hasGeoLocation).length);
console.log(Impacts.filter(hasNoGeoLocation).length);

/**
 * B. Log the names of the impacts that have no geolocation
 */

const getName = ({ name }) => name;

console.log(Impacts.filter(hasNoGeoLocation).map(getName).join(', '));

/**
 * C. Print the names of the impacts that have a greater mass than 200 000 (needs to be variable in the function)
 */

const byMassGreaterThan = (max) => (impact) => impact.mass > max;
console.log(Impacts.filter(byMassGreaterThan(200000)).map(getName).join(', '));

/**
 * D. Print the names of the impacts younger than a certain year (needs to be variable)
 */

const isImpactYoungerThan = (year) => (impact) => new Date(impact.year).getFullYear() > year;

console.log(`The following impacts are younger than 1920: ${Impacts.filter(isImpactYoungerThan(1990)).map(getName).join(', ')}`);

/**
 * E. Print a bundled object of { year: #impacts } for example { 1951: 1, 2012: 3, ... } of all impacts younger than 1945
 */

const toYearAndAmount = (obj, impact) => {

  const year = new Date(impact.year).getFullYear();

  if (!obj[year]) obj[year] = 0;

  obj[year]++;

  return obj;

};