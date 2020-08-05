import React, {useEffect, useState} from 'react';
import {shuffleArray, usePreviousValue} from '../../../../utilities/utilities';
import {simpleRotate} from '../../../../anime/rotate';
import './stage.scss';

const HintBoard = props => {

    const [shuffledNonImageHints, setShuffledNonImageHints] = useState(/* [{type: '', value: ''}, {type: '', value: ''}, {type: '', value: ''}] */[]);

    let place = props.place;
    let placeName = place.domID;
    let previousPlaceName = usePreviousValue(placeName);

    useEffect(() => {
        console.log(previousPlaceName, placeName);
        
        if (placeName !== '' && previousPlaceName !== placeName) {
            let nonImageHints = [];
            if (place.capital !== "") {
                nonImageHints.push({type: "Capital:", value : place.capital})
            }
        
            if (place.currency !== "") {
                nonImageHints.push({type: "Currency:", value: place.currency})
            }
        
            if (place.commonLanguages.length >= 1) {
                let temp = shuffleArray(place.commonLanguages);
                let commonLanguage = temp[0];
                nonImageHints.push({type: "Common Language:", value: commonLanguage})
            }
        
            if (place.geographicFeatures.elevation !== "") {
                nonImageHints.push({type: "Elevation:", value: place.geographicFeatures.elevation})
            }
        
            if (place.geographicFeatures.forest !== "") {
                nonImageHints.push({type: "Forest:", value: place.geographicFeatures.forest})
            }
        
            if (place.geographicFeatures.desert !== "") {
                nonImageHints.push({type: "Desert:", value: place.geographicFeatures.desert})
            }
        
            if (place.geographicFeatures.waters !== "") {
                nonImageHints.push({type: "Water:", value: place.geographicFeatures.waters})
            }
        
            if (place.callingCode !== "") {
                nonImageHints.push({type: "Calling Code:", value: place.callingCode})
            }
        
            if (place.touristAttractions.length >= 1) {
                let temp = shuffleArray(place.touristAttractions);
                let touristAttraction = temp[0];
                nonImageHints.push({type: "Tourist Attraction:", value: touristAttraction})
            }
        
            setShuffledNonImageHints(shuffleArray(nonImageHints));
            console.log(nonImageHints);
        }

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

        return() => {}

    }, [place, previousPlaceName, placeName, props.showHints]);

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
    } else if (placeName === "French_Guiana") {
        placeName = 'France'
    }


    let hint1 = null;
    let hint2 = null;
    let hint3 = null;

    if (shuffledNonImageHints.length >= 3) {
        let nonImageHintsShuffled = shuffledNonImageHints;
        let firstHint = nonImageHintsShuffled[0];
        let secondHint = nonImageHintsShuffled[1];
        let thirdHint = nonImageHintsShuffled[2];

        if (props.difficulty === 'Simple') {
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
        
                hint2 = 
                <div className='hintType2'>
                    <div>
                        {secondHint.type}
                    </div>
                    <span>
                        {secondHint.value}
                    </span>
                </div>

            } else if (place.flag === false && place.emblem) {
                
                hint1 = 
                <div className='hintType1'>
                    <div>
                        Emblem:
                    </div>
                    <div>
                        <img src={`/images/emblems/${placeName + '.svg'}`} alt="flag"/>
                    </div>
                </div>
        
                hint2 = 
                <div className='hintType2'>
                    <div>
                        {secondHint.type}
                    </div>
                    <span>
                        {secondHint.value}
                    </span>
                </div>
            } else if (place.flag === false && place.emblem === false) {
               
                hint1 = 
                <div className='hintType2'>
                    <div>
                        {firstHint.type}
                    </div>
                    <span>
                        {firstHint.value}
                    </span>
                </div>

                hint2 = 
                <div className='hintType2'>
                    <div>
                        {secondHint.type}
                    </div>
                    <span>
                        {secondHint.value}
                    </span>
                </div>
            }

            hint3 =
            <div className='hintType2'>
                <div>
                    {thirdHint.type}
                </div>
                <span>
                    {thirdHint.value}
                </span>
            </div>
        } else if (props.difficulty === 'Hard') {
            
            hint1 = 
            <div className='hintType2'>
                <div>
                    {firstHint.type}
                </div>
                <span>
                    {firstHint.value}
                </span>
            </div>

            hint2 = 
            <div className='hintType2'>
                <div>
                    {secondHint.type}
                </div>
                <span>
                    {secondHint.value}
                </span>
            </div>

            /* hint3 =
            <div className='hintType2'>
                <div>
                    {thirdHint.type}
                </div>
                <span>
                    {thirdHint.value}
                </span>
            </div> */

        }
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
                    <div>
                        {hint1}
                    </div>
                    <div>
                        {hint2}
                    </div>
                    { props.difficulty === "Hard" ?
                        null :
                        <div>
                            {hint3}
                        </div>
                    }
                </div>
                :
                null
            }
        </div>
    )
}

export default HintBoard