export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload});
}