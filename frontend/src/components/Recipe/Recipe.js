import React from 'react';
import styles from './Recipe.module.css';

const Recipe = (props) => {
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
            </div>
        </div>
    )
};

export default Recipe;
