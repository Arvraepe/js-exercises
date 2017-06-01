/*

    Exercise 4: Mastering promises

    Api: https://swapi.co/

 */

const fetch = require('node-fetch');

/**
 * A. Print out a character (by id)
 */

const toJSON = (response) => response.json();
const getCharacterById = (id) => fetch(`https://swapi.co/api/people/${id}`).then(toJSON);

getCharacterById(1).then(console.log);

/**
 * B. Print out all the films in which a character stars.
 */
const getFilmByUrl = (url) => fetch(url).then(toJSON);
const getFilmsByCharacterId = (id) => getCharacterById(id).then((character) => Promise.all(character.films.map(getFilmByUrl)));

getFilmsByCharacterId(1).then(console.log);