import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Timer extends Component {

    state = {
        minutes: 0,
        seconds: 30
    }

    componentDidMount() {
        if ((this.props.minutes && this.props.seconds) || this.props.minutes) {            
            this.setState({minutes: this.props.minutes, seconds: this.props.seconds || 0}, () => {               
                this.timerInterval = setInterval(() => {
                    const { seconds, minutes } = this.state;
                    let warningSecond = this.props.warningSecond || 5;
        
                    if (seconds > 0) {
                        this.setState(({ seconds }) => ({
                            seconds: seconds - 1
                        }))

                        if (this.props.almostUpWarning && minutes === 0 && seconds === warningSecond && this.props.timerType === 'roundTimer') {                            
                            this.roundTimerWarning();
                        }

                        if (this.props.timerType === 'roundTimer' && this.props.terminateOnRightOption === true) {
                            this.playerRoundOver();
                        }
                    }

                    if (seconds === 0) {
                        if (minutes === 0) {
                            // console.log('dispatch m&s action');
                            this.timerEnd();
                            clearInterval(this.timerInterval)
                        } else {
                            this.setState(({ minutes }) => ({
                                minutes: minutes - 1,
                                seconds: 59
                            }))
                        }
                    } 
                }, 1000)
            });
        } else if (this.props.seconds) {
            this.setState({seconds: this.props.seconds}, () => {
                // console.log('seconds only: ', this.state.seconds);
                this.timerInterval = setInterval(() => {
                    const {seconds} = this.state;
                    let warningSecond = this.props.warningSecond || 5;

                    if (seconds > 0) {
                        this.setState(({ seconds }) => ({
                            seconds: seconds - 1
                        }))

                       if (seconds === warningSecond && this.props.timerType === 'roundTimer') {                           
                            this.roundTimerWarning();
                        }

                        if (this.props.timerType === 'roundTimer' && this.props.terminateOnRightOption === true) {
                            this.playerRoundOver();
                        }
                    }
                    if (seconds === 0) {
                        // console.log('dispatch s only action');
                        this.timerEnd();
                        clearInterval(this.timerInterval);
                    } 
                }, 1000)
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    timerEnd = () => {
        if (this.props.timerType === 'gameType' && this.props.dispatchOnEnd && this.props.gameType === 'Single') {
            this.props.onSingleTypeTimerEnd();
        } else if (this.props.timerType === 'gameType' && this.props.dispatchOnEnd && this.props.gameType === 'Multilevel') {
            this.props.onMultilevelTypeTimerEnd();
        } else if (this.props.timerType === 'roundTimer' && this.props.dispatchOnEnd) {
            this.props.onPlayerRoundTimerEnd();
        }
        else if (this.props.timerType === 'levels' && this.props.dispatchOnEnd) {
            this.props.onLevelsDailogueTimerEnd(this.props.level, this.props.stage);
        } else if (this.props.timerType === 'felicitator' && this.props.dispatchOnEnd) {
            // this.props.onFelicitatorTimerEnd();
        } else if (this.props.timerType === 'roundIntervalTimer') {
            this.props.onRoundIntervalTimerEnds();
        } else if (this.props.timerType === 'prePlayerTimer') {
            this.props.onPrePlayerTimerEnd();
        }
    }

    playerRoundOver = () => {
        clearInterval(this.timerInterval);
    }

    roundTimerWarning = () => {
        this.props.onRoundTimerAlmostUp()
    }

    render() {

        let remaining;

        if (this.props.invisible) {
            remaining = 
            <span></span>
        } else if ((this.props.seconds && this.props.minutes) || this.props.minutes) {
            remaining = 
            <span>{this.state.minutes + "m: " + this.state.seconds + "s"}</span>
        } else if (this.props.seconds) {
            remaining = 
            <span>{this.state.seconds + "s"}</span>
        }

        return(remaining);
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onSingleTypeTimerEnd: () => dispatch(actions.singleTypeTimerEnd()),
        onMultilevelTypeTimerEnd: () => dispatch(actions.multilevelTypeTimerEnd()), 
        onPlayerRoundTimerEnd: () => dispatch(actions.playerRoundTimerEnd()),
        onLevelsDailogueTimerEnd: (level, stage) => dispatch(actions.levelsDailogueTimerEnd(level, stage)),
        onRoundTimerAlmostUp: () => dispatch(actions.roundTimerAlmostUp()),
        onPrePlayerTimerEnd: () => dispatch(actions.prePlayerTimerEnd()),
        // onFelicitatorTimerEnd: () => dispatch(actions.felicitatorTimerEnd()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);