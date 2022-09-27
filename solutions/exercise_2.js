const characters = require("../data/characters.json");
const charactersWithKnownBirthDate = require("../exercises/exercise_2");

const solution = () => {
  return characters.filter((c) => c.birth_year !== "unknown");
};

console.info(
  "Exercise 2 passed: ",
  JSON.stringify(charactersWithKnownBirthDate()) === JSON.stringify(solution())
);
