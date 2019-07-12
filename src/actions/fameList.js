import {fameUrl} from '../services';
import api from '../api';
import {GET_FAMELIST_ERROR, GET_FAMELIST_REUQEST, GET_FAMELIST_SUCCESS} from "./constants";

export const getFameList = () => {
    return async (dispatch) => {
        dispatch({type: GET_FAMELIST_REUQEST});
        const response = await api.get(fameUrl);
        if (response.ok) {
            return dispatch({type: GET_FAMELIST_SUCCESS, payload: response.data})
        }
        dispatch({type: GET_FAMELIST_ERROR})

    }
};
