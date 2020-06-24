import * as actionTypes from '../actions/actionTypes';
// import { singleTypeTimerEnd } from '../actions';

const initialState = {
    gameData: {
        type: null,
        scope: null,
        stage: null,
        difficulty: null,
        savedMission: null
    },

    activeGame: null,

    showModerator: true,
    showPlayer: false,
    showFelicitator: false,

    showGameTypeDialogue: false,
    showGameLevelsDialogue: false,
    showRestartMissionDialogue: false,
    showEndMissionDialogue: false,
    showGameOverDialogue: false
   
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
        showGameTypeDialogue: true
    }
};

const singleTypeTimerEnd = (state, action) => {
    return {
        ...state,
        showGameTypeDialogue: false,
        showModerator: false
    }

}

const multilevelTypeTimerEnd = (state, action) => {
    return {
        ...state,
        showGameTypeDialogue: false,
        showLevelsDialogue: true
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
    
        activeGame: null,
    
        showModerator: true,
        showGameTypeDialogue: true,
        showGameLevelsDialogue: false,
        showRestartMissionDialogue: false,
        showEndMissionDialogue: false,
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
            return resetGameState(state, action)
        default: return state;
    }
};

export default reducer;