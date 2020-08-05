import React, {useEffect} from 'react';
import './activity.scss';

const BonusMeter = props => {

    const currentPointCount = props.pointCount;
    const currentLiveCount = props.liveCount;

    useEffect(() => {
        if (currentPointCount === 0) {
            let elem = document.querySelector('.playerBonusMeterRoundCount')
            elem.style.color = '#8032ff';
        } else if (currentPointCount > 0) {
            let elem = document.querySelector('.playerBonusMeterRoundCount')
            elem.style.color = '#252cff';
        }

        if (currentLiveCount === 0) {
            let elem = document.querySelector('.playerBonusMeterLiveCount')
            elem.style.color = '#8032ff';
        } else if (currentLiveCount > 0) {
            let elem = document.querySelector('.playerBonusMeterLiveCount')
            elem.style.color = '#252cff';
        }

    }, [currentPointCount, currentLiveCount])
   return(
       <div className ='playerBonusMeter'>
           <div className ='playerBonusMeterLabel'>
            Bonus Meter
           </div>
           <div className ='playerBonusMeterParts'>
                <div className ='playerBonusMeterParameter'>
                    <div className ='playerBonusMeterPartLabel'>
                        Points:
                    </div>
                    <div className ='playerBonusMeterPartsMain'>
                        <h3 className ='playerBonusMeterRoundCount'>{props.pointCount}</h3>
                        <span>/</span>
                        <h4>
                            { props.difficulty === "Hard" ?
                                props.pointCountMaxHard : props.pointCountMaxSimple
                            }
                        </h4>
                    </div>
                </div>
                <div className ='playerBonusMeterParameter'>
                    <div className ='playerBonusMeterPartLabel'>
                        Live:
                    </div>
                    <div className ='playerBonusMeterPartsMain'>
                        <h3 className ='playerBonusMeterLiveCount'>{props.liveCount}</h3>
                        <span>/</span>
                        <h4>
                            { props.difficulty === "Hard" ?
                                props.liveCountMaxHard : props.liveCountMaxSimple
                            }
                        </h4>
                    </div>
                </div>
           </div>
       </div>
   )
}

export default BonusMeter;