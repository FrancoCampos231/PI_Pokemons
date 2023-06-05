const { Router} = require('express');
const {getPokemonName, getPokemonId, createPokemon} = require('../handler/pokemonHandlres')
//Ruta de los pokemons      
const routerP = Router();

// routerP.get('/', (req, res) => {
//     res.status(200).send('Todo ok')
// });

routerP.get('/', getPokemonName);

//params
routerP.get('/:id', getPokemonId);

//post
routerP.post('/', createPokemon);

module.exports = routerP;