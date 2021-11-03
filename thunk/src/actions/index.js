

export const getPerson = ()=> {
    return (dispatch) => {
        dispatch({type:FETCH_START});
        setTimeout(()=> {
            dispatch({type:FETCH_ERROR, payload:"Test erorr!!"});
        }, 2000);
        
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

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}