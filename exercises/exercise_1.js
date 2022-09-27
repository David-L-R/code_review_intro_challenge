const characters = require("../data/characters.json");

/* TODO: return one character with an "unknown" birth year  */

const findCharacterUnknownBirthDate = () => {
   const filteredCharacters = characters.filter(characters.birthYear==="unknown");
   return filteredCharacters[0];
 };

// console.log(findCharacterUnknownBirthDate());
module.exports = findCharacterUnknownBirthDate;
