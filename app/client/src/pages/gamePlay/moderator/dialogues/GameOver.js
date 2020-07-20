import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import {numberWithCommas} from '../../../../utilities/utilities';
import {scaleElement} from '../../../../anime/scale';
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

    let totalScore = props.totalGameScore;
    let missionScore = numberWithCommas(totalScore);
    let unbonusedStageScore = totalRounds * 1000;



    useEffect(() => {

        let scaleProp = {
            animatedClass: '.gameOverDialogue',
            scaleFactor: [0.75, 1],
            transformOrigin: '50% 50%'
        }
 
        scaleElement(scaleProp);

        if (completedRounds <= 0.5 * totalRounds) {
            const elem = document.querySelector('.gameOverDialogueCompletedRounds');
            elem.style.color = '#ff1a00';
        } 
    
        if (totalScore <= 0.5 * unbonusedStageScore) {
            const elem = document.querySelector('.gameOverMissionScore');
            elem.style.color = '#ff1a00';
        }

        if ((completedRounds <= 0.5 * totalRounds) || (totalScore <= 0.5 * unbonusedStageScore)) {
            const elem = document.querySelector('.gameOverDialogueTitle');
            elem.style.color = '#ff1a00';
        } 
    });

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

    return(
        <div className="gameOverDialogue">
            <div className="gameOverDialogueHead">
                <h2 className="gameOverDialogueTitle">
                    { totalRounds === completedRounds ? 
                        "Mission Completed" 
                        : 
                        "Mission Over"
                    }
                </h2> 
            </div>
            <div className="gameOverDialogueBody">
                <div className="gameOverDialogueMissionInfo">
                    <div className="gameOverDialogueStage">
                        <h3>
                            <span>
                                <span>{stageName}</span>
                                <span className="gameOverDialogueDifficulty">
                                    {"[" + props.playedDifficulty + "]"}
                                </span>
                            </span>
                        </h3>
                        {props.isAuthenticated ? 
                            null : 
                            <h4>Register to post score</h4>
                        }
                    </div>
                    <div className="gameOverDialogueRoundInfo">
                        <h4>
                           Attempted
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
                        <span className="gameOverMissionScore">
                            {missionScore}
                        </span>
                    </div>
                    <div>
                        <h4>
                            Your Best
                        </h4>
                        <span>
                            {props.isAuthenticated ? props.gameTypeUserBest : "N/A"}
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