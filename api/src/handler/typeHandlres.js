const { allType } = require('../controlers/typeControllers') 

//Tipos de pokemon
const getTypePokemon = async (req, res) => {
    try {
        const response = await allType();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
};

module.exports = {
    getTypePokemon,
};