const characters = require("../data/characters.json");

/* TODO: return one character with an "unknown" birth year  */

const findCharacterUnknownBirthDate = () =>
  characters.find((c) => c.birth_year === "unknown");
module.exports = findCharacterUnknownBirthDate;
