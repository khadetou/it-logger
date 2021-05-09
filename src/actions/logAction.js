import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOG} from './types';
import axios from 'axios';


//Get logs from server
export const getLogs = () => async dispatch =>{

    try {
        setLoading();
        const {data} = await axios.get('/logs');
        
        dispatch({
            type: GET_LOGS,
            preload: data
        })
    } catch (error) {
        dispatch({
            type:LOGS_ERROR,
            preload: error.response.data
        })
    }

}


//Add log 
export const addLogs = (log) => async dispatch =>{

    try {
        setLoading();
        const {data} = await axios.post('/logs', log);
        
        dispatch({
            type: ADD_LOGS,
            preload: data
        })
    } catch (error) {
        dispatch({
            type:LOGS_ERROR,
            preload: error.response.data
        })
    }

}

//Delete logs 
export const deleteLogs = (id) => async dispatch =>{

    try {
        setLoading();
        await axios.delete(`/logs/${id}`);
     
        dispatch({
            type: DELETE_LOG,
            preload: id
        })
    } catch (error) {
      
        dispatch({
            type:LOGS_ERROR,
            preload: error.response.data
        })
    }

}

//Update log

export const updateLogs = (log) => async dispatch =>{

    try {
        setLoading();
        const {data} = await axios.put(`/logs/${log.id}`, log);
     
        dispatch({
            type: UPDATE_LOG,
            preload: data
        })
    } catch (error) {
      
        dispatch({
            type:LOGS_ERROR,
            preload: error.response.data
        })
    }

}

//Set Current
export const setCurrent = (log)=>{
    return{
        type: SET_CURRENT,
        preload: log
    }
}


//Search log
export const searchLogs = (text) => async dispatch =>{

    try {
        setLoading();
        const {data} = await axios.get(`/logs?q=${text}`);
      
        dispatch({
            type: SEARCH_LOG,
            preload: data
        })
    } catch (error) {
        dispatch({
            type:LOGS_ERROR,
            preload: error.response.data
        })
    }

}

//Clear Current
export const clearCurrent = ()=>{
    return{
        type: CLEAR_CURRENT,
    }
}

//Set loading to true
export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}