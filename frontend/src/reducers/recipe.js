import {REQUEST_RECIPES_FAILED, REQUEST_RECIPES_SUCCEEDED} from '../actions/recipe';

const initialState = {
    recipes: [],
    error: ''
};

export const recipe = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_RECIPES_SUCCEEDED:
            return {
                ...state,
                recipes: action.payload
            };
        case REQUEST_RECIPES_FAILED:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
