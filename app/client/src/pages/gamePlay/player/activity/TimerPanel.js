import React, {useEffect} from 'react';
import './activity.scss';
import Timer from '../../Timer';
import {positionX} from '../../../../anime/position';
import {usePreviousValue} from '../../../../utilities/utilities';

const TimerPanel = props => {
    const previouslyPaused = usePreviousValue(props.gamePaused);

    useEffect(() => {

        if (props.timerElapsed || props.timerAlmostUp) {
            const elem = document.querySelector('.activityTimerPanelTimer');
            elem.style.color = '#ff1a00';
        } else if (props.timerElapsed ===  false || props.timerAlmostUp === false) {
            const elem = document.querySelector('.activityTimerPanelTimer');
            elem.style.color = '#d2ff77';
        } 
        
        if (previouslyPaused === true && props.gamePaused === false) {
            const elem = document.querySelector('.activityTimerPanelTimer');
            elem.style.color = '#d2ff77';
        }

        let positionProp = {
            animatedClass: '.activityTimerPanelPrompt span',
            loop: true,
            endDelay: 2000,
            translateX: [10, 0],
            direction: 'alternate'
        }

        positionX(positionProp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.timerElapsed, props.timerAlmostUp, props.gamePaused]);

    return(
        <div className='playerActivityTimerPanel'>
            <div className='activityTimerPanelTimer'>
                { props.timerElapsed && props.gamePaused === false && props.showTimer ? 
                    <span>Time Up</span>
                    :
                    null
                }
                { props.timerElapsed === false && props.gamePaused === false &&  props.showTimer ?
                    <Timer 
                        seconds={props.secondsPerRound}
                        almostUpWarning
                        timerType='roundTimer'
                        gameType={props.gameType}
                        dispatchOnEnd
                        terminateOnRightOption={props.rightUserOption}
                        warningSecond={props.warningSecond}
                    />
                    :
                    null
                }
            </div>
            <div className='activityTimerPanelPrompter'>
                <div className='activityTimerPanelPrompt'>
                    { props.rightUserOption || props.timerElapsed || props.gamePaused ?
                        null :
                        <>
                            <h3>Select</h3>
                            <div>
                                <span>{"->"}</span>                        
                            </div>
                        </>
                    }
                </div>
                <div className='activityTimerPanelScore'>
                    { props.scoreLoss ?
                        <div className='timerPanelScoreLoss'>
                            {props.roundScore}
                        </div>
                        :
                        <div>
                            {props.roundScore}
                        </div>
                    }
                </div>   
            </div>
        </div>
    )
}

export default TimerPanel;