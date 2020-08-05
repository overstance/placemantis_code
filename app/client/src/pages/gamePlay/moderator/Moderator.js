import React from 'react';
import './moderator.scss';
import GameType from './dialogues/GameType';
import {connect} from 'react-redux';
import Levels from './dialogues/Levels';
import GameOver from './dialogues/GameOver';
import LevelOver from './dialogues/LevelOver';

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
                    <GameOver 
                        gameData={props.gameData}
                        totalStageRounds={props.totalStageRounds}
                        stageRoundsCompleted={props.stageRoundsCompleted}
                        totalGameScore={props.totalGameScore}
                        totalMultilevelRounds={props.totalMultilevelRounds}
                        completedMultilevelRounds={props.completedMultilevelRounds}
                        playedType={props.playedType}
                        playedStage={props.playedStage}
                        playedDifficulty={props.playedDifficulty}
                        isAuthenticated={props.isAuthenticated}
                        gameTypeUserBest={props.gameTypeUserBest}
                        gameTypeOverallBest={props.gameTypeOverallBest}
                        postGameScoreSuccess={props.postGameScoreSuccess}
                        postGameScoreFail={props.postGameScoreFail}
                        postGameScoreLoading={props.postGameScoreLoading}
                    />
                    :
                    null
                }
                { props.showLevelOver ?
                    <LevelOver 
                        gameData={props.gameData}
                        totalStageRounds={props.totalStageRounds}
                        stageRoundsCompleted={props.stageRoundsCompleted}
                        totalGameScore={props.totalGameScore}
                        level={props.level}
                        levelScore={props.levelScore}
                        levelStage={props.levelStage}
                        levelRounds={props.levelRounds}
                        completedLevelRounds={props.completedLevelRounds}
                        lifeCount={props.lifeCount}
                        levelStages={props.shuffledStages}
                        playedType={props.playedType}
                        playedStage={props.playedStage}
                        playedDifficulty={props.playedDifficulty}
                        isAuthenticated={props.isAuthenticated}
                        gameTypeUserBest={props.gameTypeUserBest}
                        gameTypeOverallBest={props.gameTypeOverallBest}
                        saveAndExitLoading={props.saveAndExitLoading}
                        saveAndExitSuccess={props.saveAndExitSuccess}
                        saveAndExitFail={props.saveAndExitFail}
                    />
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
        showGameOver: state.game.showGameOverDialogue,
        showLevelOver: state.game.showLevelOverDialogue,

        gameData: state.game.gameData,
        totalStageRounds: state.game.totalStageRounds,
        stageRoundsCompleted: state.game.stageRoundsCompleted,
        totalGameScore: state.game.totalGameScore,

        level: state.game.level,
        levelScore: state.game.levelScore,
        levelStage: state.game.levelStage,
        levelRounds: state.game.levelRounds,
        completedLevelRounds: state.game.completedLevelRounds,
        lifeCount: state.game.lifeCount,
        levelStages: state.game.shuffledStages,
        totalMultilevelRounds: state.game.totalMultilevelRounds,
        completedMultilevelRounds: state.game.completedMultilevelRounds,

        playedType: state.game.playedType,
        playedStage: state.game.playedStage,
        playedDifficulty: state.game.playedDifficulty,

        gameEndReport: state.game.gameEndReport, 
        rankingTaskCleared: state.game.rankingTaskCleared,
        shuffledStages: state.game.shuffledStages,
        // coming from auth state
        isAuthenticated: false,
        gameTypeUserBest: 0,
        saveAndExitLoading: false,
        saveAndExitSuccess: false,
        saveAndExitFail: false,
        // coming from scores state
        gameTypeOverallBest: 16000,
        postGameScoreSuccess: false,
        postGameScoreLoading: false,
        postGameScoreFail: false
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Moderator);