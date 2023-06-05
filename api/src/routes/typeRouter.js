const {Router} = require('express');
const { getTypePokemon } = require('../handler/typeHandlres');
//Ruta de los typos de pokemons
const routerT = Router();

routerT.get('/', getTypePokemon);

module.exports = routerT;