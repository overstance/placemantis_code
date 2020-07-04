import React, {/* useEffect, useState */Component} from 'react';
import styles from './player.module.scss';
import {Places} from './places';
import {shuffleArray, /* numberWithCommas, */ numberWithSpaces} from '../../../utilities/utilities';
import SouthernAfrica from './stages/SouthernAfrica';
import {connect} from 'react-redux';
import Avatar from '../../../components/common/Avatar';
import HintBoard from '../player/stage/HintBoard';
import RankBoard from '../player/stage/RankBoard';
import TimerPanel from './activity/TimerPanel';
import RoundsPanel from './activity/RoundsPanel';
import Option from './activity/Option';
import * as actions from '../../../store/actions/index';
import Timer from '../Timer';

// const roundIntervalTimer = props

class Player extends Component {
    state = {
        totalRounds: 0,
        nextRound: 0,

        allPlaces: [],
        stagePlaces: [],
        nextPlace: {
            name: "",
            domID: "",
            capital: "",
            flag: false,
            emblem: false,
            currency: "",
            territory: false,
            sovereignState: null,
            commonLanguages: [],
            geographicFeatures: {
            elevation: "",
            forest: "",
            desert: "",
            waters: ""
            },
            continent: "",
            stages: [],
            callingCode: "",
            touristAttractions: []
        },
        featuredPlaces: [], 
        nextPlaceName: '',
        
        roundOptions: [],
        wrongRoundChoices: [],
        rightRoundChoice: '',
        rightChoiceCount: 0,
        rightUserOption: false,
        clickedOption: null,

        roundOverReason: null,

        showHints: false,
        showUserRanking: false,

        totalScore: 1000000,
        roundScore: 0,
        levelScore: 0,

        showTimerPanelSelect: true,
        showTimerPanelTimer: true,
        // timerTimedOut: false,

        isRoundInterval: false,
        roundIntervalSeconds: 2,

        hasLive1: true,
        hasLive2: true,
        hasLive3: true,
        hasLive4: true,

        gameEndReport: null,
        gameOver: false
    }

    componentDidMount() {
        if (this.props.gameType === 'Single') {
            this.initializeSingleGame();
        }
    }

    componentDidUpdate(prevProps, prevState) {

        /* if (prevProps.roundTimerElapsed === false && this.props.roundTimerElapsed === true) {
            this.initializeRoundInterval()
        } */

        if ((prevState.rightUserOption === false && this.state.rightUserOption === true) || 
            (prevProps.roundTimerElapsed === false && this.props.roundTimerElapsed === true) ||
            (this.state.hasLive1 === false)
            ) {
                let reason = null;


                if (this.state.rightUserOption === true) {
                    reason = "Good Choice";
                } else if (this.props.roundTimerElapsed === true) {
                    reason = "Time Up";
                } else if (this.state.nextRound === this.state.totalRounds) {
                    reason = "Stage Completed"
                } else if (this.state.hasLive1 === false) {
                    reason = "Game Over"
                }

                if (this.state.rightUserOption === true) {
                    let newRightChoiceCount = this.state.rightChoiceCount + 1;

                    this.setState({ rightChoiceCount: newRightChoiceCount});
                }
            // console.log(prevState.rightUserOption, this.state.rightUserOption);
            console.log('round interval starts');
            this.setState({ 
                isRoundInterval: true,
                showTimerPanelSelect: false, 
                showTimerPanelTimer: false,
                roundOverReason: reason
            });
            // this.initializeRoundInterval()
        }

        if (prevState.gameOver === false && this.state.gameOver === true) {
            this.setState({isRoundInterval: true, roundOverReason: "Game Over"});
        }
    }

    initializeSingleGame = () => {
        const stageName = this.props.gameStage;
        const places = Places.filter(place =>
            place.stages.indexOf(stageName) > -1
        );
        const placesShuffled = shuffleArray(places);
        const otherPlaces = Places.filter(place => place.stages.indexOf(stageName) === -1).slice(0, 4);

        const allPlaces = placesShuffled.concat(otherPlaces);
        const round = this.state.nextRound + 1;
        const place = placesShuffled[0];
        const placeDomID = place.domID;
        const featuredFiltered = allPlaces.filter(place => place.domID !== placeDomID);
        const options = featuredFiltered.slice(0, 3);
        options.push(place);
        const optionsShuffled = shuffleArray(options);

        this.setState({
            totalRounds: placesShuffled.length,
            nextRound: round,

            allPlaces: allPlaces,
            stagePlaces: placesShuffled,
            nextPlace: place,
            featuredPlaces: featuredFiltered,
            nextPlaceName: placeDomID,

            roundOptions: optionsShuffled,
        })
        
        console.log('initializing game', options, optionsShuffled);
    }

    roundIntervalEnds = () => {
        console.log('round interval ends');

        if (this.state.gameOver === true) {
            this.props.onSingleGameOver(this.state.totalRounds, this.state.rightChoiceCount, this.state.totalScore, this.state.gameEndReport);
        } else {
            this.setState({ isRoundInterval: false, roundOverReason: null});
            this.props.onPlayerRoundOver();
            this.initializeNextRound();
        }
    }

    initializeNextRound = () => {
        if (this.state.nextRound === this.state.totalRounds || this.state.hasLive1 === false) {
            console.log('GAME OVER!!!!!!!!');
            this.setState({ gameOver: true });
        } else {

            const round = this.state.nextRound + 1;
            const lastPlace = this.state.nextPlaceName;

            const allPlaces = this.state.allPlaces.filter(place => place.domID !== lastPlace);
            const stagePlaces = this.state.stagePlaces.filter(place => place.domID !== lastPlace);

            const place = stagePlaces[0];
            const placeDomID = place.domID;
            const featuredFiltered = allPlaces.filter(place => place.domID !== placeDomID);
            const options = featuredFiltered.slice(0, 3);
            options.push(place);
            const optionsShuffled = shuffleArray(options);


            this.setState({
                nextRound: round,
                allPlaces: allPlaces,
                stagePlaces: stagePlaces,
                nextPlace: place,
                featuredPlaces: featuredFiltered,
                nextPlaceName: placeDomID,

                roundOptions: optionsShuffled,
                wrongRoundChoices: [],
                rightRoundChoice: '',
                rightUserOption: false,

                showHints: false,
                showUserRanking: false,

                roundScore: 0,

                showTimerPanelSelect: true,
                showTimerPanelTimer: true,
            });

            console.log('initializing next round', options, placeDomID, optionsShuffled);
        }
    }

    stopGame = () => {
        console.log('stop game?');
    }

    restartGame = () => {
        console.log('restart game?');
    }

    showHintsClicked = () => {
        this.setState((prevState) => {
            return {
                showHints: !prevState.showHints
            }
        });

        // this.setState({ rightUserOption: true });
    }

    showRankingClicked = () => {
        this.setState((prevState) => {
            return {
                showUserRanking: !prevState.showUserRanking
            }
        });
    }

    placeOptionClicked = (domID) => {
        // console.log(domID);
        this.setState({clickedOption: domID}, () => {

        });

        if (domID === this.state.clickedOption) {
            return;
        } else {
            if (domID === this.state.nextPlaceName) {
                this.setState({rightRoundChoice: domID, rightUserOption: true, clickedOption: domID});
            } else if (domID !== this.state.nextPlaceName) {
                // console.log('wrong');
                let wrongChoices = this.state.wrongRoundChoices
                wrongChoices.push(domID);
                this.setState({wrongRoundChoices: wrongChoices, rightUserOption: false, clickedOption: domID});
            }
        }
    }
    
    render () {

        let playerStage;

        if (this.props.gameStage === 'Southern Africa') {
            playerStage = 
            <SouthernAfrica 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
            />
        };

        let currentUserRank = 'Visitor';

        if (this.props.userRank) {
            currentUserRank = this.props.userRank
        }

        let printedScore = numberWithSpaces(this.state.totalScore);

        let options =
        this.state.roundOptions.map((place, i) => (
            <Option 
                key={i}
                placeDomId={place.domID}
                placeClicked={() => this.placeOptionClicked(place.domID)}
                wrongChoices={this.state.wrongRoundChoices}
                rightChoice={this.state.rightRoundChoice}
            />
        ))

        return(
            <div className={styles.player}>
                <div className={styles.stage}>
                    <div className={styles.map}> 
                        {playerStage}
                    </div>
                    <div className={styles.hud}> 
                        <div className={styles.toolBar}>
                            <div className={styles.leftTools}>
                                <div> 
                                    <button onClick={this.stopGame}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                                            <path d="M70 55H20V5h50v50zm0-50L20 55m0-50l50 50"/>
                                        </svg>
                                    </button>
                                </div>
                                <div> 
                                    <button onClick={this.restartGame}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                                            <path d="M18.995 40.608V5h52.01v7.325m0 7.067V55h-52.01v-7.325M7.963 30l11.032 10.607L30.028 30m52.009.001L71.005 19.395 59.972 30.001"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* <div></div> */}
                            <div className={styles.rightTools}>
                                <div/>
                                <div> 
                                    <div className={styles.avatar}>
                                        <Avatar 
                                            avatarType='reed'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.propertiesBar}>
                            <div className={styles.hints}>
                                <HintBoard
                                    place={this.state.nextPlace}
                                    showHints={this.state.showHints}
                                    difficulty={this.props.difficulty}
                                    showHintsClicked={this.showHintsClicked}
                                />
                            </div>
                            <div className={styles.playerRoundIntervalBoard}>
                                { this.state.isRoundInterval ?
                                  <div>
                                      { this.state.roundOverReason === "Good Choice" ||
                                        this.state.roundOverReason === "Stage Completed" ? 
                                        <h4>{this.state.roundOverReason}</h4> : null}
                                      { this.state.roundOverReason === "Time Up" ||
                                        this.state.roundOverReason === "Game Over" ? 
                                        <h3>{this.state.roundOverReason}</h3> : null}
                                      <Timer 
                                            seconds={this.state.roundIntervalSeconds}
                                            onRoundIntervalTimerEnds={this.roundIntervalEnds}
                                            timerType='roundIntervalTimer'
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <div className={styles.ranking}>
                                <RankBoard 
                                    userRank={currentUserRank}
                                    showUserRanking={this.state.showUserRanking}
                                    showRankingClicked={this.showRankingClicked}
                                />
                            </div>
                        </div>
                    </div>               
                </div>
                <div className={styles.particulars}>
                    <div className={styles.stageId}>
                        {this.props.gameType === 'Single' ? <span>{this.props.gameStage}</span> : null}
                        {this.props.gameType === 'Multilevel' ? <span>{this.props.levelStage}</span> : null}
                    </div>
                    <div className={styles.score}>
                        <div>
                            <h3>SCORE:</h3><span>{printedScore}</span>
                        </div>                       
                    </div>
                </div>
                <div className={styles.activity}>
                    <div className={styles.timerPanel}>
                        <TimerPanel 
                            timerElapsed={this.props.roundTimerElapsed}
                            gameType={this.props.gameType}
                            rightUserOption={this.state.rightUserOption}
                            roundScore={this.state.roundScore}
                            timerAlmostUp={this.props.timerAlmostUp}
                            showSelect={this.state.showTimerPanelSelect}
                            showTimer={this.state.showTimerPanelTimer}
                        />
                    </div>
                    <div className={styles.optionsPanel}>
                        {options}
                    </div>
                    <div className={styles.roundsPanel}>
                        <RoundsPanel
                            live1={this.state.hasLive1}
                            live2={this.state.hasLive2}
                            live3={this.state.hasLive3}
                            live4={this.state.hasLive4}
                            round={this.state.nextRound}
                            totalRounds={this.state.totalRounds}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameType: state.game.gameData.type,
        gameStage: state.game.gameData.stage,
        difficulty: state.game.gameData.difficulty,
        // userRank will come from auth state
        userRank: "Place Marshal",

        levelStage: state.game.levelStage,

        roundTimerElapsed: state.game.roundTimerElapsed,
        timerAlmostUp: state.game.timerAlmostUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayerRoundOver: () => dispatch(actions.playerRoundOver()),
        onSingleGameOver: (totalRounds, nextRound, totalScore, gameEndReport) => dispatch(actions.singleGameOver(totalRounds, nextRound, totalScore, gameEndReport))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);