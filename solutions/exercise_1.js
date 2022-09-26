const characters = require("../data/characters.json");
const findCharacterUnknownBirthDate = require("../exercises/exercise_1");

/* TODO: return one character with an "unknown" birth year  */

const solution = () => {
  return characters.find((character) => character.birth_year === "unknown");
};

console.info(
  "Exercise 1 passed: ",
  JSON.stringify(findCharacterUnknownBirthDate()) === JSON.stringify(solution())
);
