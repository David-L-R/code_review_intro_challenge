const characters = require("../data/characters.json");
const formatCharacters = require("../exercises/exercise_6");

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
  "Exercise 6 passed: ",
  JSON.stringify(formatCharacters()) === JSON.stringify(solution())
);
