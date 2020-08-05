import React, {useEffect} from 'react';
import Timer from '../../Timer';
import {positionX} from '../../../../anime/position';
import {stringUnderscoreForSpace} from '../../../../utilities/utilities';
import '../moderator.scss';

const Levels = props => {

    const levelNumber = props.level + 1;
    const levelStage = props.shuffledStages[props.level];
    const levelStageUnspaced = stringUnderscoreForSpace(levelStage);

    useEffect(() => {
        const animationProp = {
            animatedClass: '.levelsDialogue',
            translateX: [500, 0],
            duration: 500,
        }

        positionX(animationProp);
    });
    
    return(
        <div className='levelsDialogue'>            
            <div className='levelsDialogueMessages'>
                <div>
                    <h3>
                        {"Level " + levelNumber}
                    </h3>
                </div>
                <img src={`/images/levels_map/${levelStageUnspaced + '.svg'}`} alt="levels map"/>
                <div>
                    <div className='levelsDialogueStage'>
                        <h3>
                            Stage:
                        </h3>
                        <span>
                            {levelStage}
                        </span>
                    </div>
                </div>
            </div>
            <div className='levelsDialogueTimer'>
                <Timer 
                    seconds={3}
                    timerType='levels'
                    gameType='Multilevel'
                    dispatchOnEnd
                    level={levelNumber}
                    stage={levelStage}
                />
            </div>
        </div>
    )
}

export default Levels;