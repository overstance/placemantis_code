import React from 'react';
import styles from './buttons.module.scss';

const DialogueButton = props => {
    // let props.type = props.props.type;
    let score = props.thisScore;
    let userBest = props.userBestScore;

    let isUnpostableScore = userBest > score;

    let button =
    <button 
        className={styles.DialogueButton}
        onClick={props.buttonClicked}
    >
        {props.type}
    </button>

    if (props.warningButton) {
        button =
        <button 
            onClick={props.buttonClicked}
            className={styles.DialogueWarningButton}
        >
            {props.type}
        </button>
    }

    if (props.category === "dailogues") {
        if (props.isAuthenticated === false && props.type === 'Post Score') {
            button =
            <button
                disabled 
                className={styles.buttonDisabled}
            >
                {props.type}
            </button>
        } else if (props.isAuthenticated && props.type === 'Post Score' && isUnpostableScore) {
            button =
            <button
                disabled 
                className={styles.buttonDisabled}
            >
                Lower Score
            </button>
        } else if (props.isAuthenticated && props.type === 'Post Score' && props.sideEffectLoading) {
            button =
            <button
                disabled 
                className={styles.buttonDisabled}
            >
                <span>Loading...</span>
            </button>
        } else if (props.isAuthenticated && props.type === 'Post Score' && props.sideEffectSuccess) {
            button =
            <button
                disabled
                className={styles.buttonDisabled}
            >
                Score Posted
            </button>
        } else if (props.isAuthenticated && props.type === 'Post Score' && props.sideEffectFail) {
            button =
            <button
                className={styles.DialogueButton}
                onClick={props.buttonClicked}
            >
                <span>Failed!</span><span>Retry</span>
            </button>
        }

        if (props.isAuthenticated === false && props.type === 'Save and Exit') {
            button =
            <button
                disabled 
                className={styles.buttonDisabled}
            >
                {props.type}
            </button>
        } else if (props.isAuthenticated && props.type === 'Save and Exit' && props.sideEffectLoading) {
            button =
            <button
                disabled 
                className={styles.buttonDisabled}
            >
                <span>Loading...</span>
            </button>
        } else if (props.isAuthenticated && props.type === 'Save and Exit' && props.sideEffectSuccess) {
            button =
            <button
                disabled
                className={styles.buttonDisabled}
            >
                Saved
            </button>
        } else if (props.isAuthenticated && props.type === 'Save and Exit' && props.sideEffectFail) {
            button =
            <button
                className={styles.DialogueButton}
                onClick={props.buttonClicked}
            >
                <span>Failed!</span><span>Retry</span>
            </button>
        } 
    }
    
    if (props.category === "forms") {
        if (props.sideEffectLoading) {
            button =
            <button
                disabled 
                className={styles.buttonDisabled}
            >
                <span>Loading...</span>
            </button>
        } else if (props.sideEffectSuccess) {
            button =
            <button
                disabled
                className={styles.buttonDisabled}
            >
                {props.type}
            </button>
        } else if (props.sideEffectFail) {
            button =
            <button
                className={styles.DialogueButton}
                onClick={props.buttonClicked}
            >
                <span>Failed!</span>
            </button>
        } else if (props.inputValid === false) {
            button =
            <button
                disabled
                className={styles.buttonDisabled}
            >
                {props.type}
            </button>
        }
    }

    return(button)
}

export default DialogueButton;