const characters = require("../data/characters.json");
const ships = require("../data/ships.json");
const FormatCharactersWithHomeSpeciesShips = require("../exercises/exercise_8");
const arraysEqual = require("../utils/equal");

const solution = () => {
  return characters.map((character) => {
    const characterShips = [];
    character.starships.forEach((ship) => {
      characterShips.push(ships.find((shipItem) => shipItem.url === ship).name);
    });

    return {
      name: character.name,
      starships: characterShips,
    };
  });
};

console.info(
  "Exercise 8 passed: ",
  arraysEqual(FormatCharactersWithHomeSpeciesShips(), solution())
);
