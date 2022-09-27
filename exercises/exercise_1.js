const characters = require("../data/characters.json");

/* TODO: return one character with an "unknown" birth year  */

const findCharacterUnknownBirthDate = () => {
  return characters.birthYear==="unknown";
 };

module.exports = findCharacterUnknownBirthDate;
