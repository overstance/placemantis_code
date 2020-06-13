import React, {useEffect} from 'react';
import './homeSelect.scss';
import {positionX} from '../../../anime/position';
import {staggerScaleParts} from '../../../anime/scale';

const SelectHeader = props => {

    useEffect(() => {
        const positionProp = {
            animatedClass: '#home_select_go_back_button',
            duration: 1500,
            translateX: [-10, 0]
        }

        const scaleProp = {
            animatedClass: '.selectHeaderHeading svg g',
            scaleFactor: [0.5, 1],
            // opacity: [0, 1],
            staggerOrigin: 'last',
            transformOrigin: '50% 50%',
            delayPerChild: 100
        }

        positionX(positionProp);
        staggerScaleParts(scaleProp);
    });

    return (
        <div className='selectHeader'>
            <div className='selectHeaderGoBack'>
                <button onClick={props.goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                        <path id="home_select_go_back_button" fill="none" stroke="#5A24B2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M70.104 29.979H19.896M45 4.875L19.896 29.979 45 54.875"/>
                    </svg>
                </button>
            </div>
            <div className='selectHeaderHeading'>
                {props.children}
            </div>
        </div>
    )
}

export default SelectHeader;