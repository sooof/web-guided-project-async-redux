
export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:person});
}

export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}

export const getPerson = () => {
    return (dispatch) => {
        dispatch({type: FETCH_START})
        props.fetchStart();
        axios.get('https://randomuser.me/api/')
          .then(resp => {
            // console.log("3", resp.data.results)
            // console.log("3",resp.data.results[0])
            // props.fetchSuccess(resp.data.results[0])
            dispatch({type: FETCH_SUCCESS, payload: resp.data.results[0]})
          })
          .catch( err => {
            console.log(err)
            dispatch({type: FETCH_ERROR, payload: err })
            // props.fetchError(err)
          })
    }
}