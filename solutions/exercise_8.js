const characters = require("../data/characters.json");
const planets = require("../data/planets.json");
const ships = require("../data/ships.json");
const species = require("../data/species.json");
const FormatCharactersWithHomeSpeciesShips = require("../exercises/exercise_8");

// return all characters,
// but keep only the following fields:
/*
 * name
 * homeworld
 * species
 * starships
 */

// In each field, save only the name!
// If there is an array (for example, with starships)
// then save all names in an array of strings

/*
  The result should be of the following structure:
  [
      {
    name: 'Jek Tono Porkins',
    homeworld: 'Bestine IV',
    species: [],
    starships: [ 'X-wing' ]
  },
  {
    name: 'Yoda',
    homeworld: 'unknown',
    species: [ "Yoda's species" ],
    starships: []
  },
  ]
*/

const solution = () => {
  return characters.map((character) => {
    const homeworld = planets.find(
      (planet) => planet.url === character.homeworld
    );
    const characterSpecies = [];
    character.species.forEach((singleSpecies) => {
      characterSpecies.push(
        species.find((speciesItem) => speciesItem.url === singleSpecies).name
      );
    });

    const characterShips = [];
    character.starships.forEach((ship) => {
      characterShips.push(ships.find((shipItem) => shipItem.url === ship).name);
    });

    return {
      name: character.name,
      homeworld: homeworld.name,
      species: characterSpecies,
      starships: characterShips,
    };
  });
};

console.info(
  "Exercise 8 passed: ",
  JSON.stringify(FormatCharactersWithHomeSpeciesShips()) ===
    JSON.stringify(solution())
);
