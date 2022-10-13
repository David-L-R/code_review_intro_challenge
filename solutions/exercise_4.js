const characters = require("../data/characters.json");
const charactersFemaleBlueEyesFairSkin = require("../exercises/exercise_4");
const arraysEqual = require("../utils/equal");

const solution = () => {
  const SKIN = "fair";
  const EYES = "blue";
  const SEX = "female";

  return characters.filter(
    (c) => c.gender === SEX && c.skin_color === SKIN && c.eye_color === EYES
  );
};

console.info(
  "Exercise 4 passed: ",
  arraysEqual(charactersFemaleBlueEyesFairSkin(), solution())
);
