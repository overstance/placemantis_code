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
    showRestartMissionDialogue: false,
    showEndMissionDialogue: false,
    showGameOverDialogue: false,
   
    singleGameActive: false,
    multilevelGameActive: false,
    resumedMultilevelGame: false,

    totalStageRounds: 0,
    totalGameScore: 0,
    gameStatus: 'off',
    gameOver: false,
    gameEndReport: null, 

    rankingTaskCleared: false,
    
    startNextLevel: false,
    level: 0,
    levelScore: 0,
    levelStage: null,
    
    shuffledStages: []
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
        showPlayer: true
    }

}

const setGameLevel = (state, action) => {
    return {
        ...state,
        level: action.number,
        levelStage: action.stage
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
            savedMission: null,
            resumeMission: false
        },
    
        showModerator: true,
        showGameTypeDialogue: true,
        showGameLevelsDialogue: false,
        showRestartMissionDialogue: false,
        showEndMissionDialogue: false,
        showGameOverDialogue: false,

        singleGameActive: false,
        multilevelGameActive: false,
        resumedMultilevelGame: false,

        totalStageRounds: 0,
        totalGameScore: 0,
        gameStatus: 'off',
        gameOver: false,
        gameEndReport: null, 

        rankingTaskCleared: false,
        
        startNextLevel: false,
        level: 0,
        levelScore: 0,
        levelStage: null,
        shuffledStages: []
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
        case actionTypes.SET_GAME_LEVEL:
            return setGameLevel(state, action);
        case actionTypes.LEVELS_DIALOGUE_TIMER_END:
            return levelsDialogueTimerEnd(state, action);
        default: return state;
    }
};

export default reducer;