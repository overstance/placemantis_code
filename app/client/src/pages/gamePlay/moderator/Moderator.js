import React from 'react';
import './moderator.scss';
import GameType from './dialogues/GameType';
import {connect} from 'react-redux';
import Levels from './dialogues/Levels';
import GameOver from './dialogues/GameOver';
// import * as actions from '../../../store/actions/index';

const Moderator = props => {

    return(
        <div className="gameModerator">
            <div className="gameModeratorDialogues">
                { props.showGameType ?
                    <GameType 
                        type={props.gameType}
                        stage={props.gameStage}
                        scope={props.gameScope}
                        difficulty={props.gameDifficulty}
                        saved={props.savedGame}
                    />
                    :
                    null
                }
                { props.showLevels ?
                    <Levels
                        level={props.level}
                        shuffledStages={props.shuffledStages}
                    />
                    :
                    null
                }
                { props.showGameOver ?
                    <GameOver />
                    :
                    null
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showModerator: state.game.showModerator,
        showPlayer: state.game.showPlayer,
        showFelicitator: state.game.showFelicitator,

        showGameType: state.game.showGameTypeDialogue,
        showLevels: state.game.showGameLevelsDialogue,
        showRestartMission: state.game.showRestartMissionDialogue,
        showEndMission: state.game.showEndMissionDialogue,
        showGameOver: state.game.showGameOverDialogue,

        /* totalStageRounds: state.game.totalStageRounds,
        stageRoundsCompleted: state.game.stageRoundsCompleted,
        totalGameScore: state.game.totalGameScore,
        gameStatus: state.game.gameStatus,

        level: state.game.level,
        levelScore: state.game.levelScore,
        levelStage: state.game.levelStage,

        playedType: state.game.playedType,
        playedStage: state.game.playedStage,
        playedDifficulty: state.game.playedDifficulty,
        gameOver: state.game.gameOver, */

        gameEndReport: state.game.gameEndReport, 
        rankingTaskCleared: state.game.rankingTaskCleared,

        shuffledStages: state.game.shuffledStages
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Moderator);