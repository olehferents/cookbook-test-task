import React, {useState} from 'react';
import styles from './Recipe.module.css';

const Recipe = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [recipe, setRecipe] = useState({...props});

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleValueChange = (e) => {
        setRecipe({...recipe, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        props.editRecipe(
            recipe.id,
            recipe.title,
            recipe.description,
            recipe.author
        ).then(() => {
            props.fetchRecipe();
        });
    };

    if (isEditing) {
        return (
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.header}>
                        <input type="text" name="title" value={recipe.title} onChange={handleValueChange}/>
                    </div>
                    <div className={styles.main}>
                        <input type="text" name="description" value={recipe.description} onChange={handleValueChange}/>
                    </div>
                    <div className={styles.footer}>
                        <input type="text" name="author" value={recipe.author} onChange={handleValueChange}/>
                    </div>
                    <div className={styles.btnBlock}>
                        <button
                            className={styles.toggleBtn}
                            onClick={toggleEdit}>Edit mode</button>
                        <button
                            className={styles.toggleBtn}
                            onClick={handleSubmit}>Submit edit</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.header}>
                    {props.title}
                </div>
                <div className={styles.main}>
                    {props.description}
                </div>
                <div className={styles.footer}>
                    {props.author}
                </div>
                <div className={styles.btnBlock}>
                    <button
                        className={styles.toggleBtn}
                        onClick={toggleEdit}>Edit mode</button>
                </div>
            </div>
        </div>
    )
};

export default Recipe;
