import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, experience: []}, action) => {
    switch (action.type) {

        case ActionTypes.EXPERIENCE_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};
