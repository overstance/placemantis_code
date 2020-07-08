import React from 'react';
import styles from './buttons.module.scss';

const DialogueButton = props => {

    let button =
    <button 
        className={styles.DialogueButton}
        onClick={props.buttonClicked}
    >
        {props.children}
    </button>

    if (props.warningButton) {
        button =
        <button 
            onClick={props.buttonClicked}
            className={styles.DialogueWarningButton}
        >
            {props.children}
        </button>
    }
    return(button)
}

export default DialogueButton;