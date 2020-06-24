import React, {useEffect} from 'react';
import './moderator.scss';
import GameType from './dialogues/GameType';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const Moderator = props => {

    useEffect(() => {
        if (props.gameType === 'ResumeSavedGame') {
            props.onShowLevelsDialogue();
        } else {
            props.onShowTypeDialogue();
        }
    }, [props]);

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
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        gameType: state.game.gameData.type,

        showModerator: state.game.showModerator,
        showPlayer: state.game.showPlayer,
        showFelicitator: state.game.showFelicitator,

        showGameType: state.game.showGameTypeDialogue,
        showLevels: state.game.showGameLevelsDialogue,
        showRestartMission: state.game.showRestartMissionDialogue,
        showEndMission: state.game.showEndMissionDialogue,
        showGameOver: state.game.showGameOverDialogue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowLevelsDialogue: () => dispatch(actions.showLevelsDialogue()), 
        onShowTypeDialogue: () => dispatch(actions.showTypeDialogue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Moderator);