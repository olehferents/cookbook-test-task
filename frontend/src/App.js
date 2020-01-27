import React from 'react';
import RecipeContainer from './containers/RecipeContainer/RecipeContainer';
import AddRecipeContainer from './containers/AddRecipeFormContainer/AddRecipeContainer';

const App = () => {
    return (
        <div>
            <AddRecipeContainer/>
            <RecipeContainer/>
        </div>
    )
};

export default App;
