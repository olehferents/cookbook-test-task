import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe';
import Recipe from '../../components/Recipe/Recipe';

const RecipeContainer = (props) => {
    useEffect(() => {
        props.fetchRecipes();
    }, []);

    return (
        <div>
            {props.recipes.map((recipe) => {
                return <Recipe
                    title={recipe.title}
                    description={recipe.description}
                    author={recipe.author}
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
        fetchRecipes: bindActionCreators(fetchRecipes, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
