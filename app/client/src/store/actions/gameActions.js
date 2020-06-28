// import axios from 'axios';
import * as actionTypes from './actionTypes';

// HOME TRIGGERED ACTIONS
export const setGameData = (gameData) => {
    return {
        type: actionTypes.SET_GAME_DATA,
        gameData: gameData
    }
}

// LEVELS DIALOGUE TRIGGERED ACTIONS
export const setGameLevel = (levelNumber, levelStage) => {
    return {
        type: actionTypes.SET_GAME_LEVEL,
        number: levelNumber,
        stage: levelStage
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

// close levels dailogue and moderator and show player
export const levelsDailogueTimerEnd = () => {
    return {
        type: actionTypes.LEVELS_DIALOGUE_TIMER_END
    }
}

// GAMEPLAY TRIGGERED ACTIONS

export const showLevelsDialogue = () => {
    return {
        type: actionTypes.SHOW_LEVELS_DIALOGUE
    }
}

export const showTypeDialogue = (stagesShuffled) => {
    return {
        type: actionTypes.SHOW_TYPE_DIALOGUE,
        stages: stagesShuffled
    }
}

export const resetGameState = () => {
    return {
        type: actionTypes.RESET_GAME_STATE
    }
}
