import React, {useEffect} from 'react';
import {shuffleArray} from '../../../../utilities/utilities';
import {simpleRotate} from '../../../../anime/rotate';
import './stage.scss';

const HintBoard = props => {

    useEffect(() => {
        if (props.showHints === true) {
            let rotateProps = {
                animatedClass: '.hintBoardHeaderArrow',
                rotate: [0, 180],
                transformOrigin: '50% 50%'
            }

            simpleRotate(rotateProps);
        }

        if (props.showHints === false) {
            let rotateProps = {
                animatedClass: '.hintBoardHeaderArrow',
                rotate: [180, 0],
                transformOrigin: '50% 50%'
            }

            simpleRotate(rotateProps);
        }

    }, [props.showHints]);

    let place = props.place;
    let placeName = place.domID;

    if (placeName === "East_Thrace_Turkey") {
        placeName = "Turkey"
    } else if (placeName === "Siberia_Russia") {
        placeName = "Russia"
    } else if (placeName === "Anatolia_Turkey") {
        placeName = "Turkey"
    } else if (placeName === "Russia_Europe") {
        placeName = "Russia"
    } else if (placeName === "Svalbard_and_Jan_Mayen_Islands") {
        placeName = 'Norway'
    }


    let hint1 = null;
    let hint2 = null;
    let hint3 = null;

    if (place.flag && place.emblem) {
        hint1 = 
        <div className='hintType1'>
            <div>
                Flag:
            </div>
            <div>
                <img src={`/images/flags/${placeName + '.svg'}`} alt="flag"/>
            </div>
        </div>

        hint2 = 
        <div className='hintType1'>
            <div>
                Emblem:
            </div>
            <div>
                <img src={`/images/emblems/${placeName + '.svg'}`} alt="emblem"/>
            </div>
        </div>
        
    } else if (place.flag && place.emblem === false) {
        hint1 = 
        <div className='hintType1'>
            <div>
                Flag:
            </div>
            <div>
                <img src={`/images/flags/${placeName + '.svg'}`} alt="flag"/>
            </div>
        </div>

        if (place.currency) {
            hint2 = 
            <div className='hintType2'>
                <div>
                    Currency:
                </div>
                <span>
                    {place.currency}
                </span>
            </div>
        } else if (place.commonLanguages.length >= 1) {
            let languages = shuffleArray(place.commonLanguages);

            hint2 =
            <div className='hintType2'>
                <div>
                    Language:
                </div>
                <span>
                    {languages[0]}
                </span>
            </div>
        }
    } else if (place.flag === false && place.emblem) {
        hint1 = 
        <div className='hintType1'>
            <div>
                Flag:
            </div>
            <div>
                <img src={`/images/emblems/${placeName + '.svg'}`} alt="flag"/>
            </div>
        </div>

        if (place.currency) {
            hint2 = 
            <div className='hintType2'>
                <div>
                    Currency:
                </div>
                <span>
                    {place.currency}
                </span>
            </div>
        } else if (place.commonLanguages.length >= 1) {
            let languages = shuffleArray(place.commonLanguages);

            hint2 =
            <div className='hintType2'>
                <div>
                    Language:
                </div>
                <span>
                    {languages[0]}
                </span>
            </div>
        }
    }

    if (place.geographicFeatures.elevation !== '') {
        hint3 =
        <div className='hintType2'>
            <div>
                Elevation:
            </div>
            <span>
                {place.geographicFeatures.elevation}
            </span>
        </div>
    } else if (place.geographicFeatures.forest !== '') {
        hint3 =
        <div className='hintType2'>
            <div>
                Forest:
            </div>
            <span>
                {place.geographicFeatures.forest}
            </span>
        </div>
    } else if (place.geographicFeatures.desert !== '') {
        hint3 =
        <div className='hintType2'>
            <div>
                Desert:
            </div>
            <span>
                {place.geographicFeatures.desert}
            </span>
        </div>
    } else if (place.geographicFeatures.waters !== '') {
        hint3 =
        <div className='hintType2'>
            <div>
                Waters:
            </div>
            <span>
                {place.geographicFeatures.waters}
            </span>
        </div>
    } else if (place.callingCode !== '') {
        hint3 =
        <div className='hintType2'>
            <div>
                Calling Code:
            </div>
            <span>
                {place.callingCode}
            </span>
        </div>
    } else if (place.touristAttractions.length > 1) {

        let attractions = shuffleArray(place.touristAttractions);

        hint3 =
        <div className='hintType2'>
            <div>
                Attractions:
            </div>
            <span>
                {attractions[0]}
            </span>
        </div>
    }

    return(
        <div className='stageHintBoard'>
            <div className='hintBoardHeader'>
                <button onClick={props.showHintsClicked}>
                    <span>Hints</span>
                    <div>
                        <svg className='hintBoardHeaderArrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                            <path d="M45 60H3.22C.572 60-.94 57.08.649 55.034l20.247-26.069L42.429 1.241c1.286-1.655 3.857-1.655 5.142 0l21.533 27.724 20.247 26.069C90.94 57.08 89.429 60 86.78 60H45z"/>
                        </svg>
                    </div>               
                </button>
            </div>
            { props.showHints ?
                <div className='stageHintBoardHints'>
                    { props.difficulty === 'Simple' ?
                        <div>
                            {hint1}
                        </div>
                        :
                        null
                    }
                    { props.difficulty === 'Simple' ?
                        <div>
                            {hint2}
                        </div>
                        :
                        null
                    }
                    <div>
                        {hint3}
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default HintBoard