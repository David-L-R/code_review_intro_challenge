const characters = require("../data/characters.json");
const formatCharacters = require("../exercises/exercise_6");
const arraysEqual = require("../utils/equal");

const solution = () => {
  return characters.map((character) => ({
    name: character.name,
    traits: {
      height: parseInt(character.height),
      mass: parseInt(character.mass),
      colors: [character.hair_color, character.skin_color, character.eye_color],
    },
  }));
};

console.info(
  "Exercise 6 passed: ",
  arraysEqual(solution(), formatCharacters())
);
