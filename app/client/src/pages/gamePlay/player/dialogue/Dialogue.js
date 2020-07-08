import React/* , {useEffect} */ from 'react';
import './dialogue.scss';
import Button from '../../../../components/common/buttons/DialogueButton';

const Dialogue = props => {

    let options;
    let heading;

    if (props.cancelMission) {

        heading =
        <h3 className='cancelMission'>Cancel Mission?</h3>


        options =
        <div className="playerDialogueModalOptions">
            <div>
                <Button buttonClicked={props.onAbortCancelMission}>No</Button>   
            </div>
            <div>
                <Button buttonClicked={props.onConfirmCancelMission}>Yes</Button>                          
            </div>
        </div>
    } else if (props.restartMission) {
        heading =
        <h3>Restart Mission?</h3>

        options =
        <div className="playerDialogueModalOptions">
            <div>
                <Button buttonClicked={props.onAbortRestartMission}>No</Button>
            </div>
            <div>
                <Button buttonClicked={props.onConfirmRestartMission}>Yes</Button>                          
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