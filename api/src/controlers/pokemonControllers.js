const {Op} = require('sequelize');
const {Pokemon} = require('../db');
const axios = require('axios');

const createPokemonDB = async (name, image, hp, attack, special_attack, defends, special_defends, speed, height, weight) => {
    const newPokemon = await Pokemon.create({name, image, hp, attack, special_attack, defends, special_defends, speed, height, weight});
    return newPokemon;
};

// const getPokemonNameDB = async (name) => {
//     if(name) {
//         const pokemonDB = await Pokemon.findAll({ 
//             where: { 
//                 name : {[Op.iLike] : `%${name}%`},
//             }
//         });
//         return pokemonDB;
//     }
//     const allPokemon = await Pokemon.findAll();
//     return allPokemon; 
// };


//Trameos pokemons de la BD
const getPokemonBD = async () => {
    const allPokemonDB = await Pokemon.findAll();
    return allPokemonDB
};

//Traemos pokemon de la Api
const getPokemonApi = async () => {
    const getpokemon= (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')).data.results;
    const allPokemonApi = getpokemon.map(pokemon => {
            return {
                    url : pokemon.url,
        }
    });

    //Usamos la url que trajimos de cada pokemon para poder ver lo que tiene cada pokemon y traernos todos sus datos;
    const response = await Promise.all(allPokemonApi.map(async (poke) => {
        const onePokemon = (await axios.get(poke.url)).data;

        const pokemon = {
            id : onePokemon.id,
            name: onePokemon.name,
            image: onePokemon.sprites.other['official-artwork']['front_default'],
            hp: onePokemon.stats[0].base_stat,
            attack: onePokemon.stats[1].base_stat,
            defends : onePokemon.stats[2].base_stat,
            special_attack: onePokemon.stats[3].base_stat,
            special_defends: onePokemon.stats[4].base_stat,
            speed: onePokemon.stats[5].base_stat,
            height: onePokemon.height,
            weight: onePokemon.weight,
            types: onePokemon.types.map((element) => element.type.name)
        }
        return pokemon;
    }))
    return response;
};

const getPokemonAll = async (name) => {
    const pokemonDB = await getPokemonBD();
    const pokemonApi = await getPokemonApi();

    const allPokemons =  [...pokemonDB,...pokemonApi];
    if (name) {
        const filterPoke = allPokemons.filter((poke) => poke.name.toLowerCase().includes(name.toLowerCase()));
        return filterPoke;
    } else {
        return allPokemons
    }
}


const getPokemonById = async (id) => {
    if(isNaN(id)) {
        const pokemon = await Pokemon.findByPk(id);

        const pokemonDetailDB = {
            id : pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defends : pokemon.defends,
            special_attack: pokemon.special_attack,
            special_defends: pokemon.special_defends,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight
        }
    

        return pokemonDetailDB;
    };
    const pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;

    const pokemonDetailApi = {
        id : pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defends : pokemon.stats[2].base_stat,
        special_attack: pokemon.stats[3].base_stat,
        special_defends: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((element) => element.type.name)
    }

    return pokemonDetailApi;
};

module.exports = {
    createPokemonDB,
    getPokemonBD,
    getPokemonApi,
    getPokemonById,
    getPokemonAll
};