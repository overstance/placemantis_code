import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './gamePlay.module.scss';
import Moderator from './moderator/Moderator';
import {shuffleArray} from '../../utilities/utilities';
import Player from './player/Player';

/* const data = {
    name: "Australia"
} */

class GamePlay extends Component {

    state = {
        showModerator: true,
        showPlayer: false,
        showFelicitator: false
    }

    componentDidMount() {
        const gameStages = [
            'Africa', 'Oceania', 'Europe', 'North America',
            'Asia', 'South America', 'Southern Europe', 
            'Central and South Asia', 'West and Central Africa',
            'The Caribbean Islands', 'West Indies and West Africa', 
            'Southeast Asia and Oceania', 'East Africa and Middle East Asia'
        ]
    
        const stagesShuffled = shuffleArray(gameStages);
        stagesShuffled.unshift('Southern Africa');
        stagesShuffled.push('World');

        if (this.props.gameData.type === null) {
            // console.log(this.props.gameData, this.props.gameData.type, this.props.gameData.resumeMission);
            this.props.history.push('/');
        }

        if (this.props.gameData.type === 'ResumeSavedGame') {
            this.props.onShowLevelsDialogue();
        } else {
            this.props.onShowTypeDialogue(stagesShuffled);
        }
    }

    componentWillUnmount() {
        this.props.onResetGameState();
    }

    render() {
        return(
            /* <div className={styles.gamePlay}>
              <img src={`/images/flags/${data.name + '.svg'}`} alt="flag"/>
              {props.gameData ? <div>{this.props.gameData.type}</div> : null}
            </div> */
            <div className={styles.gamePlay}>
                { this.props.showModerator ?
                    <div className={styles.moderator}>
                        <Moderator 
                            gameType={this.props.gameData.type}
                            gameStage={this.props.gameData.stage}
                            gameDifficulty={this.props.gameData.difficulty}
                            gameScope={this.props.gameData.scope}
                            savedGame={this.props.gameData.savedMission}
                        />
                    </div>
                    :
                    null
                }
                { this.props.showPlayer ?
                    <div className={styles.player}>
                        {/* {"GAME PLAYER SHOWS HERE level: " + this.props.level + 'stage: ' + this.props.levelStage} */}
                        <Player />
                    </div>
                    :
                    null
                }
                {   this.props.showFelicitator ?
                    <div className={styles.felicitator}>
                        FELICITATOR SHOWS HERE
                    </div>
                    :
                    null
                }
            </div>
          )
    }    
}

const mapStateToProps = state => {
    return {
        gameData: state.game.gameData,

        showModerator: state.game.showModerator,
        showPlayer: state.game.showPlayer,
        showFelicitator: state.game.showFelicitator,

        showGameType: state.game.showGameTypeDialogue,
        showLevels: state.game.showGameLevelsDialogue,
        showRestartMission: state.game.showRestartMissionDialogue,
        showEndMission: state.game.showEndMissionDialogue,
        showGameOver: state.game.showGameOverDialogue,

        level: state.game.level,
        levelStage: state.game.levelStage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResetGameState: () => dispatch(actions.resetGameState()),
        onShowLevelsDialogue: () => dispatch(actions.showLevelsDialogue()), 
        onShowTypeDialogue: (stagesShuffled) => dispatch(actions.showTypeDialogue(stagesShuffled))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);