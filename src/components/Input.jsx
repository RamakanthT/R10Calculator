import React from 'react';
import styles from './Input.module.css';

export const Input = (props) => (
    <div className={styles.input}>
        {props.input}
    </div>
);