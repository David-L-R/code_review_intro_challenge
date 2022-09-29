const characters = require("../data/characters.json");

// TODO: return only characters with the following properties:
// fair skin color
// blue eye color
// female

const charactersFemaleBlueEyesFairSkin = () => {
  // YOUR CODE HERE
  // YOU CAN CHANGE ANYTHING INSIDE THE FUNCTION
  const SKIN = "fair";
  const EYES = "blue";
  const SEX = "female";
  return characters.filter(character => 
    (character.skin_color === SKIN) && (character.eye_color === EYES) && (character.gender === SEX));
   
};

module.exports = charactersFemaleBlueEyesFairSkin;
