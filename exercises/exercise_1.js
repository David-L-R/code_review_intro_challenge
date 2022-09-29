const characters = require("../data/characters.json");

// /* TODO: return one character with an "unknown" birth year  */
// for(i=0; i<characters.length; i++){
//   console.log(characters[i].birth_year);
// }
const findCharacterUnknownBirthDate = () => {
 return characters.find((charecter) => charecter.birth_year  === "unknown");
}
// const findCharacterUnknownBirthDate = () => {
//    return characters.find(characters.birth_year === "unknown");
// }

module.exports = findCharacterUnknownBirthDate;
