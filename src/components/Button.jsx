import React from 'react';
import styles from './Button.module.css';
//able to use styles only if css name is ****.module.css


const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
}

export const Button = (props) => {
    return (
        <div className={styles.button_wrapper ` ${isOperator(props.children) ? styles.empty : styles.operator}`}
            onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

// export default Button;
