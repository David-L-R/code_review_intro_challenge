const characters = require("../data/characters.json");
const planets = require("../data/planets.json");
// return all characters,
// but keep only the following fields:
/*
 * name
 * homeworld
 */

// instead of the link inside "homeworld"
// find the relevant object of the planet
// inside the planets array (see above)

const charactersWithHomeWorld = () => {
  //  YOUR CODE HERE
  return characters.map((character) => {
    const homeworld = planets.find(
      (planet) => planet.url === character.homeworld
    );

    return {
      name: character.name,
      homeworld: homeworld.name,
    };
  });
};

console.log(charactersWithHomeWorld());

module.exports = charactersWithHomeWorld;
