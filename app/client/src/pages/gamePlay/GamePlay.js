import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './gamePlay.module.scss';
import Moderator from './moderator/Moderator';
import {shuffleArray} from '../../utilities/utilities';
import Player from './player/Player';
import PrePlayer from './prePlayer/PrePlayer';
import Timer from './Timer';

/* const data = {
    name: "Australia"
} */

class GamePlay extends Component {

    state = {
        prePlayerOn: false,
        prePlayerTimeOn: false,
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
            console.log(this.props.gameData);
            this.props.history.push('/');
        }

        if (this.props.gameData.type === 'ResumeSavedGame') {
            this.props.onShowLevelsDialogue();
        } else {
            this.props.onShowTypeDialogue(stagesShuffled);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.showPlayer === false && this.props.showPlayer === true) {
            this.setState({ prePlayerOn: true, prePlayerTimeOn: true});
        } else if (prevProps.showPlayer === true && this.props.showPlayer === false) {
            this.setState({ prePlayerOn: false, prePlayerTimeOn: false});
        } else if (prevProps.prePlayerTimerEnded === false && this.props.prePlayerTimerEnded === true) {
            this.setState({ prePlayerOn: false, prePlayerTimeOn: false});
        }
    }

    componentWillUnmount() {
        this.props.onResetGameState();
    }

    render() {

        let prePlayerStage;

        if (this.props.gameData.type === "Multilevel") {
            prePlayerStage = this.props.levelStage;
        } else {
            prePlayerStage = this.props.gameData.stage;
        }
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
                        { this.state.prePlayerOn ?
                            <PrePlayer stage={prePlayerStage}/>
                            :
                            <Player />
                        }
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
                {this.state.prePlayerOn ?
                    <div className={styles.prePlayerTimerDud}>
                        <Timer 
                            timerType='prePlayerTimer'
                            seconds={2}
                        />
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

        prePlayerTimerEnded: state.game.prePlayerTimerEnded,

        /* showGameType: state.game.showGameTypeDialogue,
        showLevels: state.game.showGameLevelsDialogue,
        showRestartMission: state.game.showRestartMissionDialogue,
        showEndMission: state.game.showEndMissionDialogue,
        showGameOver: state.game.showGameOverDialogue, */

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