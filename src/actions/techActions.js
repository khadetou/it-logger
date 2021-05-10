import {ADD_TECHS, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR} from './types';
import axios from 'axios';

//ADD techs
export const addTechs = (tech) => async dispatch=>{

    try {
        setLoading()
        const {data} =  await axios.post('/techs',tech);
        dispatch({
            type:   ADD_TECHS,
            preload: data
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            preload: error.response.data
        })
    }
}



//GET TECHS
export const getTechs = () => async dispatch=>{

    try {
        setLoading()
        const {data} =  await axios.get('/techs');
        
        dispatch({
            type: GET_TECHS,
            preload: data
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            preload: error.response.data
        })
    }
}


//Delete Techs 

export const deleteTechs = (id) => async dispatch=>{

    try {
        setLoading()
        await axios.delete(`/techs/${id}`);
        dispatch({
            type:   DELETE_TECH,
            preload: id
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            preload: error.response.data
        })
    }
}
//SET LOADING TO TRUE
export const setLoading = ()=>{
    return{
        type: SET_LOADING
    }
}