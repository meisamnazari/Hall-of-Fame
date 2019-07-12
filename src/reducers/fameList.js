import {GET_FAMELIST_ERROR, GET_FAMELIST_REUQEST, GET_FAMELIST_SUCCESS} from '../actions/constants';

const initialState = {
    data: null,
    loading: true,
    error: false,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FAMELIST_REUQEST:
            return {...state, loading: true, data: null, error: false}
        case GET_FAMELIST_SUCCESS:
            return {...state, loading: false, data: action.payload, error: false}
        case GET_FAMELIST_ERROR:
            return {...state, loading: false, data: null, error: true}
        default:
            return state;

    }
}