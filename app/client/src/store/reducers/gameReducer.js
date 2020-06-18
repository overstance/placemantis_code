import * as actionTypes from '../actions/actionTypes';

const initialState = {
    gameData: {
        type: null,
        scope: null,
        stage: null,
        difficulty: null,
        savedMission: null,
        resumeMission: false
    },
    activeGame: null
}

const setGameData = (state, action) => {
    return {
        ...state,
        gameData: action.gameData
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAME_DATA: 
            return setGameData(state, action);

        default: return state;
    }
};

export default reducer;