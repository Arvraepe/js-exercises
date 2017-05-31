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