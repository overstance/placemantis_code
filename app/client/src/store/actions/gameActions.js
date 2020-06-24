// import axios from 'axios';
import * as actionTypes from './actionTypes';

// HOME TRIGGERED ACTIONS
export const setGameData = (gameData) => {
    return {
        type: actionTypes.SET_GAME_DATA,
        gameData: gameData
    }
}

// MODERATOR TRIGGERED ACTIONS
export const showLevelsDialogue = () => {
    return {
        type: actionTypes.SHOW_LEVELS_DIALOGUE
    }
}

export const showTypeDialogue = () => {
    return {
        type: actionTypes.SHOW_TYPE_DIALOGUE
    }
}

// TIMER TRIGGERED ACTIONS

// close gametype dailogue and moderator
export const singleTypeTimerEnd = () => {
    return {
        type: actionTypes.SINGLE_TYPE_TIMER_END
    }
}

// close gametype dailogue and show levels dialogue
export const multilevelTypeTimerEnd = () => {
    return {
        type: actionTypes.MULTILEVEL_TYPE_TIMER_END
    }
}

// GAMEPLAY TRIGGERED ACTIONS

// reset game state
export const resetGameState = () => {
    return {
        type: actionTypes.RESET_GAME_STATE
    }
}
