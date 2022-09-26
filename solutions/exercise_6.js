const characters = require("../data/characters.json");
const charactersFormatted = require("../exercises/exercise_6");

// TODO: return all characters that :
// - birth_year is known
// - male
// - height is more than 200

// Only return the following fields
/*
 * name
 * height
 * mass
 * gender
 * birth_year
 */

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
  JSON.stringify(charactersFormatted()) === JSON.stringify(solution())
);
