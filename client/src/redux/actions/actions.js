import axios from 'axios'
import { GET_POKEMON } from "./type";

export const getPokemons = () => {
   return async (dispatch) => {
            const response = await axios('http://localhost:3001/pokemon')
            

            return dispatch({
                type: GET_POKEMON,
                payload: response.data,
            });
   };
};