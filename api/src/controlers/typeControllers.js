const {Type} = require('../db');
const axios = require('axios')

const allType = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/type')
    const typesInDB = await Type.findAll();
    if (typesInDB.length === 0) {
    const createTypeDB = response.data.results.map(t => {
        Type.create({name : t.name})
    });
    }
    return typesInDB;
};

// const allType = async () => {
//     const response = await axios.get('https://pokeapi.co/api/v2/type');
    
//     // Verificar si la tabla Type está vacía
//     const typesInDB = await Type.findAll();
//     if (typesInDB.length === 0) {
//       const createTypeDB = response.data.results.map(async t => {
//         // Verificar si el tipo ya existe en la base de datos
//         const existingType = await Type.findOne({ where: { name: t.name } });
//         if (!existingType) {
//           // Crear el registro en la base de datos
//           await Type.create({ name: t.name });
//         }
//       });
//     }
    
//     // Devolver todos los registros de la tabla Type
//     const allTypes = await Type.findAll();
//     return allTypes;
//   };



module.exports = {
    allType,
}