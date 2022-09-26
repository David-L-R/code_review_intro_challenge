const characters = require("../data/characters.json");
const planets = require("../data/planets.json");
const charactersWithHomeWorld = require("../exercises/exercise_7");

// return all characters,
// but keep only the following fields:
/*
 * name
 * homeworld
 */

// instead of the link inside "homeworld"
// find the relevant object of the planet
// inside the planets array (see above)

const solution = () => {
  //  YOUR CODE HERE
  return characters.map((character) => {
    const homeworld = planets.find(
      (planet) => planet.url === character.homeworld
    );

    return {
      name: character.name,
      homeworld: homeworld.name,
    };
  });
};

console.info(
  "Exercise 7 passed: ",
  JSON.stringify(charactersWithHomeWorld()) === JSON.stringify(solution())
);
