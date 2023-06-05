//Handles de Pokemons
const getPokemonName = (req, res) => {
    const {name} = req.query;
    if(name) {
        return res.status(200).send(`El pokemon ${name} ha sido encontrado`)
    }
    res.status(201).send('Todos los pokemons')
};

const getPokemonId = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`este numero es ${id}`)
};

const createPokemon = (req, res) => {
    const {name} = req.body;
    res.status(200).send(`Pokemon ${name} creado correctamente`);
}

module.exports = {
    getPokemonName,
    getPokemonId,
    createPokemon
};