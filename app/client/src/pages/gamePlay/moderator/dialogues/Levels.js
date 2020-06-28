import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Timer from '../../Timer';
import {positionX} from '../../../../anime/position';

const Levels = props => {

    const levelNumber = props.level + 1;
    const levelStage = props.shuffledStages[props.level];

    useEffect(() => {
        const animationProp = {
            animatedClass: '.levelsDialogue',
            translateX: [500, 0],
            duration: 500,
        }

        positionX(animationProp);

        return () => {
            props.onSetGameLevel(levelNumber, levelStage);
            // console.log(props.shuffledStages, levelNumber, levelStage);
        };
    })
    
    return(
        <div className='levelsDialogue'>            
            <div className='levelsDialogueMessages'>
                <div>
                    <h3>
                        {"Level" + levelNumber}
                    </h3>
                </div>
                <img src={`/images/levels_map/${levelStage + '.svg'}`} alt="levels map"/>
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
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        /* level: state.game.level,
        shuffledStages: state.game.shuffledStages */
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetGameLevel: (levelNumber, levelStage) => dispatch(actions.setGameLevel(levelNumber, levelStage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Levels);