import React from 'react';
import styles from './ClearButton.module.css';

export const ClearButton = (props) => (
    <div className={styles.clear_btn} onClick={props.handleClear}>
        {props.children}
    </div>
);