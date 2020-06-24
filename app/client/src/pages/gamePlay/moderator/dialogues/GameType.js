import React, {useEffect} from 'react';
import '../moderator.scss';
import Timer from '../../../../components/common/timer/Timer';
import {positionX} from '../../../../anime/position';

const GameType = props => {

    useEffect(() => {

        const animationProp = {
            animatedClass: '.gameTypeDialogue',
            translateX: [500, 0],
            duration: 500,
        }

        positionX(animationProp);
    }, []);

    return(
        <div className='gameTypeDialogue'>
            <div className='gameTypeDialogueTimer'>
                <Timer 
                    seconds={4}
                    // minutes={1}
                    // almostUpWarning
                    timerType='gameType'
                    gameType={props.type}
                    dispatchOnEnd
                />
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
                { props.stage ?
                    <div>
                        <h3>
                            Stage:
                        </h3>
                        <span>
                            {props.stage}
                        </span>
                    </div>
                    :
                    null
                }
                { props.scope === 'World' ?
                    <div>
                        <h3>
                            Stage:
                        </h3>
                        <span>
                            {props.scope}
                        </span>
                    </div>
                    :
                    null
                }
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