const { createPokemonDB, getPokemonAll, getPokemonById } = require('../controlers/pokemonControllers')

//Handles de Pokemons
const getPokemonName = async (req, res) => {
    const {name} = req.query;
    try {
        if(name) {
            const response = await getPokemonAll(name);
            return res.status(200).json(response);
        }
    const response = await getPokemonAll();
    return res.status(202).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   
};

const getPokemonId = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await getPokemonById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
};

const createPokemon = async (req, res) => {
    const {name, image, hp, attack, special_attack, defends, special_defends, speed, height, weight, types} = req.body;
    try {
        const response = await (createPokemonDB(name, image, hp, attack, special_attack, defends, special_defends, speed, height, weight, types));
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});  
    }
    
}

module.exports = {
    getPokemonName,
    getPokemonId,
    createPokemon
};