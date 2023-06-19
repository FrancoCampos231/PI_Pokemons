import { GET_POKEMON } from "../actions/type";

let initialState = {
    allPokemons: []
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_POKEMON: 
            return {
                ...state,
                allPokemons: action.payload,
            }
        default:
            return state;
    }
};

export default reducer