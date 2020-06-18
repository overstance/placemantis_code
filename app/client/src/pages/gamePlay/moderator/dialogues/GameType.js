import React from 'react';
import '../moderator.scss';

const GameType = props => {
    return(
        <div className='gameTypeDialogue'>
            <div className='gameTypeDialogueTimer'>
                <div>
                    30s
                </div>
            </div>
            <div className='gameTypeDialogueMessages'>
                <div>
                    <h3>
                        GameType:
                    </h3>
                    <span>
                        {props.type}
                    </span>
                </div>
                <div>
                    <h3>
                        Stage:
                    </h3>
                    <span>
                        {props.stage}
                    </span>
                </div>
                <div>
                    <h3>
                        Difficulty:
                    </h3>
                    <span>
                        {props.difficulty}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GameType;