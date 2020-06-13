import React, {useEffect} from 'react';
import './homeSelect.scss';
import SelectHeader from './SelectHeader';
import {staggerPositionParts} from '../../../anime/position';
import {scaleElement} from '../../../anime/scale';

const SelectType = props => {

    useEffect(() => {

        let scaleProp = {
            animatedClass: '.homeResumeMissionDialogue',
            scaleFactor: [0.75, 1],
            transformOrigin: '50% 50%'
        }
        
        let positionProp1 = {
            animatedClass: '.homeResumeMission button',
            translateY: [1, -1],
            translateX: [0, 0],
            delayPerChild: 200,
            endDelay: 1500,
            opacity: [1, 1],
            direction: 'alternate',
            loop: true
        }

        staggerPositionParts(positionProp1);
        scaleElement(scaleProp);
    });

    return(
        <div className='homeResumeMission'>
            <div className='homeResumeMissionHeader'>
               <SelectHeader goBack={props.goBackSelected} />                    
            </div>
            <div className='homeResumeMissionDialogueWrapper'>
                <div className='homeResumeMissionDialogue'>
                    <div className='homeResumeMissionDialogueText'>
                        <div>You Have a Pending Multilevel Mission</div>
                        <span>Starting a New Mission Will Erase Pending Mission</span>
                    </div>
                    <div className='homeResumeMissionDialogueOptions'>
                        <div>
                            <button onClick={props.resumeSelected}>
                                Resume
                            </button>
                        </div>
                        <div>
                            <button onClick={props.startNewSelected}>
                                Start New
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectType;