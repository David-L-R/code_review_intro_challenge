const characters = require("../data/characters.json");
const charactersFemaleBlueEyesFairSkin = require("../exercises/exercise_4");
// TODO: return only characters with the following properties:
// fair skin color
// blue eye color
// female

const solution = () => {
  // YOUR CODE HERE
  // YOU CAN CHANGE ANYTHING INSIDE THE FUNCTION
  const SKIN = "fair";
  const EYES = "blue";
  const SEX = "female";

  return characters.filter(
    (c) => c.gender === SEX && c.skin_color === SKIN && c.eye_color === EYES
  );
};

console.info(
  "Exercise 4 passed: ",
  JSON.stringify(charactersFemaleBlueEyesFairSkin()) ===
    JSON.stringify(solution())
);
