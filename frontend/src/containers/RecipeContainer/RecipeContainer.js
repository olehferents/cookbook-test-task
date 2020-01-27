import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchRecipes, updateRecipe} from '../../actions/recipe';
import Recipe from '../../components/Recipe/Recipe';

const RecipeContainer = (props) => {
    useEffect(() => {
        props.fetchRecipes();
    }, []);

    return (
        <div>
            {props.recipes.map((recipe) => {
                return <Recipe
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    author={recipe.author}
                    editRecipe={props.editRecipe}
                    fetchRecipe={props.fetchRecipes}
                />
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipe.recipes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: bindActionCreators(fetchRecipes, dispatch),
        editRecipe: bindActionCreators(updateRecipe, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
