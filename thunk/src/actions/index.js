

   
import axios from 'axios';

export const getPerson = ()=> {
    return (dispatch) => {
        // dispatch({type: FETCH_START});
        // dispatch({type: FETCH_ERROR, payload:"Test error"});
        // setTimeout(() =>{
        //     dispatch({type: FETCH_ERROR, payload:"Test error"});
        // }, 2000)

        dispatch({type: FETCH_START});
        axios.get('https://randomuser.me/api/')
            .then(resp=> {
            dispatch({type: FETCH_SUCCESS, payload: resp.data.results[0] });
        })
        .catch(err => {
            dispatch(fetchError(err));
        });

    }
}


export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:person});
}

export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}