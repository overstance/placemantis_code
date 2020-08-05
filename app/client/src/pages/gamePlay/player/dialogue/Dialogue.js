import React, {useEffect} from 'react';
import './dialogue.scss';
import DialogueButton from '../../../../components/common/buttons/Button';
import {scaleElement} from '../../../../anime/scale';

const Dialogue = props => {

    useEffect(() => {

        let scaleProp = {
            animatedClass: '.playerDialogueModal',
            scaleFactor: [0.75, 1],
            transformOrigin: '50% 50%'
        }
 
        scaleElement(scaleProp);
    });

    let options;
    let heading;

    if (props.cancelMission) {

        heading =
        <h3 className='cancelMission'>Cancel Mission?</h3>


        options =
        <div className="playerDialogueModalOptions">
            <div>
                <DialogueButton
                    category="dailogues" 
                    buttonClicked={props.onAbortCancelMission} 
                    type="No"
                />   
            </div>
            <div>
                <DialogueButton
                    category="dailogues" 
                    buttonClicked={props.onConfirmCancelMission} 
                    type="Yes"
                />                          
            </div>
        </div>
    } else if (props.restartMission) {
        heading =
        <h3>Restart Mission?</h3>

        options =
        <div className="playerDialogueModalOptions">
            <div>
                <DialogueButton
                    category="dailogues" 
                    buttonClicked={props.onAbortRestartMission} 
                    type="No"
                />
            </div>
            <div>
                <DialogueButton
                    category="dailogues" 
                    buttonClicked={props.onConfirmRestartMission} 
                    type="Yes"
                />                          
            </div>
        </div>
    }

    return (
        <div className="playerDialogue">
            <div className="playerDialogueModal">
                <div className="playerDialogueModalHead">
                    {heading}
                </div>
                <div className="playerDialogueModalOptionsWrapper">
                    {options}
                </div>
            </div>
            <div className="playerDialogueBackGround"/>
        </div>
    )
}

export default Dialogue;