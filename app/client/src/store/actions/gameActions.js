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

// affirm roundTimerElapsed global state
export const playerRoundTimerEnd = () => {
    return {
        type: actionTypes.PLAYER_ROUND_TIMER_END
    }
}

// affirm timerAlmostUp global state 
export const roundTimerAlmostUp = () => {
    return {
        type: actionTypes.ROUND_TIMER_ALMOST_UP
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

// PLAYER TRIGGERED ACTIONS

export const playerRoundOver = () => {
    return {
        type: actionTypes.PLAYER_ROUND_OVER
    }
}

export const singleGameOver = (totalRounds, nextRound, totalScore, gameEndReport) => {
    return {
        type: actionTypes.SINGLE_GAME_OVER,
        totalStageRounds: totalRounds,
        completedStageRounds: nextRound,
        totalScore: totalScore,
        report: gameEndReport
    }
}
