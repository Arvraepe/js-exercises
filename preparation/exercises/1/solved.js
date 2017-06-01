/*

    Exercise 1: Mastering, map, filter, and reduce

    Note: Re-use as many functions as possible.

 */
const Impacts = require('../datasets/meteor-impacts');

/**
 * A. i.  Log the amount of impacts that have a geolocation
 *    ii. Log the amount of impacts that have no geolocation
 */

const hasGeoLocation = (impact) => impact.geolocation;
const hasGeoLocation2 = ({ geolocation }) => geolocation; // object destruction
const hasNoGeoLocation = (impact) => !hasGeoLocation(impact);

console.log(`There are ${Impacts.filter(hasGeoLocation).length} impacts with geolocation`);
console.log(`There are ${Impacts.filter(hasNoGeoLocation).length} impacts without geolocation`);

/**
 * B. Log the names of the impacts that have no geolocation
 */
const asName = (impact) => impact.name;

console.log(`The following impacts have no geolocation: ${Impacts.filter(hasNoGeoLocation).map(asName).join(', ')}`);

/**
 * C. Print the names of the impacts that have a greater mass than 200 000 (needs to be variable in the function)
 */

const isImpactMassGreaterThan = (threshold) => (impact) => parseInt(impact.mass) > threshold;
const isImpactMassGreaterThan200000 = isImpactMassGreaterThan(200000);

console.log(`The following impacts have a mass greater than 200000: ${Impacts.filter(isImpactMassGreaterThan200000).map(asName).join(', ')}`);

/**
 * D. Print the names of the impacts younger than a certain year (needs to be variable)
 */

const isImpactYoungerThan = (year) => (impact) => new Date(impact.year).getFullYear() > year;

console.log(`The following impacts are younger than 1920: ${Impacts.filter(isImpactYoungerThan(1920)).map(asName).join(', ')}`);

/**
 * E. Print a bundled object of { year: #impacts } for example { 1951: 1, 2012: 3, ... } of all impacts younger than 1945
 */

const toYearAndAmount = (obj, impact) => {

  const year = new Date(impact.year).getFullYear();

  if (!obj[year]) obj[year] = 0;

  obj[year]++;

  return obj;
};

console.log(Impacts.filter(isImpactYoungerThan(1945)).reduce(toYearAndAmount, {}));