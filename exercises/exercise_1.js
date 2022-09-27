const characters = require("../data/characters.json");

/* TODO: return one character with an "unknown" birth year  */

const findCharacterUnknownBirthDate = () => {
   return characters.find(characters.birthYear==="unknown");
 
 };

// console.log(findCharacterUnknownBirthDate());
module.exports = findCharacterUnknownBirthDate;
