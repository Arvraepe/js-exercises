/*

    Exercise 2: Creating a game score balancing algorithm.

    Scores = ( team, game, score ) team = the team, game = the game that was played, score = the score of the team in that game

    Game 1 e.g. soccer      avg 1
    Game 2 e.g. handball    avg 20

    What is the real score of a team? If T1 wins in soccer with 3 - 1 but loses in handball with 10 - 23, who is the better team?

    Plan of attack:
    - calculate averages of each game
    - take the lowest or highest average
    - calculate modifiers ( * x ) for every game
    - calculate modified score for each game for each team (even out the differences)
    - calculate sum of all scores for a real score leader board

    Datastructure score: { "team":1, "score":23, "game":2 }

 */
const R = require('ramda');
const Scores = require('../datasets/scores.json');

const getTeams = (scores) => Array.from(new Set(scores.map((score) => score.team)));
const getGames = (scores) => Array.from(new Set(scores.map((score) => score.game)));

const isScoreOfTeam = (team) => (score) => score.team === team;
const isScoreOfGame = (game) => (score) => score.game === game;

const getScoresByTeam = (scores, team) => scores.filter(isScoreOfTeam(team));
const getScoresByGame = (scores, game) => scores.filter(isScoreOfGame(game));

const getScoresByTeamByGame = (scores, team, game) => getScoresByGame(getScoresByTeam(scores, team), game);

const getAverageForGame = (scores, game) => Math.floor(getScoresByGame(scores, game).reduce((total, score) => total + score.score, 0) / getScoresByGame(scores, game).length);
const getHighestAverageForGame = (scores) => Math.max.apply(null, getGames(scores).map((game) => getAverageForGame(scores, game)));

const getGameModifier = (scores, game) => Math.floor(getHighestAverageForGame(scores) / getAverageForGame(scores, game));
const getBalancedScoreForTeamForGame = (scores, team, game) => getScoresByTeamByGame(scores, team, game).reduce((total, score) => total + score.score, 0) * getGameModifier(scores, game);
const getBalancedScoreForTeam = (scores, team) =>
                                  getGames(scores)
                                    .map((game) => getBalancedScoreForTeamForGame(scores, team, game))
                                    .reduce((total, balanced) => total+balanced, 0 );

console.log(getBalancedScoreForTeam(Scores, 1));
console.log(getBalancedScoreForTeam(Scores, 2));