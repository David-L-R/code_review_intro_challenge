const characters = require("../data/characters.json");

// TODO: return only characters that
// their height is between 180 and 200

const charactersWithMediumHeight = () => {
  const MIN_HEIGHT = 180;
  const MAX_HEIGHT = 200;
  return characters.filter(character => 
    (character.height > MIN_HEIGHT) && (character.height < MAX_HEIGHT));
    
  };

module.exports = charactersWithMediumHeight;
