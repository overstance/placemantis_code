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
            'Africa', 'Oceania', 'Europe', 'North_America',
            'Asia', 'South_America', 'Southern_Europe', 
            'Central_and_South_Asia', 'West_and_Central_Africa',
            'The_Caribbean_Islands', 'West_Indies_and_West_Africa', 
            'Southeast_Asia_and_Oceania', 'East_Africa_and_Middle_East_Asia'
        ]
    
        const stagesShuffled = shuffleArray(gameStages);
        stagesShuffled.unshift('Southern_Africa');
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