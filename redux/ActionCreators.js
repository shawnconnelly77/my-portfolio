import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import thunk from 'redux-thunk';

export const fetchExperience = () => dispatch => {
    return fetch(baseUrl + 'experience')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .catch(error => dispatch(experienceFailed(error.message)));
};

export const experienceFailed = errMess => ({
    type: ActionTypes.EXPERIENCE_FAILED,
    payload: errMess
});

