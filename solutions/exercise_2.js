const characters = require("../data/characters.json");
const charactersWithKnownBirthDate = require("../exercises/exercise_2");

// TODO: return all characters with known birth year
const solution = () => {
  return characters.filter((c) => c.birth_year !== "unknown");
};

console.info(
  "Exercise 2 passed: ",
  JSON.stringify(charactersWithKnownBirthDate()) === JSON.stringify(solution())
);
