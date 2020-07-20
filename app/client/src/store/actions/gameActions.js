// import axios from 'axios';
import * as actionTypes from './actionTypes';

// HOME TRIGGERED ACTIONS
export const setGameData = (gameData) => {
    return {
        type: actionTypes.SET_GAME_DATA,
        gameData: gameData
    }
}

/* // LEVELS DIALOGUE TRIGGERED ACTIONS
export const setGameLevel = (levelNumber, levelStage) => {
    return {
        type: actionTypes.SET_GAME_LEVEL,
        number: levelNumber,
        stage: levelStage
    }
} */

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
export const levelsDailogueTimerEnd = (level, stage) => {
    return {
        type: actionTypes.LEVELS_DIALOGUE_TIMER_END,
        level: level,
        stage: stage
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

export const prePlayerTimerEnd = () => {
    return {
        type: actionTypes.PRE_PLAYER_TIMER_END
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

export const restartLastMission = () => {
    return {
        type: actionTypes.RESTART_LAST_MISSION,
    }
}

export const restartMultilevelMission = () => {
    return {
        type: actionTypes.RESTART_MULTILEVEL_MISSION,
    }
}

// GAME-PLAY [PLAYER] TRIGGERED ACTIONS

export const playerRoundOver = () => {
    return {
        type: actionTypes.PLAYER_ROUND_OVER
    }
}

export const levelOver = (levelRounds, completedLevelRounds, lifeCount, totalRoundsPlayed, levelScore, totalRoundsCompleted, totalScore) => {
    return {
        type: actionTypes.LEVEL_OVER,
        totalRoundsPlayed: totalRoundsPlayed,
        levelScore: levelScore,
        totalRoundsCompleted: totalRoundsCompleted,
        totalScore: totalScore,
        levelRounds: levelRounds,
        completedLevelRounds: completedLevelRounds,
        lifeCount: lifeCount
    }
}

export const multilevelGameOver = (totalRoundsPlayed, levelScore, totalRoundsCompleted, totalScore, gameEndReport, playedDifficulty) => {
    return {
        type: actionTypes.MULTILEVEL_GAME_OVER,
        totalRoundsPlayed: totalRoundsPlayed,
        levelScore: levelScore,
        totalRoundsCompleted: totalRoundsCompleted,
        totalScore: totalScore,
        report: gameEndReport,
        difficulty: playedDifficulty
    }
}

export const singleGameOver = (totalRounds, completedRounds, totalScore, gameEndReport, playedStage, playedDifficulty) => {
    return {
        type: actionTypes.SINGLE_GAME_OVER,
        totalStageRounds: totalRounds,
        completedStageRounds: completedRounds,
        totalScore: totalScore,
        report: gameEndReport,
        stage: playedStage,
        difficulty: playedDifficulty
    }
}

export const startNextLevel = () => {
    return {
        type: actionTypes.START_NEXT_LEVEL
    }
}

// SCREENTRACKER INITIATED ACTIONS

export const screenTrackerActiveOrInactive = (trueOrFalse) => {
    return {
        type: actionTypes.SCREEN_TRACKER_ACTIVE_OR_INACTIVE,
        trueOrFalse: trueOrFalse
    }
}