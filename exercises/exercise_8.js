const characters = require("../data/characters.json");
const planets = require("../data/planets.json");
const ships = require("../data/ships.json");
const species = require("../data/species.json");

// TODO: return all characters,
// but keep only the following fields:
/*
 * name
 * starships
 */

// In each field, save only the name!
// If there is an array (for example, with starships)
// then save all names in an array of strings

/*
  The result should be of the following structure:
  [
      { 
        name: 'Wicket Systri Warrick', 
        starships: [] 
      },
      { 
        name: 'Nien Nunb', 
        starships: [ 'Millennium Falcon' ] 
      },
  ]
*/

const FormatCharactersWithHomeSpeciesShips = () => {
  // YOUR CODE HERE
};

module.exports = FormatCharactersWithHomeSpeciesShips;
