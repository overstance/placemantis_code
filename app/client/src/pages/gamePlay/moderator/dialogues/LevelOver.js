import React/* , {useEffect} */ from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import {numberWithCommas} from '../../../../utilities/utilities';
import '../moderator.scss';
import Button from '../../../../components/common/buttons/DialogueButton';
import {withRouter} from 'react-router-dom';

const LevelOver = props => {
    
    let totalRounds = props.levelRounds;
    let completedRounds = props.completedLevelRounds;
    let levels = props.levelStages.length;
    let level = props.level;

    const onProceed = () => {
        props.onStartNextLevel();
    }

    const onExit = () => {
        // console.log('exit game play');
        props.history.push('/');
    }

    let levelScore = numberWithCommas(props.levelScore);

    

    return(
        <div className="levelOverDialogue">
            <div className="levelOverDialogueHead">
                { totalRounds === completedRounds ? 
                    <h2>Level Completed</h2> 
                    : 
                    <h2 className='levelOverDialogueMissionOver'>Level Over</h2>
                }
            </div>
            <div className="levelOverDialogueBody">
                <div className="levelOverDialogueMissionInfo">
                    <h3>
                        {props.levelStage}
                    </h3>
                    <div className="levelOverDialogueRoundInfo">
                        <h4>
                           Completed
                        </h4>
                        <div>
                            <h5>
                                Rounds:
                            </h5>
                            <div>
                                <span className="levelOverDialogueCompleted">{completedRounds}</span><span>{'/' + totalRounds}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="levelOverDialogueScores">
                    <div>
                        <h4>
                            Level Score
                        </h4>
                        <div className="levelOverDialogueScore">
                            {levelScore}
                        </div>
                    </div>
                    <div>
                        <h4>
                            Level
                        </h4>
                        <div className="levelOverDialogueRange">
                            <span className="levelOverDialogueCompleted">{level}</span><span>{'/' + levels}</span>
                        </div>
                    </div>
                    <div>
                        <h4>
                            Lives
                        </h4>
                        <div className="levelOverDialogueRange">
                            <span className="levelOverDialogueCompleted">{props.lifeCount}</span><span>{'/4'}</span>
                        </div>
                    </div>
                </div>
                <div className="levelOverDialogueButtons">
                    <div className="levelOverDialogueButtonsWrapper">
                        { props.isAuthenticated || props.postGameScoreSuccess === false ?                            
                            <div>
                                <Button
                                    // buttonClicked={onSaveAndExit}
                                    hasSideEffect
                                    sideEffectLoading={props.saveAndExitLoading}
                                >
                                    Save and Exit
                                </Button>
                            </div>
                            :
                            null
                        }
                        <div>
                            <Button
                                buttonClicked={onProceed}
                            >
                                Proceed
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
        levelRounds: state.game.levelRounds,
        completedLevelRounds: state.game.completedLevelRounds,
        lifeCount: state.game.lifeCount,

        playedType: state.game.playedType,
        playedStage: state.game.playedStage,
        playedDifficulty: state.game.playedDifficulty,
        levelOver: state.game.levelOver,
        // coming from auth state
        isAuthenticated: true,
        // coming from scores state
        gameTypeUserBest: 0,
        gameTypeOverallBest: 16000,
        postGameScoreSuccess: false,
        saveAndExitLoading: false,

        levelStages: state.game.shuffledStages,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onPostGameScore: () => dispatch(actions.postGameScore()),
        onStartNextLevel: () => dispatch(actions.startNextLevel()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LevelOver));