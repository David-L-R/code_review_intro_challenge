const characters = require("../data/characters.json");

// TODO: return all characters.
// Include only the following fields:

/**
 * name
 * traits
 */

// Inside traits, include:
/**
 * skin color
 * eye color
 * hair color
 * mass as a NUMBER!
 * height as a NUMBER!
 */

// The structure should be like this:

/* 
  {
    name: "Owen Lars",
    traits: {
          height: 178,
          mass: 120,
          colors: [ "brown, grey", "light", "blue"]
    }
  }

  in other words

  {
    name,
    traits: {
          height,
          mass,
          colors: [ hair_color, skin_color, eye_color]
    }
  }

*/

const formatCharacters = () => {
  return characters.map((character) => ({
    name: character.name,
    traits: {
      mass: +character.mass,
      height: +character.height,
      colors: [character.hair_color, character.skin_color, character.eye_color],
    },
  }));
};

module.exports = formatCharacters;
