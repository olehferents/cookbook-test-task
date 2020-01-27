export const REQUEST_RECIPES_SUCCEEDED = 'REQUEST_RECIPES';
export const REQUEST_RECIPES_FAILED = 'REQUEST_RECIPES_FAILED';

export const fetchRecipes = () => {
    return async dispatch => {
        try {
            let response =
                await fetch('recipes', {
                    method: 'GET',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': '*',
                    }
                });
            response = await response.json();
            await dispatch(successHandler(response));
            return response;
        } catch (error) {
            return dispatch(errorHandler(error))
        }
    };

    function successHandler(response){
        return {
            type: REQUEST_RECIPES_SUCCEEDED,
            payload: response
        }
    }

    function errorHandler(response) {
        return {
            type: REQUEST_RECIPES_FAILED,
            payload: response
        }
    }
};

