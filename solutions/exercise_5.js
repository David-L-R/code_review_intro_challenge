const characters = require("../data/characters.json");
const formatCharacters = require("../exercises/exercise_5");
const arraysEqual = require("../utils/equal");

const solution = () => {
  return characters
    .filter((character) => {
      const { birth_year, height } = character;
      return birth_year !== "unknown" && height > 200;
    })
    .map((character) => {
      const { name, height, mass, gender, birth_year } = character;

      return {
        name,
        height,
        mass,
        gender,
        birth_year,
      };
    });
};

console.info(
  "Exercise 5 passed: ",
  arraysEqual(formatCharacters(), solution())
);
