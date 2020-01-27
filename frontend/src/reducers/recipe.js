import {
    CREATE_RECIPE_FAILED,
    CREATE_RECIPE_SUCCEEDED,
    REQUEST_RECIPES_FAILED,
    REQUEST_RECIPES_SUCCEEDED
} from '../actions/recipe';

const initialState = {
    recipes: [],
    error: '',
    response: {}
};

export const recipe = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_RECIPES_SUCCEEDED:
            return {
                ...state,
                recipes: action.payload,
            };
        case REQUEST_RECIPES_FAILED:
            return {
                ...state,
                error: action.payload
            };
        case CREATE_RECIPE_SUCCEEDED:
            return {
                ...state,
                response: action.payload
            };
        case CREATE_RECIPE_FAILED:
            return {
                ...state,
                response: action.payload
            };
        default:
            return state;
    }
};
