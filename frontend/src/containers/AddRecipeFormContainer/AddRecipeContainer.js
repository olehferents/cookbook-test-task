import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createRecipe, fetchRecipes} from '../../actions/recipe';
import AddRecipeForm from '../../components/AddRecipeForm/AddRecipeForm';

const AddRecipeContainer = (props) => {
    return (
        <div>
            <AddRecipeForm
                payload={props.payload}
                createRecipe={props.createRecipe}
                fetchRecipes={props.fetchRecipes}
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        payload: state.recipe.response
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createRecipe: bindActionCreators(createRecipe, dispatch),
        fetchRecipes: bindActionCreators(fetchRecipes, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeContainer);
