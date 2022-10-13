const characters = require("../data/characters.json");
const charactersWithMediumHeight = require("../exercises/exercise_3");
const arraysEqual = require("../utils/equal");

const solution = () => {
  const MIN_HEIGHT = 180;
  const MAX_HEIGHT = 200;

  return characters.filter(
    (character) =>
      character.height > MIN_HEIGHT && character.height < MAX_HEIGHT
  );
};

console.info(
  "Exercise 3 passed: ",
  arraysEqual(charactersWithMediumHeight(), solution())
);
