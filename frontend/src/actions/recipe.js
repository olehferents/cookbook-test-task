import {API_URL} from '../helpers/constants';

export const REQUEST_RECIPES_SUCCEEDED = 'REQUEST_RECIPES';
export const REQUEST_RECIPES_FAILED = 'REQUEST_RECIPES_FAILED';

export const CREATE_RECIPE_SUCCEEDED = 'CREATE_RECIPE_SUCCEEDED';
export const CREATE_RECIPE_FAILED = 'CREATE_RECIPE_FAILED';

export const UPDATE_RECIPE_SUCCEEDED = 'UPDATE_RECIPE_SUCCEEDED';
export const UPDATE_RECIPE_FAILED = 'UPDATE_RECIPE_FAILED';

function successHandler(type, response) {
    return {
        type: type,
        payload: response
    }
}

function errorHandler(type, response) {
    return {
        type: type,
        payload: response
    }
}

export const fetchRecipes = () => {
    return async dispatch => {
        try {
            let response =
                await fetch(API_URL + 'recipes', {
                    method: 'GET',
                });
            response = await response.json();
            await dispatch(successHandler(REQUEST_RECIPES_SUCCEEDED, response));
            return response;
        } catch (error) {
            return dispatch(errorHandler(REQUEST_RECIPES_FAILED, error))
        }
    };
};

export const createRecipe = (title, description, author) => {
    return async dispatch => {
        try {
            let response =
                await fetch( API_URL + 'recipes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        author: author
                    })
                });
            response = await response.json();
            await dispatch(successHandler(CREATE_RECIPE_SUCCEEDED, response));
            return response;
        } catch (error) {
            return dispatch(errorHandler(CREATE_RECIPE_FAILED, error))
        }
    }
};

export const updateRecipe = (id, title, description, author) => {
    return async dispatch => {
        try {
            let response =
                await fetch(API_URL + 'recipes' + '/' + id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        author: author
                    })
                });
            response = await response.json();
            await dispatch(successHandler(UPDATE_RECIPE_SUCCEEDED, response));
            return response;
        } catch (error) {
            return dispatch(errorHandler(UPDATE_RECIPE_FAILED, error));
        }
    }
};
