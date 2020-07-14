import React/* , {useEffect} */ from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import {numberWithCommas} from '../../../../utilities/utilities';
import '../moderator.scss';
import Button from '../../../../components/common/buttons/DialogueButton';
import {withRouter} from 'react-router-dom';

const GameOver = props => {

    let totalRounds;
    let completedRounds;
    let stageName;

    if (props.playedType === 'Single') {
        stageName = props.playedStage;
        totalRounds = props.totalStageRounds;
        completedRounds = props.stageRoundsCompleted;

    } else if (props.playedType === 'Multilevel') {
        stageName = "Multilevel Mission";
        totalRounds = props.totalMultilevelRounds;
        completedRounds = props.completedMultilevelRounds;
    }

    const onPlayAgain = () => {
        // console.log('play again');
        if (props.gameData.type === 'Single') {
            props.onRestartLastMission();
        } else if (props.gameData.type === 'Multilevel') {
            props.onRestartMultilevelMission();
        }
    }

    const onExit = () => {
        // console.log('exit game play');
        props.history.push('/');
    }

    let missionScore = numberWithCommas(props.totalGameScore)

    return(
        <div className="gameOverDialogue">
            <div className="gameOverDialogueHead">
                { totalRounds === completedRounds ? 
                    <h2>Mission Completed</h2> 
                    : 
                    <h2 className='gameOverDialogueMissionOver'>Mission Over</h2>
                }
            </div>
            <div className="gameOverDialogueBody">
                <div className="gameOverDialogueMissionInfo">
                    <h3>
                        {stageName}
                    </h3>
                    <div className="gameOverDialogueRoundInfo">
                        <h4>
                           Completed
                        </h4>
                        <div>
                            <h5>
                                Rounds:
                            </h5>
                            <div>
                                <span className="gameOverDialogueCompletedRounds">{completedRounds}</span><span>{'/' + totalRounds}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gameOverDialogueScores">
                    <div>
                        <h4>
                            {props.gameType === 'Single' ? "This Score" : 'Total Score'}
                        </h4>
                        <span>
                            {missionScore}
                        </span>
                    </div>
                    <div>
                        <h4>
                            Your Best
                        </h4>
                        <span>
                            {props.isAuthenticated ? props.gameTypeUserBest : "Register To Post Score"}
                        </span>
                    </div>
                    <div>
                        <h4>
                            Overall Best
                        </h4>
                        <span>
                            {props.gameTypeOverallBest}
                        </span>
                    </div>
                </div>
                <div className="gameOverDialogueButtons">
                    <div className="gameOverDialogueButtonsWrapper">
                        { props.isAuthenticated || props.postGameScoreSuccess === false ?
                            <div>
                                <Button
                                    // buttonClicked={props.OnPostGameScore}
                                    hasSideEffect
                                    sideEffectLoading={props.postGameScoreLoading}
                                >
                                    Post Score
                                </Button>
                            </div>
                            :
                            null
                        }
                        <div>
                                <Button
                                    buttonClicked={onPlayAgain}
                                >
                                    Play Again
                                </Button>
                        </div>
                        <div>
                                <Button
                                    buttonClicked={onExit}
                                >
                                    Exit
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        gameData: state.game.gameData,
        totalStageRounds: state.game.totalStageRounds,
        stageRoundsCompleted: state.game.stageRoundsCompleted,
        totalGameScore: state.game.totalGameScore,
        gameStatus: state.game.gameStatus,

        level: state.game.level,
        levelScore: state.game.levelScore,
        levelStage: state.game.levelStage,
        totalMultilevelRounds: state.game.totalMultilevelRounds,
        completedMultilevelRounds: state.game.completedMultilevelRounds,

        playedType: state.game.playedType,
        playedStage: state.game.playedStage,
        playedDifficulty: state.game.playedDifficulty,
        gameOver: state.game.gameOver,
        // coming from auth state
        isAuthenticated: true,
        // coming from scores state
        gameTypeUserBest: 0,
        gameTypeOverallBest: 16000,
        postGameScoreSuccess: false,
        postGameScoreLoading: false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onPostGameScore: () => dispatch(actions.postGameScore()),
        onRestartLastMission: () => dispatch(actions.restartLastMission()),
        onRestartMultilevelMission: () => dispatch(actions.restartMultilevelMission())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameOver));