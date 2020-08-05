import * as actionTypes from '../actions/actionTypes';

const initialState = {
    gameData: {
        type: null,
        scope: null,
        stage: null,
        difficulty: null,
        savedMission: null
    },

    showModerator: true,
    showPlayer: false,
    showFelicitator: false,

    showGameTypeDialogue: false,
    showGameLevelsDialogue: false,
    showLevelOverDialogue: false,
    showGameOverDialogue: false,
   
    singleGameActive: false,
    multilevelGameActive: false,
    resumedMultilevelGame: false,

    totalStageRounds: 0,
    stageRoundsCompleted: 0,
    totalGameScore: 0,
    gameStatus: 'off',

    playedType: null,
    playedStage: null,
    playedDifficulty: null,
    gameOver: false,
    gameEndReport: null, 
    rankingTaskCleared: false,

    roundTimerElapsed: false,
    timerAlmostUp: false,

    level: 0,
    levelScore: 0,
    levelStage: null,
    totalMultilevelRounds: 0,
    completedMultilevelRounds: 0,
    levelRounds: 0,
    completedLevelRounds: 0,
    lifeCount: 4,
    
    shuffledStages: [],

    screenTrackerActive: false,

    prePlayerTimerEnded: false
}

const setGameData = (state, action) => {
    return {
        ...state,
        gameData: action.gameData
    }
};

const showLevelsDialogue = (state, action) => {
    return {
        ...state,
        showGameLevelsDialogue: true
    }
};

const showTypeDialogue = (state, action) => {
    return {
        ...state,
        showGameTypeDialogue: true,
        shuffledStages: action.stages
    }
};

const singleTypeTimerEnd = (state, action) => {
    return {
        ...state,
        showGameTypeDialogue: false,
        showModerator: false,
        showPlayer: true, 
        singleGameActive: true      
    }

}

const multilevelTypeTimerEnd = (state, action) => {
    return {
        ...state,
        showGameTypeDialogue: false,
        showGameLevelsDialogue: true
    }
}

const levelsDialogueTimerEnd = (state, action) => {
    return {
        ...state,
        showGameLevelsDialogue: false,
        showModerator: false,
        showPlayer: true,
        multilevelGameActive: true,
        levelStage: action.stage,
        level: action.level
    }

}

const playerRoundTimerEnd = (state, action) => {
    return {
        ...state,
        roundTimerElapsed: true
    }
}

const roundTimerAlmostUp = (state, action) => {
    return {
        ...state,
        timerAlmostUp: true
    }

}

const playerRoundOver = (state, action) => {
    return {
        ...state,
        roundTimerElapsed: false,
        timerAlmostUp: false,
        gameStatus: 'On',
    }
}

const singleGameOver = (state, action) => {
    return {
        ...state,
        roundTimerElapsed: false,
        timerAlmostUp: false,
        showPlayer: false,
        singleGameActive: false,
        totalStageRounds: action.totalStageRounds,
        stageRoundsCompleted: action.completedStageRounds,
        totalGameScore: action.totalScore,
        gameStatus: 'Off',
        gameOver: true,
        gameEndReport: action.report,
        playedType: "Single",
        playedStage: action.stage,
        playedDifficulty: action.difficulty,
        showModerator: true,
        showGameOverDialogue: true,
        prePlayerTimerEnded: false
    }
}

const levelOver = (state, action) => {
    return {
        ...state,
        roundTimerElapsed: false,
        timerAlmostUp: false,
        showPlayer: false,
        totalMultilevelRounds: action.totalRoundsPlayed,
        completedMultilevelRounds: action.totalRoundsCompleted,
        levelScore: action.levelScore,
        totalGameScore: action.totalScore,
        gameStatus: 'On',
        gameOver: false,
        showModerator: true,
        showLevelOverDialogue: true,
        prePlayerTimerEnded: false,
        levelRounds: action.levelRounds,
        completedLevelRounds: action.completedLevelRounds,
        lifeCount: action.lifeCount
    }
}

const startNextLevel = (state, action) => {
    return {
        ...state,
       showLevelOverDialogue: false,
       showGameLevelsDialogue: true
    }
}

const multilevelGameOver = (state, action) => {
    return {
        ...state,
        roundTimerElapsed: false,
        timerAlmostUp: false,
        showPlayer: false,
        singleGameActive: false,
        totalMultilevelRounds: action.totalRoundsPlayed,
        completedMultilevelRounds: action.totalRoundsCompleted,
        levelScore: action.levelScore,
        totalGameScore: action.totalScore,
        gameStatus: 'Off',
        gameOver: true,
        gameEndReport: action.report,
        playedType: "Multilevel",
        playedDifficulty: action.difficulty,
        showModerator: true,
        showGameOverDialogue: true,
        prePlayerTimerEnded: false
    }
}


const resetGameState = (state, action) => {
    return {
        ...state,
        gameData: {
            type: null,
            scope: null,
            stage: null,
            difficulty: null,
            savedMission: null
        },
    
        showModerator: true,
        showPlayer: false,
        showFelicitator: false,
    
        showGameTypeDialogue: false,
        showGameLevelsDialogue: false,
        showLevelOverDialogue: false,
        showGameOverDialogue: false,
       
        singleGameActive: false,
        multilevelGameActive: false,
        resumedMultilevelGame: false,
    
        totalStageRounds: 0,
        stageRoundsCompleted: 0,
        totalGameScore: 0,
        gameStatus: 'off',
    
        playedType: null,
        playedStage: null,
        playedDifficulty: null,
        gameOver: false,
        gameEndReport: null, 
        rankingTaskCleared: false,
    
        roundTimerElapsed: false,
        timerAlmostUp: false,
    
        level: 0,
        levelScore: 0,
        levelStage: null,
        totalMultilevelRounds: 0,
        completedMultilevelRounds: 0,
        levelRounds: 0,
        completedLevelRounds: 0,
        lifeCount: 0,
        
        shuffledStages: [],
    
        screenTrackerActive: false,
    
        prePlayerTimerEnded: false
    }
}

const screenTrackerActiveOrInactive = (state, action) => {
    return {
        ...state,
        screenTrackerActive: action.trueOrFalse
    }
}

const prePlayerTimerEnd = (state, action) => {
    return {
        ...state,
        prePlayerTimerEnded: true
    }
}

const restartLastMission = (state, action) => {
    return {
        ...state,
        singleGameActive: false,
        multilevelGameActive: false,
        resumedMultilevelGame: false,

        totalStageRounds: 0,
        stageRoundsCompleted: 0,
        totalGameScore: 0,
        gameStatus: 'off',

        playedType: null,
        playedStage: null,
        playedDifficulty: null,
        gameOver: false,
        gameEndReport: null, 
        rankingTaskCleared: false,

        roundTimerElapsed: false,
        timerAlmostUp: false,

        showModerator: false,
        showFelicitator: false,
        showPlayer: true,
    }
}

const restartMultilevelMission = (state, action) => {
    return {
        ...state,
        singleGameActive: false,
        multilevelGameActive: false,
        resumedMultilevelGame: false,

        totalStageRounds: 0,
        stageRoundsCompleted: 0,
        totalGameScore: 0,
        gameStatus: 'off',

        playedType: null,
        playedStage: null,
        playedDifficulty: null,
        gameOver: false,
        gameEndReport: null, 
        rankingTaskCleared: false,

        roundTimerElapsed: false,
        timerAlmostUp: false,
        
        
        level: 0,
        levelScore: 0,
        levelStage: null,
        totalMultilevelRounds: 0,
        completedMultilevelRounds: 0,
        levelRounds: 0,
        completedLevelRounds: 0,
        lifeCount: 0,

        showModerator: true,
        showGameLevelsDialogue: true,
        showGameOverDialogue: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAME_DATA: 
            return setGameData(state, action);
        case actionTypes.SHOW_LEVELS_DIALOGUE:
            return showLevelsDialogue(state, action);
        case actionTypes.SHOW_TYPE_DIALOGUE:
            return showTypeDialogue(state, action);
        case actionTypes.SINGLE_TYPE_TIMER_END:
            return singleTypeTimerEnd(state, action);
        case actionTypes.MULTILEVEL_TYPE_TIMER_END:
            return multilevelTypeTimerEnd(state, action);
        case actionTypes.RESET_GAME_STATE:
            return resetGameState(state, action);
        case actionTypes.LEVELS_DIALOGUE_TIMER_END:
            return levelsDialogueTimerEnd(state, action);
        case actionTypes.PLAYER_ROUND_TIMER_END:
            return playerRoundTimerEnd(state, action);
        case actionTypes.ROUND_TIMER_ALMOST_UP:
            return roundTimerAlmostUp(state, action);
        case actionTypes.PLAYER_ROUND_OVER:
            return playerRoundOver(state, action);
        case actionTypes.SINGLE_GAME_OVER:
            return singleGameOver(state, action);
        case actionTypes.LEVEL_OVER:
            return levelOver(state, action);
        case actionTypes.MULTILEVEL_GAME_OVER:
            return multilevelGameOver(state, action);
        case actionTypes.SCREEN_TRACKER_ACTIVE_OR_INACTIVE:
            return screenTrackerActiveOrInactive(state, action);
        case actionTypes.RESTART_LAST_MISSION:
            return restartLastMission(state, action);
        case actionTypes.RESTART_MULTILEVEL_MISSION:
            return restartMultilevelMission(state, action);
        case actionTypes.PRE_PLAYER_TIMER_END:
            return prePlayerTimerEnd(state, action);
        case actionTypes.START_NEXT_LEVEL:
            return startNextLevel(state, action);
        default: return state;
    }
};

export default reducer;