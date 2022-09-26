const characters = require("../data/characters.json");
const charactersFormatted = require("../exercises/exercise_5");

// TODO: return all characters, but keep only the following fields:
/*
 * name
 * height
 * mass
 * gender
 * birth_year
 */

const solution = () => {
  return characters.map((c) => {
    const { name, height, mass, gender, birth_year } = c;

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
  JSON.stringify(charactersFormatted()) === JSON.stringify(solution())
);
