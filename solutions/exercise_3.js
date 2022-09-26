const characters = require("../data/characters.json");
const charactersWithMediumHeight = require("../exercises/exercise_3");

// TODO: return only characters that their height is between 180 and 200

const solution = () => {
  // YOUR CODE HERE
  // YOU CAN CHANGE ANY CODE INSIDE THE FUNCTION
  const MIN_HEIGHT = 180;
  const MAX_HEIGHT = 200;

  return characters.filter(
    (character) =>
      character.height > MIN_HEIGHT && character.height < MAX_HEIGHT
  );
};

console.info(
  "Exercise 3 passed: ",
  JSON.stringify(charactersWithMediumHeight()) === JSON.stringify(solution())
);
