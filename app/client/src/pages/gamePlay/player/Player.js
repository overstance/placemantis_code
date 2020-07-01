import React, {/* useEffect, useState */Component} from 'react';
import styles from './player.module.scss';
import {Places} from './places';
import {shuffleArray, /* numberWithCommas, */ numberWithSpaces} from '../../../utilities/utilities';
import SouthernAfrica from './stages/SouthernAfrica';
import {connect} from 'react-redux';
import Avatar from '../../../components/common/Avatar';
import HintBoard from '../player/stage/HintBoard';
import RankBoard from '../player/stage/RankBoard';

class Player extends Component {
    state = {
        totalRounds: 0,
        nextRound: 0,
        stagePlaces: [],
        nextPlaceName: '',
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
        roundOptions: [],
        showHints: false,
        showUserRanking: false,

        totalScore: 1000000,
        levelScore: 0
    }

    componentDidMount() {
        if (this.props.gameType === 'Single') {
            this.initializeSingleGame();
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
            ...this.state,
            totalRounds: placesShuffled.length,
            nextRound: round,
            stagePlaces: placesShuffled,
            nextPlace: place,
            featuredPlaces: featuredFiltered,
            roundOptions: optionsShuffled,
            nextPlaceName: placeDomID

        })
        
        console.log('initializing game', options, optionsShuffled);
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
    }

    showRankingClicked = () => {
        this.setState((prevState) => {
            return {
                showUserRanking: !prevState.showUserRanking
            }
        });
    }
    
    render () {

        let playerStage;

        if (this.props.gameStage === 'Southern Africa') {
            playerStage = 
            <SouthernAfrica 
                nextPlace={this.state.nextPlaceName}
            />
        };

        let currentUserRank = 'Visitor';

        if (this.props.userRank) {
            currentUserRank = this.props.userRank
        }

        let printedScore = numberWithSpaces(this.state.totalScore);

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
                            {/* <div></div> */}
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
                    <div className={styles.timer}>

                    </div>
                    <div className={styles.options}>

                    </div>
                    <div className={styles.round}>

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

        levelStage: state.game.levelStage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);