const characters = require("../data/characters.json");

// TODO: return all characters with known birth year
const charactersWithKnownBirthDate = () => 
 characters.filter((character) => 
    character.birth_year === "known");
module.exports = charactersWithKnownBirthDate;
