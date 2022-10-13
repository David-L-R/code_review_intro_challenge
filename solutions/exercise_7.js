const characters = require("../data/characters.json");
const planets = require("../data/planets.json");
const charactersWithHomeWorld = require("../exercises/exercise_7");
const arraysEqual = require("../utils/equal");

const solution = () => {
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
  arraysEqual(charactersWithHomeWorld(), solution())
);
