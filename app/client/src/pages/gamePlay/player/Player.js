import React, {/* useEffect, useState */Component} from 'react';
import styles from './player.module.scss';
import {Places} from './places';
import {shuffleArray, numberWithCommas/* , numberWithSpaces */} from '../../../utilities/utilities';
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
import Dialogue from './dialogue/Dialogue';
import {withRouter} from 'react-router-dom';

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

        showHints: false,
        showUserRanking: false,
        showTimerPanelSelect: false,
        showTimerPanelTimer: false,

        totalScore: 0,
        roundScore: 0,
        levelScore: 0,
        scorePerRound: 1000,
        displayedScorePerRound: "+1000",
        simpleWrongChoiceLoss: 500,
        simpleDisplayedWrongChoiceLoss: "-500",
        hardWrongChoiceLoss: 1000,
        hardDisplayedWrongChoiceLoss: "-1,000",
        displayedRoundScore: "0",
        isRoundScoreLoss: false,

        simpleSecondsPerRound: 15,
        hardSecondsPerRound: 10,
        roundTimerWarningSecond: 5,

        roundOverReason: null,
        isRoundInterval: false,
        roundIntervalSeconds: 2,

        hasLive1: true,
        hasLive2: true,
        hasLive3: true,
        hasLive4: true,

        gameEndReport: null,
        gameOver: false,

        gamePaused: false,

        // new states below
        showCancelGame: false,
        showRestartGame: false,

        restartMission: false
    }

    componentDidMount() {
        if (this.props.gameType === 'Single') {
            this.initializeSingleGame();
        }
    }

    componentDidUpdate(prevProps, prevState) { 

        if (prevProps.screenTrackerActive === false && this.props.screenTrackerActive === true) {
            this.setState({ 
                gamePaused: true, 
                showCancelGame: false,
                showRestartGame: false
            });
        } else if (prevProps.screenTrackerActive === true && this.props.screenTrackerActive === false) {
            this.setState({ gamePaused: false });
        } else if (prevState.gameOver === false && this.state.gameOver === true) {
            console.log('Running Game Over Routine');
            let reason = "Game Over"

            if (this.state.nextRound === this.state.totalRounds) {
                reason = "Stage Completed"
            }

            this.setState({
                isRoundInterval: true, 
                roundOverReason: reason
            });
        } else if (prevState.hasLive1 === true && this.state.hasLive1 === false) {
            console.log('Running last life Spent');
            this.setState({gameOver: true});

        } else if (prevState.rightUserOption === false && this.state.rightUserOption === true && this.state.gameOver === false) {

            console.log('Running Right Option Routine');

            let newRightChoiceCount = this.state.rightChoiceCount + 1;
            let newRoundScore = this.state.scorePerRound;
            let newTotalScore = this.state.totalScore + newRoundScore;
            let displayScore = this.state.displayedScorePerRound;


            this.setState({ 
                rightChoiceCount: newRightChoiceCount,
                roundScore: newRoundScore,
                totalScore: newTotalScore,
                displayedRoundScore: displayScore,
                isRoundScoreLoss: false,

                isRoundInterval: true,
                showTimerPanelSelect: false, 
                showTimerPanelTimer: false,
                roundOverReason: "Good Choice"
            });
            
        } else if (prevProps.roundTimerElapsed === false && this.props.roundTimerElapsed === true && this.state.gameOver === false)   {
            
            let totalScore = this.state.totalScore;
            let scoreLoss = this.state.simpleWrongChoiceLoss;
            let displayScore = this.state.simpleDisplayedWrongChoiceLoss;
            let newTotalScore = this.state.totalScore - scoreLoss;

            if (this.props.difficulty === 'Hard') {
                scoreLoss = this.state.hardWrongChoiceLoss;
                displayScore = this.state.hardDisplayedWrongChoiceLoss;
                newTotalScore = this.state.totalScore - scoreLoss;
            }


            if (this.state.rightChoiceCount === 0 && totalScore === 0 ) {

                console.log('Running Time Elapse Routine -- rightChoiceCount == 0, totalScore == 0');  

                let live4 = this.state.hasLive4;
                let live3 = this.state.hasLive3;
                let live2 = this.state.hasLive2;
                let live1 = this.state.hasLive1;
                // let isGameOver = this.state.gameOver;

                if (this.state.hasLive4) {
                    live4 = false
                } else if (this.state.hasLive3) {
                    live3 = false
                } else if (this.state.hasLive2) {
                    live2 = false
                } else if (this.state.hasLive1) {
                    live1 = false;
                    // isGameOver = true;
                }

                this.setState({ 
                    roundScore: scoreLoss,
                    displayedRoundScore: displayScore,
                    isRoundScoreLoss: true,
                    hasLive1: live1,
                    hasLive2: live2,
                    hasLive3: live3,
                    hasLive4: live4,
                    // gameOver: isGameOver,
                    isRoundInterval: true,
                    showTimerPanelSelect: false, 
                    showTimerPanelTimer: false,
                    roundOverReason: "Time Up"
                });

            } else if (this.state.rightChoiceCount >= 1 && newTotalScore > 0 ) {

                console.log('Running Time Elapse Routine -- rightChoiceCount >= 1, totalScore > 0');

                let live4 = this.state.hasLive4;
                let live3 = this.state.hasLive3;
                let live2 = this.state.hasLive2;
                let live1 = this.state.hasLive1;
                // let isGameOver = this.state.gameOver;

                if (this.state.hasLive4) {
                    live4 = false
                } else if (this.state.hasLive3) {
                    live3 = false
                } else if (this.state.hasLive2) {
                    live2 = false
                } else if (this.state.hasLive1) {
                    live1 = false;
                    // isGameOver = true;
                }

                this.setState({ 
                    roundScore: scoreLoss,
                    totalScore: newTotalScore,
                    displayedRoundScore: displayScore,
                    isRoundScoreLoss: true,
                    hasLive1: live1,
                    hasLive2: live2,
                    hasLive3: live3,
                    hasLive4: live4,
                    // gameOver: isGameOver,
                    isRoundInterval: true,
                    showTimerPanelSelect: false, 
                    showTimerPanelTimer: false,
                    roundOverReason: "Time Up"
                });

            } else if (this.state.rightChoiceCount >= 1 && newTotalScore <= 0) {   
                
                console.log('Running Time Elapse Routine -- right choice count >= 1, total score <= 0');

                let live4 = this.state.hasLive4;
                let live3 = this.state.hasLive3;
                let live2 = this.state.hasLive2;
                let live1 = this.state.hasLive1;
                // let isGameOver = this.state.gameOver;

                if (this.state.hasLive4) {
                    live4 = false
                } else if (this.state.hasLive3) {
                    live3 = false
                } else if (this.state.hasLive2) {
                    live2 = false
                } else if (this.state.hasLive1) {
                    live1 = false;
                    // isGameOver = true;
                }

                this.setState({ 
                    roundScore: scoreLoss,
                    totalScore: newTotalScore,
                    displayedRoundScore: displayScore,
                    isRoundScoreLoss: true,
                    hasLive1: live1,
                    hasLive2: live2,
                    hasLive3: live3,
                    hasLive4: live4,
                    // gameOver: isGameOver, 
                    
                    isRoundInterval: true,
                    showTimerPanelSelect: false, 
                    showTimerPanelTimer: false,
                    roundOverReason: "Time Up"
                });
            }
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
            showTimerPanelSelect: true,
            showTimerPanelTimer: true,

            restartMission: false
        })
        
        // console.log('initializing game', options, optionsShuffled);
    }

    roundIntervalEnds = () => {
        // console.log('round interval ends');
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
            // console.log('GAME OVER!!!!!!!!');
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

                // roundScore: 0,

                showTimerPanelSelect: true,
                showTimerPanelTimer: true,
            });

            console.log('next round target: ', placeDomID);
        }
    }

    cancelGame = () => {
        // console.log('stop game?');
        this.setState({ showCancelGame: true, gamePaused: true });
    }

    abortCancelMission = () => {
        this.setState({ showCancelGame: false, gamePaused: false });
    }

    confirmCancelMission = () => {
        this.props.history.push('/');
    }

    pauseGame = () => {
        // console.log('pause game');
        this.setState({ gamePaused: true});
    }

    unPauseGame = () => {
        // console.log('unpause game');
        this.setState({ gamePaused: false});
    }

    restartGame = () => {
        // console.log('restart game?');
        this.setState({ showRestartGame: true, gamePaused: true });
    }

    abortRestartMission = () => {
        this.setState({ showRestartGame: false, gamePaused: false });
    }

    confirmRestartMission = () => {
        this.props.onPlayerRoundOver();
        this.setState({
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

            showHints: false,
            showUserRanking: false,
            showTimerPanelSelect: false,
            showTimerPanelTimer: false,

            totalScore: 0,
            roundScore: 0,
            levelScore: 0,
            isRoundScoreLoss: false,

            roundOverReason: null,
            isRoundInterval: false,

            hasLive1: true,
            hasLive2: true,
            hasLive3: true,
            hasLive4: true,

            gameEndReport: null,
            gameOver: false,

            gamePaused: false,

            // new states below
            showCancelGame: false,
            showRestartGame: false,

            restartMission: true
        }, () => {this.initializeSingleGame()});
    }

    showHintsClicked = () => {
        this.setState((prevState) => {
            return {
                showHints: !prevState.showHints
            }
        });
    }

    showRankingClicked = () => {
        this.setState((prevState) => {
            return {
                showUserRanking: !prevState.showUserRanking
            }
        });
    }

    placeOptionClicked = (domID) => {
        if (domID === this.state.clickedOption || this.state.isRoundInterval) {
            return;
        } else {
            if (domID === this.state.nextPlaceName) {
                this.setState({
                    rightRoundChoice: domID, 
                    rightUserOption: true, 
                    clickedOption: domID,
                    isRoundScoreLoss: false
                });
            } else if (domID !== this.state.nextPlaceName) {
                let wrongChoices = this.state.wrongRoundChoices
                wrongChoices.push(domID);

                let totalScore = this.state.totalScore;
                let scoreLoss = this.state.simpleWrongChoiceLoss;
                let displayScore = this.state.simpleDisplayedWrongChoiceLoss;
                let newTotalScore = this.state.totalScore - scoreLoss;

                if (this.props.difficulty === 'Hard') {
                    scoreLoss = this.state.hardWrongChoiceLoss;
                    displayScore = this.state.hardDisplayedWrongChoiceLoss;
                    newTotalScore = this.state.totalScore - scoreLoss;
                }

                if (this.state.rightChoiceCount === 0 && totalScore === 0 ) {
                    console.log('Run WrongChoice Routine -- rightChoiceCount == 0, totalScore == 0');

                    let live4 = this.state.hasLive4;
                    let live3 = this.state.hasLive3;
                    let live2 = this.state.hasLive2;
                    let live1 = this.state.hasLive1;
                    // let isGameOver = this.state.gameOver;

                    if (this.state.hasLive4 === true) {
                        live4 = false
                    } else if (this.state.hasLive3 === true) {
                        live3 = false
                    } else if (this.state.hasLive2 === true) {
                        live2 = false
                    } else if (this.state.hasLive1 === true) {
                        live1 = false;
                        // isGameOver = true;
                    }

                    this.setState({ 
                        roundScore: scoreLoss,
                        displayedRoundScore: displayScore,
                        isRoundScoreLoss: true,
                        hasLive1: live1,
                        hasLive2: live2,
                        hasLive3: live3,
                        hasLive4: live4,
                        // gameOver: isGameOver,
                        wrongRoundChoices: wrongChoices, 
                        rightUserOption: false, 
                        clickedOption: domID
                    });

                } else if (this.state.rightChoiceCount >= 1 && newTotalScore > 0) {
                    console.log('Run WrongChoice Routine -- rightChoiceCount >= 1, totalScore > 0');
                    let live4 = this.state.hasLive4;
                    let live3 = this.state.hasLive3;
                    let live2 = this.state.hasLive2;
                    let live1 = this.state.hasLive1;
                    // let isGameOver = this.state.gameOver;

                    if (this.state.hasLive4 === true) {
                        live4 = false
                    } else if (this.state.hasLive3 === true) {
                        live3 = false
                    } else if (this.state.hasLive2 === true) {
                        live2 = false
                    } else if (this.state.hasLive1 === true) {
                        live1 = false;
                        // isGameOver = true;
                    }

                    this.setState({ 
                        roundScore: scoreLoss,
                        totalScore: newTotalScore,
                        displayedRoundScore: displayScore,
                        isRoundScoreLoss: true,
                        hasLive1: live1,
                        hasLive2: live2,
                        hasLive3: live3,
                        hasLive4: live4,
                        // gameOver: isGameOver,
                        wrongRoundChoices: wrongChoices, 
                        rightUserOption: false, 
                        clickedOption: domID
                    });
                } else if (this.state.rightChoiceCount >= 1 && newTotalScore <= 0) {

                    console.log('Run WrongChoice Routine -- rightChoiceCount >= 1, totalScore <= 0');

                    let live4 = this.state.hasLive4;
                    let live3 = this.state.hasLive3;
                    let live2 = this.state.hasLive2;
                    let live1 = this.state.hasLive1;
                    // let isGameOver = this.state.gameOver;

                    if (this.state.hasLive4 === true) {
                        live4 = false
                    } else if (this.state.hasLive3 === true) {
                        live3 = false
                    } else if (this.state.hasLive2 === true) {
                        live2 = false
                    } else if (this.state.hasLive1 === true) {
                        live1 = false;
                        // isGameOver = true;
                    }

                    this.setState({
                        roundScore: scoreLoss,
                        totalScore: newTotalScore,
                        displayedRoundScore: displayScore,
                        isRoundScoreLoss: true,
                        hasLive1: live1,
                        hasLive2: live2,
                        hasLive3: live3,
                        hasLive4: live4,
                        // gameOver:isGameOver,
                        wrongRoundChoices: wrongChoices, 
                        rightUserOption: false, 
                        clickedOption: domID
                    });
                }
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
                restartMission={this.state.restartMission}
            />
        };

        let currentUserRank = 'Visitor';

        if (this.props.userRank) {
            currentUserRank = this.props.userRank;
        }

        let secondsPerRound = this.state.simpleSecondsPerRound;

        if (this.props.difficulty === "Hard") {
            secondsPerRound = this.state.hardSecondsPerRound
        }


        let printedScore = numberWithCommas(this.state.totalScore);

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
                                    <button onClick={this.cancelGame}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                                            <path d="M70 55H20V5h50v50zm0-50L20 55m0-50l50 50"/>
                                        </svg>
                                    </button>
                                </div>
                                <div> 
                                    {this.props.gameType === 'Single' ?
                                        <button onClick={this.restartGame}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                                                <path d="M18.995 40.608V5h52.01v7.325m0 7.067V55h-52.01v-7.325M7.963 30l11.032 10.607L30.028 30m52.009.001L71.005 19.395 59.972 30.001"/>
                                            </svg>
                                        </button>
                                        :
                                        null
                                    }
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
                            <h3>SCORE:</h3>
                            { this.state.totalScore < 0 ? 
                                <span className={styles.negativeScore}>{printedScore}</span> 
                                : 
                                <span>{printedScore}</span>}
                        </div>                       
                    </div>
                </div>
                <div className={styles.activity}>
                    <div className={styles.timerPanel}>
                        <TimerPanel 
                            timerElapsed={this.props.roundTimerElapsed}
                            gameType={this.props.gameType}
                            rightUserOption={this.state.rightUserOption}
                            roundScore={this.state.displayedRoundScore}
                            timerAlmostUp={this.props.timerAlmostUp}
                            showSelect={this.state.showTimerPanelSelect}
                            showTimer={this.state.showTimerPanelTimer}
                            scoreLoss={this.state.isRoundScoreLoss}
                            secondsPerRound={secondsPerRound}
                            warningSecond={this.state.roundTimerWarningSecond}
                            gamePaused={this.state.gamePaused}
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
                { this.state.showCancelGame ?
                    <Dialogue 
                        cancelMission
                        onAbortCancelMission={this.abortCancelMission}
                        onConfirmCancelMission={this.confirmCancelMission}
                    />
                    :
                    null
                }
                { this.state.showRestartGame ?
                    <Dialogue 
                        restartMission
                        onAbortRestartMission={this.abortRestartMission}
                        onConfirmRestartMission={this.confirmRestartMission}
                    />
                    :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameType: state.game.gameData.type,
        gameStage: state.game.gameData.stage,
        difficulty: state.game.gameData.difficulty,
        
        roundTimerElapsed: state.game.roundTimerElapsed,
        timerAlmostUp: state.game.timerAlmostUp,

        levelStage: state.game.levelStage,
        startNextLevel: state.game.startNextLevel,
        level: state.game.level,
        levelScore: state.game.levelScore,

        screenTrackerActive: state.game.screenTrackerActive,

        // userRank will come from auth state
        userRank: "Place Marshal",
        isAuthenticated: false,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayerRoundOver: () => dispatch(actions.playerRoundOver()),
        // onLevelOver: () => dispatch(actions.levelOver()),
        // onMultilevelGameOver: () => dispatch(actions.multilevelGameOver()),
        onSingleGameOver: (totalRounds, rightCount, totalScore, gameEndReport) => dispatch(actions.singleGameOver(totalRounds, rightCount, totalScore, gameEndReport))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));