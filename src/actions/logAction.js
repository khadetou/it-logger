import axios from 'axios';
import {ADD_LOGS, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOG, SET_CURRENT, SET_LOADING, UPDATE_LOG} from './types';

//ADD LOGS
export const addLogs = (log)=>async dispatch=>{
    try{
        setLoading();
        const {data} = await axios.post('/logs',log);
        dispatch({
            type:  ADD_LOGS, 
            prelaod: data
        })
    }catch(error){
        dispatch({
            type: LOGS_ERROR,
            prelaod: error.response
        })
    }
}

const func = async ()=>{
    const {data} = await axios.get('/logs');
    console.log(data)
}


//GET LOGS
export const getLogs = () => async dispatch=>{
    try{
        setLoading();
        const {data} = await axios.get('/logs');
        console.log(data)
        
        dispatch({
            type:  GET_LOGS, 
            prelaod: data
        })
    }catch(error){
        dispatch({
            type: LOGS_ERROR,
            prelaod: error.response.data
        })
    }
}

// //SET CURRENT 
// export const setCurrent = (log)=>{
//     return{
//         type: SET_CURRENT,
//         prelaod: log
//     }
// }

// //UPDATE LOGS
// export const updateLogs = (log)=>async dispatch=>{
//     try{
//         setLoading();
//         const {data} = await axios.put(`/logs/${log.id}`,log);
//         dispatch({
//             type:  UPDATE_LOG, 
//             prelaod: data
//         })
//     }catch(error){
//         dispatch({
//             type: LOGS_ERROR,
//             prelaod: error.response.data
//         })
//     }
// }

// //CLEAR CURRENT
// export const clearCurrent = ()=>{
//     return{
//         type: CLEAR_CURRENT
//     }
// }

// //DELETE CURRENT 
// export const deleteLogs = (id)=>async dispatch=>{
//     try{
//         setLoading();
//          await axios.delete(`/logs/${id}`);
//         dispatch({
//             type:  DELETE_LOG, 
//             prelaod: id
//         })
//     }catch(error){
//         dispatch({
//             type: LOGS_ERROR,
//             prelaod: error.response.data
//         })
//     }
// }


// //SEARCH LOG
// export const searchLogs = (text)=>async dispatch=>{
//     try{
//         setLoading();
//         const {data}= await axios.delete(`/logs?q=${text}`);
//         dispatch({
//             type:  SEARCH_LOG, 
//             prelaod: data
//         })
//     }catch(error){
//         dispatch({
//             type: LOGS_ERROR,
//             prelaod: error.response.data
//         })
//     }
// }

//Set Loading to true
export const setLoading = ()=>{
    return{
        type: SET_LOADING
    }
}