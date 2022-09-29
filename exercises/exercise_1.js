const characters = require("../data/characters.json");


const findCharacterUnknownBirthDate = () => {
 return characters.find((charecter) => charecter.birth_year  === "unknown");
}

module.exports = findCharacterUnknownBirthDate;
