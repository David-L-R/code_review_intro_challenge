const characters = require("../data/characters.json");
const findCharacterUnknownBirthDate = require("../exercises/exercise_1");
const arraysEqual = require("../utils/equal");

const solution = () => {
  return characters.find((character) => character.birth_year === "unknown");
};

console.info(
  "Exercise 1 passed: ",
  arraysEqual(findCharacterUnknownBirthDate(), solution())
);
