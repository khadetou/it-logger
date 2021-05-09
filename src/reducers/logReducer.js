import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOG} from '../actions/types';


const initialState ={
    logs: null,
    current: null,
    loading: false,
    error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action)=>{
    const {preload, type} = action;

    switch(type){
        case GET_LOGS:
            return{
                ...state,
                logs: preload
            }

        case ADD_LOGS:
            return{
                ...state,
                logs: [...state.logs, preload],
                loading: false
            }

        case UPDATE_LOG:
            return{
                ...state,
                logs: state.logs.map(log=>log.id === preload.id ? preload: log)
            }

        case SEARCH_LOG:
            return{
                ...state,
                logs:preload
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== preload),
                loading: false
            }

        case SET_CURRENT:
            return{
                ...state,
                current: preload
            }

        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
            }

        case SET_LOADING:
        return {
            ...state,
            loading: true
        };

        case LOGS_ERROR:
            console.error(preload);
            return {
                ...state,
                error: preload
            }

        default:
            return state;
    }
}