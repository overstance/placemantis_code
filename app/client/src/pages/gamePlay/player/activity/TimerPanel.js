import React, {useEffect} from 'react';
import './activity.scss';
import Timer from '../../Timer';
import {positionX} from '../../../../anime/position';
// import {usePreviousValue} from '../../../../utilities/utilities';

const TimerPanel = props => {

    // const previousTimeElapsed = usePreviousValue(props.timerElapsed);
    // const previousTimeAlmostUp = usePreviousValue(props.timerAlmostUp);

    useEffect(() => {

        if (props.timerElapsed || props.timerAlmostUp) {
            const elem = document.querySelector('.activityTimerPanelTimer');
            elem.style.color = '#ff1a00';
            console.log('change timer to red')
        } else if (props.timerElapsed ===  false || props.timerAlmostUp === false) {
            const elem = document.querySelector('.activityTimerPanelTimer');
            elem.style.color = '#d2ff77';
            console.log('change timer to back to green')
        }

        let positionProp = {
            animatedClass: '.activityTimerPanelPrompt span',
            loop: true,
            endDelay: 2000,
            translateX: [10, 0],
            direction: 'alternate'
        }

        positionX(positionProp);

    }, [props.timerElapsed, props.timerAlmostUp]);

    return(
        <div className='playerActivityTimerPanel'>
            <div className='activityTimerPanelTimer'>
                { props.timerElapsed &&  props.showTimer ? 
                    <span>Time Up</span>
                    :
                    null
                }
                { props.timerElapsed === false &&  props.showTimer ?
                    <Timer 
                        seconds={10}
                        almostUpWarning
                        timerType='roundTimer'
                        gameType={props.gameType}
                        dispatchOnEnd
                        terminateOnRightOption={props.rightUserOption}
                    />
                    :
                    null
                }

            </div>
            <div className='activityTimerPanelPrompter'>
                <div className='activityTimerPanelPrompt'>
                    { props.rightUserOption || props.timerElapsed ?
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
                    <div>
                        {props.roundScore}
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default TimerPanel;