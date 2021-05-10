import {ADD_TECHS, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR} from '../actions/types';
const initaleState = {
    techs: null,
    loading: false,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initaleState, action)=>{
    
    const {preload, type} = action;

    switch(type){
        
        case ADD_TECHS:
            return {
                ...state,
                techs:[...state.techs, preload],
                loading: false
            }

        case GET_TECHS:
                return {
                    ...state,
                    techs: preload,
                    loading: false
                }

        case DELETE_TECH:
            return{
                ...state,
                techs: state.techs.filter(tech =>tech.id !== preload),
                loading: false
            }
        
        case TECHS_ERROR:
            console.error(preload)
            return{
                ...state,
                error: preload
            }

        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }


}