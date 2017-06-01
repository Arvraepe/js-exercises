/*

    Exercise 2: Creating a game score balancing algorithm.

 */

var R = require('ramda');

const numberSort = (a, b) => b - a;

const teams = (scores) => R.dropRepeats(R.sort(numberSort, R.map(R.prop('team'), scores)));
const games = (scores) => R.dropRepeats(R.sort(numberSort, R.map(R.prop('game'), scores)));

const scoreOfTeam = R.curry((team, score) => R.equals(team, score.team));
const scoreOfGame = R.curry((game, score) => R.equals(game, score.game));

const getScoreObjectsForTeam = (scores, team) => R.filter(scoreOfTeam(team), scores);
const getScoreObjectsForGame = (scores, game) => R.filter(scoreOfGame(game), scores);
const getScoreObjectsForTeamForGame = (scores, team, game) => getScoreObjectsForGame(getScoreObjectsForTeam(scores, team), game);

const toScores = (scoreObjects) => R.map(R.prop('score'), scoreObjects);

const getScoreAverageForGame = R.curry((scores, game) => Math.floor(R.reduce(R.add, 0, toScores(getScoreObjectsForGame(scores, game))) / getScoreObjectsForGame(scores, game).length));
const getHighestAverageScore = (scores) => R.head(R.sort(numberSort, R.map(getScoreAverageForGame(scores), games(scores))));

const getGameModifier = R.curry( (scores, game) => Math.floor(getHighestAverageScore(scores) / getScoreAverageForGame(scores, game)));
const getGameModifiers = (scores) =>  R.mergeAll(R.map(getGameModifier(scores), games(scores)));

const getScoreAverageForTeamForGame = R.curry((scores, team, game) => getScoreAverageForGame(getScoreObjectsForTeam(scores, team), game));
const getScoreAverageForTeamForGameRead = R.curry((scores, team, game) => ({ game: game, average: getScoreAverageForTeamForGame(scores, team, game) }));
const getScoreAverageForTeam = (scores, team) => R.map(getScoreAverageForTeamForGameRead(scores, team), games(scores));

const getTotalScoreForTeamForGame = (scores, team, game) => R.reduce(R.add, 0, toScores(getScoreObjectsForTeamForGame(scores, team, game)));
const getRealScoreForTeamForGame = R.curry((scores, team, game) => getTotalScoreForTeamForGame(scores, team, game) * getGameModifier(scores, game) );
const getRealScoreForTeam = (scores, team) => R.reduce(R.add, 0, R.map(getRealScoreForTeamForGame(scores, team), games(scores)));

const getRealScoreForTeamRead = R.curry((scores, team) => ({ team: team, score: getRealScoreForTeam(scores, team) }));
const getRealScoresForAll = (scores) => R.map(getRealScoreForTeamRead(scores), teams(scores));

module.exports = {
  teams,
  games,
  getScoreObjectsForTeam,
  getScoreObjectsForGame,
  getScoreAverageForGame,
  getHighestAverageScore,
  getGameModifiers,
  getTotalScoreForTeamForGame,
  getRealScoreForTeam,
  getScoreAverageForTeam,
  getRealScoresForAll
};