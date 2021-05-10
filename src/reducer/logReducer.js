import {ADD_LOGS, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOG, SET_CURRENT, SET_LOADING, UPDATE_LOG} from '../actions/types';
const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default(state = initialState, action)=>{

    const {preload, type} = action;
    switch(type){
        case ADD_LOGS:
            return {
                ...state,
                logs: [...state.logs, preload],
                loading: false
            }

        case GET_LOGS:
            return{
                ...state,
                logs: preload,
                loading: false
            }

        case SET_CURRENT:
            return{
                ...state,
                current: preload
            }

        case UPDATE_LOG:
            return{
                ...state,
                logs: state.logs.map(log=>log.id === preload.id? preload:log)
            }
        
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
            }

        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log=>log.id !== preload),
                loading: false
            }

        case SEARCH_LOG:
            return {
                ...state,
                logs: preload
            }

        case LOGS_ERROR:
            console.error(preload)
            return{
                ...state,
                logs:preload
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