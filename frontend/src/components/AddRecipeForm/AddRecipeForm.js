import React from 'react';
import styles from './AddRecipeForm.module.css';

const AddRecipeForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createRecipe(
            e.target.elements.title.value,
            e.target.elements.description.value,
            e.target.elements.author.value
        ).then(() => {
            props.fetchRecipes();
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Enter data for new recipe:
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title"/>
                    <input type="text" name="description" placeholder="Description"/>
                    <input type="text" name="author" placeholder="Author"/>
                    <button type="submit" className={styles.submitBtn}>Add</button>
                </form>
            </div>
        </div>
    )
};

export default AddRecipeForm;
