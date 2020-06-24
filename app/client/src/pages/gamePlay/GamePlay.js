import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './gamePlay.module.scss';
import Moderator from './moderator/Moderator';

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
        if (this.props.gameData.type === null) {
            // console.log(this.props.gameData, this.props.gameData.type, this.props.gameData.resumeMission);
            this.props.history.push('/');
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
                <div className={styles.player}>
      
                </div>
                <div className={styles.felicitator}>
      
                </div>
                This is gameplay
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResetGameState: () => dispatch(actions.resetGameState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);