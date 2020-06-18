// import axios from 'axios';
import * as actionTypes from './actionTypes';

// set game data
export const setGameData = (gameData) => {
    return {
        type: actionTypes.SET_GAME_DATA,
        gameData: gameData
    }
}
