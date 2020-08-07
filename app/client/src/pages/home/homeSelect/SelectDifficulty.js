import React, {useEffect} from 'react';
import './homeSelect.scss';
import SelectHeader from '../../../components/common/header/PageHeader';
import {staggerPositionParts} from '../../../anime/position';

const SelectDifficulty = props => {

    useEffect(() => {
        let positionProp1 = {
            animatedClass: '.homeSelectDifficulty button',
            translateX: [-30, 0],
            translateY: [0, 0],
            delayPerChild: 300
        }

        staggerPositionParts(positionProp1);
    });

    return(
        <div className='homeSelectDifficulty'>
            <div className='homeSelectDifficultyHeader'>
                <SelectHeader goBack={props.goBackSelected}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
    <g fill="#5A24B2">
      <path d="M345.983 56.157v16.104h-13.551c-1.76 0-2.904 1.584-2.377 3.256l6.953 22.175c3.52 11.439-6.513 20.151-17.424 20.151H304.36v-16.104H318c1.848 0 2.904-1.584 2.375-3.256l-6.863-22.175c-3.52-11.528 6.424-20.151 17.424-20.151h15.047zM371.769 117.843c-10.296 0-18.656-8.359-18.656-18.655V74.813c0-10.296 8.36-18.655 18.656-18.655h25.079v16.104h-25.079a2.555 2.555 0 00-2.553 2.552v4.136h27.632v16.104h-27.632v4.136a2.555 2.555 0 002.553 2.552h25.079v16.104h-25.079zM420.784 56.245v42.942a2.555 2.555 0 002.553 2.552h20.326v16.104h-20.326c-10.297 0-18.656-8.359-18.656-18.655V56.245h16.103zM469.8 117.843c-10.296 0-18.656-8.359-18.656-18.655V74.813c0-10.296 8.36-18.655 18.656-18.655h25.079v16.104H469.8a2.555 2.555 0 00-2.553 2.552v4.136h27.632v16.104h-27.632v4.136a2.555 2.555 0 002.553 2.552h25.079v16.104H469.8zM521.455 117.843c-10.295 0-18.655-8.359-18.655-18.655V74.813c0-10.296 8.36-18.655 18.655-18.655h25.08v16.104h-25.08a2.554 2.554 0 00-2.552 2.552v24.375a2.554 2.554 0 002.552 2.552h25.08v16.104h-25.08zM553.751 71.82V56.245h42.415V71.82h-13.111v46.022h-16.104V71.82h-13.2z"/>
    </g>
    <g fill="#5A24B2">
      <path d="M628.9 117.843V56.157h33.087c10.296 0 18.655 8.359 18.655 18.655v24.375c0 10.296-8.359 18.655-18.655 18.655l-33.087.001zm16.104-16.104h16.983a2.554 2.554 0 002.552-2.552V74.813a2.554 2.554 0 00-2.552-2.552h-16.983v29.478zM704.844 56.245v61.598H688.74V56.245h16.104zM712.764 117.843v-43.03c0-10.296 8.36-18.655 18.655-18.655h22.615v16.104h-22.615a2.554 2.554 0 00-2.552 2.552v4.136h25.167v16.104h-25.167v22.791h-16.103zM761.515 117.843v-43.03c0-10.296 8.36-18.655 18.655-18.655h22.615v16.104H780.17a2.554 2.554 0 00-2.552 2.552v4.136h25.167v16.104h-25.167v22.791h-16.103zM826.546 56.245v61.598h-16.104V56.245h16.104zM853.209 117.843c-10.295 0-18.655-8.359-18.655-18.655V74.813c0-10.296 8.36-18.655 18.655-18.655h25.08v16.104h-25.08a2.554 2.554 0 00-2.552 2.552v24.375a2.554 2.554 0 002.552 2.552h25.08v16.104h-25.08zM937.863 56.245v42.942c0 10.296-8.359 18.655-18.655 18.655h-14.432c-10.295 0-18.655-8.359-18.655-18.655V56.245h16.104v42.942a2.554 2.554 0 002.552 2.552h14.432a2.554 2.554 0 002.552-2.552V56.245h16.102zM961.888 56.245v42.942a2.554 2.554 0 002.552 2.552h20.328v16.104H964.44c-10.295 0-18.655-8.359-18.655-18.655V56.245h16.103zM981.513 71.82V56.245h42.415V71.82h-13.111v46.022h-16.104V71.82h-13.2zM1076.286 82.556c-1.848 6.688-6.071 11.088-11.088 13.288v21.999h-16.104V95.668c-5.016-2.2-9.239-6.601-11.087-13.112l-7.48-26.311h16.808l6.424 22.703c1.056 3.168 5.456 4.136 6.776 0l6.335-22.703h16.808l-7.392 26.311z"/>
    </g>
</svg>
                </SelectHeader>
            </div>
            <div className='homeSelectDifficultyLayout'>
                <div className='homeSelectDifficultyOptions'>
                    <div>
                        <button onClick={props.simpleSelected} className='homeSelectDifficultyTop'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464 174">
                                <path opacity=".8" fill="#D3FF78" d="M97.7 60.3c.4 7.4-3.3 13.3-6.7 19.5-4.5 8.1-8.9 16.4-14.4 23.9-5.2 6.9-11.5 15.6-20.1 18.2-6.9 2.2-15 1.2-19.6-4.9-11.3-15.2 7.8-31.2 18.9-39.1 7.4-5.3 15.5-9.7 23.4-14.2 1.9-1.2 18.1-9.9 18.5-3.4z"/>
                                <path fill="#5A24B3" d="M43.1 99.1c-9.4 8.6 4 23.2 13.4 14.6s-4-23.2-13.4-14.6c-4.1 3.7 4-3.7 0 0z"/>
                                <path fill="#78B300" d="M179.2 30.8c4.6-1.5 9.2-1.3 13.7.3.7.2 5.2 1.6 4.4 2.9-1.1 1.7-8.1 0-9.6-.3h.4c-2.6.1-5.3-.1-7.9-.6-.6-.2-3.1-1.6-1-2.3.8-.3-.3.1 0 0zM125.4 41.4c2.4.5 4.6 1.5 6.8 2.4l-.6-.2c4.1 1.2 8.5 2.2 12.3 4 2.7 1.3 8.5 4.1 7.3 8-1.5 5-8.3 1.3-11.2.1l.6.2c-4-1.1-8.1-2.2-11.8-3.8-2.4-1-4.7-2.6-6.7-4.3-2.8-2.4-.3-7.2 3.3-6.4 1.2.3-1.3-.3 0 0z"/>
                                <path fill="#ACFF00" d="M124.6 43c2.3.8 4.5 1.8 6.6 2.8l-.3-.1c5.2 1.6 10.5 2.9 15.3 5.7 1.1.6 6.6 3.8 2.7 5.1-2 .7-6-2-7.8-2.8l.3.1c-4-1.2-8.3-2.2-12.1-3.9-2.1-1.1-4.2-2.3-6.2-3.6-1.8-1.2-.4-4 1.5-3.3 1.2.4-.7-.3 0 0z"/>
                                <path fill="#78B300" d="M149.1 53.5c3.8-8.9 10.1-15.6 18.7-20.1l-.9.8c2.6-1.9 5.6-3.8 8.8-4.6 4.3-1 6.4 3.4 5.2 6.9-2.5 7.4-8.6 11.8-15.3 15.4l1-.9c-3.2 2.6-6.5 5.1-10.2 7.1-3.3 1.9-9.5.8-7.3-4.6.3-.6-.4 1.1 0 0z"/>
                                <path fill="#ACFF00" d="M150 54.4c4.8-8.6 10.6-14.3 19.1-19.2l-.6.5c2.1-1.8 6.6-5.9 9.6-5.5 4.8.7 1.3 6.3-.1 8.3-3.4 5.2-8.4 8.3-13.7 11.5l.7-.6c-2.2 1.9-4.4 3.8-6.7 5.6-1.5 1.1-3.7 3.4-5.7 3.5-2.2.1-3.6-2.2-2.6-4.1.6-1-.4.9 0 0z"/>
                                <path fill="#78B300" d="M99.3 67.5c.4 7.7-.6 15.5-.7 23.2-.2 9.4-.4 18.8-2.5 28.1-1.8 7.6-5.5 14.5-12.8 18.1-5.8 2.9-12.7 2.5-16.7-3.2-9-12.6 2.1-33.4 7.6-45.1 3.6-7.5 6.6-15.9 11.1-23 3.6-5.6 13.5-6.9 14 1.9z"/>
                                <path fill="#ACFF00" d="M97.7 67c-.4 7-1.3 13.9-1.7 20.8-.6 9.5-.8 19.1-3 28.5-1.4 6.7-3.8 13.1-9.1 17.8-4.2 3.8-10.7 6-14.9.8-8.9-11 2-33.3 6.8-43.6 3.6-8 6.9-16.1 10.6-24 1-2.2 2.2-4.8 4.8-5.4 3.4-.9 6.6 1.8 6.5 5.1z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M82.9 80.6c4 7.4 12 2.1 14-3.6M77.7 91.9c4.6 10 15.5 4.7 18.4-3.5m-23.3 15.3c4.9 12.7 19 6 22.4-3.9m-26.4 17.6c6.6 13.3 22.1 4.7 25.6-6.1"/>
                                <path fill="#78B300" d="M133.5 30.7c-1.8 5.1-4.5 9.8-7.4 14.3-3.1 4.8-9 8.4-13.4 12.1-3.9 3.3-20.3 21.5-25.2 11-2.2-4.7 2.7-8.2 5.5-11.2 5.5-5.7 10.8-11.6 16.2-17.4 4.5-4.8 8.2-8.7 14.1-12.1 2-1.2 4.7-3.2 7.2-2.7 2.6.7 3.9 3.6 3 6z"/>
                                <path fill="#ACFF00" d="M132.8 30c-5.1 11-12.6 17.9-21.5 25.7-4.9 4.3-9.7 8.5-14.7 12.7-3.4 2.9-10.1 1-7.8-4.4 1.4-3.2 5.6-6.2 7.9-8.6 5-5.2 10-10.4 15.1-15.6 4.2-4.4 8.9-8.3 13.9-11.9 1.4-1 3.2-2.9 5.2-2.5 2 .4 2.8 2.8 1.9 4.6z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M105.8 165.1l1.6 5.6M106.1 159l-.3 6.1"/>
                                <path fill="#78B300" d="M96.5 87c2.1 3 3.3 7.3 2.9 11-.2 2.9-3.9 4.4-5.8 2-2.5-2.2-3.2-8-2.9-11 .2-3 3.8-4.4 5.8-2z"/>
                                <path fill="#ACFF00" d="M94.8 87.4c1.3 3.1 2.2 6.4 2.7 9.7.2 1.3-1 5.3-2.3 2.5-1.8-1.2-2.4-7.7-2.7-9.7-.2-1.3 1-5.3 2.3-2.5z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M97.3 102.5l10.4 24.6"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M97.3 102.5l10.4 24.6"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M109.1 130.3l-2.8 26.6"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M109.1 130.3l-2.8 26.6"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M106.4 145.3l1.6 5.6M106.7 139.3l-.3 6"/>
                                <path fill="#78B300" d="M102.2 67.8c1 3.6.7 8-.8 11.4-1.2 2.7-5.1 2.9-6.2 0-1.7-2.9-.5-8.6.8-11.4 1.2-2.7 5.1-2.9 6.2 0z"/>
                                <path fill="#ACFF00" d="M100.5 67.6c.3 3.3 0 6.7-.6 10-.2 1.3-2.7 4.7-3 1.6-1.3-1.8.3-8 .6-10 .2-1.2 2.7-4.7 3-1.6z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M97.9 82.7l10.4 24.7"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M97.9 82.7l10.4 24.7"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M109.7 110.5l-2.8 26.7"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M109.7 110.5l-2.8 26.7"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="7.2" strokeLinecap="round" strokeMiterlimit="10" d="M133.1 25.6l-2.1 2.1"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M64.3 159.8l-3 5M65.6 153.8l-1.3 6"/>
                                <path fill="#78B300" d="M95.3 87.4c.5 3.7-.5 8-2.6 11.1-1.6 2.5-5.5 2.1-6.1-1-1.2-3.1.9-8.5 2.6-11.1 1.6-2.4 5.6-2 6.1 1z"/>
                                <path fill="#ACFF00" d="M93.7 87c-.3 3.3-1.1 6.7-2.2 9.8-.4 1.2-3.4 4.2-3.2 1.1-1-1.9 1.5-7.9 2.2-9.8.4-1.2 3.4-4.2 3.2-1.1z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M88.8 101.5l-16.5 21.1"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M88.8 101.5l-16.5 21.1"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M70.2 125.3L66 151.7"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M70.2 125.3L66 151.7"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M91.4 145.4l-1.1 5.7M90.6 139.4l.8 6"/>
                                <path fill="#78B300" d="M96 66.8c1.6 3.3 2.1 7.7 1.2 11.3-.7 2.8-4.5 3.7-6.1 1-2.1-2.5-1.9-8.4-1.2-11.3.8-2.8 4.6-3.7 6.1-1z"/>
                                <path fill="#ACFF00" d="M94.4 67c.8 3.2 1.2 6.6 1.1 10 0 1.3-1.8 5.1-2.7 2.1-1.6-1.5-1.1-8-1.1-10 0-1.3 1.8-5.1 2.7-2.1z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M94.4 82.3l-8.3 25.4"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M94.4 82.3l-8.3 25.4"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M85.1 111l5.1 26.3"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M85.1 111l5.1 26.3"/>
                                <path fill="#78B300" d="M145.9 91.9c1.5 4.7 1.2 9.2-.5 13.7-.3.7-1.7 5.1-3 4.3-1.7-1.1.2-8.1.5-9.5l-.1.4c0-2.6.2-5.3.8-7.8.2-.7 1.6-3.2 2.3-1.1.2.8-.1-.3 0 0zM118.6 35.6c.7 2.3 1.1 4.7 1.3 7.1l-.1-.7c1 4.1 2.4 8.4 2.7 12.7.3 3 .6 9.4-3.3 10.3-5.1 1.2-5.3-6.5-5.7-9.6l.1.7c-1-4-2.2-8.1-2.6-12.2-.3-2.6-.1-5.3.4-7.9.7-3.7 6.1-4 7.2-.4.3 1.1-.4-1.3 0 0z"/>
                                <path fill="#ACFF00" d="M116.8 35.7c.4 2.4.7 4.8.9 7.2v-.3c1.3 5.3 2.7 10.6 2.7 16.1 0 1.2 0 7.6-3.1 4.8-1.6-1.4-1.3-6.2-1.5-8.2v.3c-1-4.1-2.2-8.3-2.6-12.5-.1-2.4-.1-4.8 0-7.2.1-2.1 3.2-2.2 3.6-.2.2 1.2-.2-.8 0 0z"/>
                                <path fill="#78B300" d="M121.6 63c9.1 3.3 16.1 9.3 21.1 17.6l-.8-.9c2.1 2.5 4.1 5.4 5 8.5 1.3 4.3-3 6.6-6.6 5.6-7.6-2.1-12.2-8-16.2-14.5l.9 1c-2.8-3-5.5-6.3-7.6-9.8-2.1-3.2-1.3-9.5 4.2-7.5.6.2-1.1-.4 0 0z"/>
                                <path fill="#ACFF00" d="M120.7 64c8.8 4.4 14.8 9.9 20.1 18l-.6-.6c1.9 2 6.2 6.2 5.9 9.3-.4 4.9-6.2 1.6-8.3.3-5.3-3.2-8.8-8-12.2-13l.6.6c-2-2.1-4-4.2-5.9-6.4-1.2-1.4-3.6-3.6-3.8-5.6.1-2 2.3-3.6 4.2-2.6 1.1.5-.8-.5 0 0z"/>
                                <path fill="#78B300" d="M139.5 23.1c5.1-5.1 11.3 1.7 6.5 6.5-4.8 4.7-11.6-1.5-6.5-6.5 2.1-2.2-2.2 2.1 0 0z"/>
                                <path fill="#5A24B3" d="M143.5 27.1c-1.4 1.4.7 3.5 2.1 2.1 1.4-1.3-.7-3.4-2.1-2.1-.6.6.6-.6 0 0z"/>
                                <path opacity=".5" fill="#D3FF78" d="M142.8 25c1.6-1.6 3.5.7 2.1 2.1-1.4 1.4-3.7-.5-2.1-2.1z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M143.2 15.6c1-4.6 2.5-7.2 6.2-10.3M141.2 13.6c1-4.6 2.5-7.2 6.2-10.3"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M145.4 21.4c-.3 3-3 6.5-4.2 9.3"/>
                                <path fill="#78B300" d="M125.8 28.9c-2.5-3.7 2.4-16.1 6-18.1 5.6-3 14.5 5.3 13.5 11-.6 3.3-3.8 8.8-5.6 11.8-.9 1.5-3.6 5.4-5.8 3.5-2.5-2.1-6.2-5.4-8.1-8.2-.6-.8.7 1.1 0 0z"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M127.7 19c3.5 3.5 10.5-2.3 8.6-6.4"/>
                                <path fill="#78B300" d="M134.4 18c5.1-5.1-1.7-11.3-6.5-6.5-4.7 4.9 1.5 11.6 6.5 6.5 2.2-2.1-2.1 2.2 0 0z"/>
                                <path fill="#5A24B3" d="M130.4 14c-1.4 1.4-3.5-.7-2.1-2.1 1.4-1.4 3.5.7 2.1 2.1z"/>
                                <path opacity=".5" fill="#D3FF78" d="M132.5 14.7c1.6-1.6-.7-3.5-2.1-2.1-1.4 1.4.6 3.7 2.1 2.1.7-.6-.6.7 0 0z"/>
                                <path fill="#ACFF00" d="M134.7 35.2c-1.5-1.5-2.8-3.3-4.3-4.8-2.9-2.9-3.7-2.9-2.5-7.1.6-2 2.7-1.4 4.3-1.9 3.1-.8 5.1-3.2 6.1-6.2.7-2.3 3.7 2.2 4.1 2.8 2.2 3.4-.3 5.5-1.6 8.6-.5 1.1-4.3 10.3-6.1 8.6z"/>
                                <path opacity=".8" fill="#D3FF78" d="M94.7 60.9c-1.7 7.2-6.9 11.9-11.8 16.9-6.6 6.6-13 13.3-20.5 19-6.9 5.3-15.4 11.8-24.4 12-7.6.2-15.4-3.3-17.8-11.1-5.3-17.5 16.5-26.9 29.2-31.4 8.6-3.1 17.6-5 26.4-7.2 2.4-.7 20.3-4.6 18.9 1.8z"/>
                                <path fill="#5A24B3" d="M41.7 101c-10.8 6.9-21.4-9.9-10.6-16.7 10.7-6.9 21.3 9.8 10.6 16.7-4.7 2.9 4.6-2.9 0 0z"/>
                                <path fill="#5A24B2" d="M195.1 23.7c0 3.3-2.7 6-6 6h-12.8c-3.3 0-6-2.7-6-6V10.9c0-3.3 2.7-6 6-6h12.8c3.3 0 6 2.7 6 6v12.8z"/>
                                <g fill="#ACFF00">
                                    <path d="M314.2 71.9V80h-6.8c-.9 0-1.5.8-1.2 1.6l3.5 11.1c1.8 5.7-3.3 10.1-8.7 10.1h-7.6v-8.1h6.8c.9 0 1.5-.8 1.2-1.6L298 82c-1.8-5.8 3.2-10.1 8.7-10.1h7.5zM325.9 71.9v30.8h-8.1V71.9h8.1zM347.6 93.1h.4l1.5-14.8c.9-9.9 16.2-8.9 16.2.8v23.7h-8.1V82.9l.2-5.1h-.4l-.7 5-1.3 10c-1.2 9.4-14 9.4-15.2 0l-1.3-10-.7-5h-.4l.2 5.1v19.8h-8.1V79c0-9.7 15.3-10.7 16.2-.8l1.5 14.9zM379 97.8v-8.1h7.2c.7 0 1.3-.6 1.3-1.3v-7.2c0-.7-.6-1.3-1.3-1.3H379c-.7 0-1.3.6-1.3 1.3v21.5h-8.1V81.2c0-5.1 4.2-9.3 9.3-9.3h7.2c5.1 0 9.3 4.2 9.3 9.3v7.2c0 5.1-4.2 9.3-9.3 9.3H379zM407.5 71.9v21.5c0 .7.6 1.3 1.3 1.3H419v8.1h-10.2c-5.1 0-9.3-4.2-9.3-9.3V71.9h8zM432.1 102.7c-5.1 0-9.3-4.2-9.3-9.3V81.2c0-5.1 4.2-9.3 9.3-9.3h12.5V80h-12.5c-.7 0-1.3.6-1.3 1.3v2.1h13.8v8.1h-13.8v2.1c0 .7.6 1.3 1.3 1.3h12.5v8.1h-12.5z"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={props.hardSelected} className='homeSelectDifficultyBottom'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464 174">
                                <path opacity=".8" fill="#D3FF78" d="M127.1 75.2c-5.8-2.9-8.7-8.4-11.9-13.7-4.2-7-8.6-14-11.8-21.5-2.8-6.5-6.4-14.6-5.3-21.8 1-6.6 5.2-13.1 12.1-14.2 16.8-2.7 20.8 19.5 22 31.5.8 8 .6 16.1.5 24.1 0 2.1-.4 18.2-5.6 15.6z"/>
                                <path fill="#5A24B3" d="M121.6 16.6c-2.4-11-19.5-7.2-17 3.8 2.4 10.9 19.4 7.2 17-3.8-1.1-4.7 1 4.7 0 0z"/>
                                <path fill="#78B300" d="M186.9 144.4c.5 4.7-.7 8.8-3.3 12.6-4.4 6.5-1.8-3.2-.7-5.8l-.1.4c.4-2.3 1-4.5 2-6.6.2-.6 1.9-2.6 2.1-.6.1.7 0-.3 0 0zM160.2 94c1.9 1 3.6 2.3 5.3 3.6l-.5-.4c3.2 1.9 6.7 3.8 9.6 6.2 2 1.7 6.3 5.5 4.4 8.4-2.4 3.9-7.3-.8-9.5-2.5l.5.4c-3.1-1.8-6.4-3.7-9.2-5.9-1.8-1.4-3.4-3.3-4.7-5.1-2-2.7 1.2-6.2 4.1-4.7.9.5-1.1-.5 0 0z"/>
                                <path fill="#ACFF00" d="M159.1 95.2c1.7 1.2 3.4 2.5 5 3.9l-.2-.2c4.1 2.5 8.3 4.9 11.7 8.3.8.8 4.7 4.7 1.1 4.9-1.9.1-4.7-3.1-6-4.2l.2.2c-3.1-1.9-6.6-3.8-9.4-6.1-1.5-1.4-3.1-2.9-4.5-4.5-1.2-1.3.7-3.3 2.1-2.3.9.6-.5-.4 0 0z"/>
                                <path fill="#78B300" d="M182.7 111.7c5.1 6.8 7.5 14.6 7.1 23.1l-.2-1c.3 2.8.4 5.9-.4 8.7-1.1 3.8-5.4 3.4-7.5.9-4.6-5.2-5.2-11.8-5-18.4l.2 1.1c-.7-4.1-1.2-8.4-.9-12.5.3-3.3 4.7-4.5 6.7-1.9.4.5-.6-.8 0 0z"/>
                                <path fill="#ACFF00" d="M181.6 112c4.4 7.5 6.2 14.4 6.2 23l-.1-.7c.4 2.4 1.6 7.6-.1 9.7-2.6 3.4-5.3-1.8-6.3-3.7-2.4-4.9-2.6-10.1-2.8-15.5l.1.8c-.5-2.5-1-5-1.3-7.6-.2-1.6-1-4.4-.1-5.9 1.1-1.6 3.5-1.7 4.4-.1.6.9-.4-.7 0 0z"/>
                                <path fill="#78B300" d="M129.7 80.8c-5.7 3.7-12.1 6.3-18 9.6-7.3 4-14.5 8-22.5 10.4-6.6 2-13.5 2.2-19.4-1.7-4.7-3.1-7.5-8.6-4.9-14.1 5.7-12.4 26.4-13.1 37.8-14 7.7-.6 15.5-1.8 23.3-1.6 5.7.3 9.4 7.7 3.7 11.4z"/>
                                <path fill="#ACFF00" d="M129.3 79.4c-5.4 2.8-11.1 5.2-16.6 7.9-7.5 3.7-14.9 7.8-23 10.2-5.7 1.9-11.6 2.9-17.5.9-4.7-1.5-9.2-5.5-7.1-11 4.4-11.6 26.3-13.1 36.2-14 7.7-.8 15.3-1.9 23-2.5 2.1-.2 4.6-.4 6.3 1.3 2 2.2 1.4 5.8-1.3 7.2z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M112.5 74.1c-3.8 6.3 3.7 10 8.9 9.1m-19.8-8.1c-5.7 7.9 3.2 13.9 10.7 12.5m-21.9-11C82.9 86 94.2 93.8 103.2 92m-25-12.5c-7.3 11 6.2 18.9 15.9 16.8"/>
                                <path fill="#78B300" d="M167.2 101.7c-4.7-.3-9.4-1.6-13.9-3-4.8-1.5-9.2-5.8-13.3-8.6-3.7-2.6-22.9-12.4-15.1-18.9 3.5-2.9 7.6.4 10.7 2.1 6.1 3.3 12.3 6.6 18.5 9.9 5.1 2.7 9.3 5 13.5 9.2 1.5 1.4 3.8 3.3 3.9 5.5.1 2.3-2 4.1-4.3 3.8z"/>
                                <path fill="#ACFF00" d="M167.6 100.9c-10.5-1.8-18.1-6.7-26.7-12.4-4.7-3.2-9.4-6.3-14.1-9.6-3-2-3.5-7.3 1.1-7.7 2.8-.2 6.4 2.8 8.7 4.1 5.6 3.1 11.1 6.2 16.7 9.3 4.8 2.7 9.2 5.7 13.6 9 1.3 1 3.6 2.3 4.2 3.9.6 2.2-1.4 3.9-3.5 3.4z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M86.4 149.7l-2.7 4.4M87.5 144.5l-1.1 5.2"/>
                                <path fill="#78B300" d="M116.6 88c-.4 2.9-1.9 5.8-3.8 8-1.8 2-6.1 2.5-5.8-1.4-.2-2.6 2.2-6.2 3.8-8 1.8-2 6.1-2.5 5.8 1.4z"/>
                                <path fill="#ACFF00" d="M115.4 87.3c-.8 2.2-1.9 4.4-3.2 6.4-.2.3-1.4 2.5-1.9 2.7-.7.9-2.4.2-2-1.1-.3-1.5 2.5-5.2 3.2-6.4.2-.3 1.4-2.5 1.9-2.7.7-.9 2.4-.2 2 1.1z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M107.8 98.5L93.4 117"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M107.8 98.5L93.4 117"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M91.5 119.4l-3.7 23.3"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M91.5 119.4l-3.7 23.3"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M101.9 142.5l-1.2 4.9M104.8 137.9l-2.9 4.6"/>
                                <path fill="#78B300" d="M132.8 81.5c-.7 2.8-2.5 5.6-4.7 7.5-2 1.8-6.3 1.8-5.6-2 .1-2.6 2.9-5.9 4.7-7.5 1.9-1.8 6.3-1.8 5.6 2z"/>
                                <path fill="#ACFF00" d="M131.6 80.7c-1 2.2-2.4 4.2-3.8 6.1-.2.3-1.6 2.4-2.2 2.5-.8.8-2.4 0-1.9-1.3-.2-1.5 3-5 3.8-6.1.2-.3 1.6-2.4 2.2-2.5.8-.9 2.4 0 1.9 1.3z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M122.9 91l-2.8 23.4"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M122.9 91l-2.8 23.4"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M119.7 117.4l-13.8 19"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M119.7 117.4l-13.8 19"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M70.7 140.7l-3.7 3.5M73.1 135.9l-2.4 4.8"/>
                                <path fill="#78B300" d="M113.5 86.2c-.4 2.9-1.9 5.8-3.8 8-1.8 2-6.1 2.5-5.8-1.4-.2-2.6 2.2-6.2 3.8-8 1.8-1.9 6.1-2.4 5.8 1.4z"/>
                                <path fill="#ACFF00" d="M112.2 85.5c-.8 2.2-1.9 4.4-3.2 6.4-.2.3-1.4 2.5-1.9 2.7-.7.9-2.4.2-2-1.1-.3-1.5 2.5-5.2 3.2-6.4.2-.3 1.4-2.5 1.9-2.7.7-.9 2.4-.2 2 1.1z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M104.7 96.7l-18.8 14.2"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M104.7 96.7l-18.8 14.2"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M83.5 112.7l-9.6 21.5"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M83.5 112.7l-9.6 21.5"/>
                                <path fill="none" stroke="#78B300" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M93.8 137.8l-1.7 4.9M97.1 133.6l-3.3 4.2"/>
                                <path fill="#78B300" d="M129.1 78.9c-.7 2.8-2.5 5.6-4.7 7.5-2 1.8-6.3 1.8-5.6-2 .1-2.6 2.9-5.9 4.7-7.5 2-1.7 6.3-1.8 5.6 2z"/>
                                <path fill="#ACFF00" d="M127.9 78.1c-1 2.2-2.4 4.2-3.8 6.1-.2.3-1.6 2.4-2.2 2.5-.8.8-2.4 0-1.9-1.3-.2-1.5 3-5 3.8-6.1.2-.3 1.6-2.4 2.2-2.5.9-.8 2.5 0 1.9 1.3z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M119.3 88.4l-4.9 23.1"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M119.3 88.4l-4.9 23.1"/>
                                <path fill="none" stroke="#78B300" strokeWidth="5.4" strokeLinecap="round" strokeMiterlimit="10" d="M113.8 114.4l-15.5 17.8"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="2.4" strokeLinecap="round" strokeMiterlimit="10" d="M113.8 114.4l-15.5 17.8"/>
                                <path fill="#78B300" d="M176.7 94.8c4.5-4.5 9.9 1.5 5.7 5.7-4.2 4.3-10.1-1.2-5.7-5.7 1.9-1.8-1.8 1.9 0 0z"/>
                                <path fill="#5A24B3" d="M180.3 98.4c-1.2 1.2.7 3 1.9 1.9 1.1-1.2-.7-3.1-1.9-1.9-.5.5.5-.5 0 0z"/>
                                <path opacity=".5" fill="#D3FF78" d="M179.7 96.5c1.4-1.4 3.1.6 1.9 1.9-1.3 1.2-3.3-.5-1.9-1.9.5-.5-.6.6 0 0z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M180 88.3c.9-4.1 2.2-6.4 5.4-9.1M178.3 86.5c.9-4.1 2.2-6.4 5.4-9.1"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M181.9 93.4c-.3 2.6-2.6 5.7-3.7 8.2"/>
                                <path fill="#78B300" d="M164.7 100c-2.2-3.2 2.1-14.2 5.3-15.9 4.9-2.7 12.8 4.7 11.9 9.7-.5 2.9-3.3 7.7-4.9 10.4-.8 1.3-3.2 4.8-5.1 3.1-2.3-2-5.6-4.8-7.2-7.3-.5-.8.6 1 0 0z"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.2" strokeLinecap="round" strokeMiterlimit="10" d="M166.3 91.2c3.1 3.1 9.2-2 7.6-5.6"/>
                                <path fill="#78B300" d="M172.3 90.4c4.5-4.5-1.5-9.9-5.7-5.7s1.2 10.2 5.7 5.7c1.9-1.9-1.9 1.9 0 0z"/>
                                <path fill="#5A24B3" d="M168.7 86.8c-1.2 1.2-3-.7-1.9-1.9 1.3-1.1 3.1.7 1.9 1.9-.5.6.6-.5 0 0z"/>
                                <path opacity=".5" fill="#D3FF78" d="M170.6 87.5c1.4-1.4-.6-3.1-1.8-1.8-1.3 1.2.4 3.2 1.8 1.8.6-.6-.5.5 0 0z"/>
                                <path fill="#ACFF00" d="M172.6 105.5c-1.4-1.3-2.5-2.9-3.8-4.2-2.6-2.6-3.3-2.5-2.2-6.3.5-1.8 2.4-1.3 3.8-1.7 2.7-.7 4.5-2.8 5.3-5.5.6-2.1 3.2 1.9 3.6 2.5 1.9 3-.3 4.9-1.4 7.6-.4 1-3.8 9.1-5.3 7.6-.2-.1.1.2 0 0z"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="7.2" strokeLinecap="round" strokeMiterlimit="10" d="M171.1 97l-1.9 1.9"/>
                                <path opacity=".8" fill="#D3FF78" d="M128.2 72.1c-1.9-6.2 0-12.1 1.6-18.1 2.1-7.9 4.1-15.9 7.2-23.5 2.7-6.6 6-14.7 12-19 5.4-3.9 13-5.4 18.7-1.2 13.6 10.2.4 28.6-7.4 37.7-5.2 6.1-11.2 11.6-17 17.1-1.5 1.6-13.4 12.5-15.1 7z"/>
                                <path fill="#5A24B3" d="M150.9 18.2c5.2-10 20.7-1.9 15.5 8.1-5.2 9.9-20.7 1.9-15.5-8.1 2.3-4.3-2.2 4.3 0 0z"/>
                                <path fill="#5A24B2" d="M183.2 158.2c0 6.6-5.4 12-12 12h-19.6c-6.6 0-12-5.4-12-12v-19.6c0-6.6 5.4-12 12-12h19.6c6.6 0 12 5.4 12 12v19.6z"/>
                                <path fill="#78B300" d="M136.9 139.8c4.1 2.2 6.9 5.5 8.6 9.8 3 7.5-3.7-.3-5.2-2.6l.2.3c-1.4-1.4-2.7-2.9-3.8-4.5-.2-.5-2.1-4.2.2-3 .6.3-.2-.2 0 0zM155 88.9c-1 1.9-2.3 3.6-3.6 5.3l.4-.5c-1.9 3.2-3.8 6.7-6.2 9.6-1.7 2-5.5 6.3-8.4 4.4-3.9-2.4.8-7.3 2.5-9.5l-.4.5c1.8-3.1 3.7-6.4 5.9-9.2 1.4-1.8 3.3-3.4 5.1-4.7 2.7-1.9 6.2 1.2 4.7 4.1-.5 1 .5-1 0 0z"/>
                                <path fill="#ACFF00" d="M153.8 87.9c-1.2 1.7-2.5 3.4-3.9 5l.2-.2c-2.5 4.1-4.9 8.3-8.3 11.7-.8.8-4.7 4.7-4.9 1.1-.1-1.9 3.1-4.7 4.2-6l-.2.2c1.9-3.1 3.8-6.6 6.1-9.4 1.4-1.5 2.9-3.1 4.5-4.5 1.3-1.2 3.3.6 2.3 2.1-.6.9.4-.6 0 0z"/>
                                <path fill="#78B300" d="M139.8 107.9c3.6 7.8 4.3 15.8 2.1 24.1v-1c-.3 2.8-.8 5.9-2.2 8.4-1.9 3.5-6 2.2-7.6-.6-3.4-6-2.6-12.6-1.1-19.1v1.2c.2-4.1.5-8.4 1.7-12.4 1.1-3.3 5.6-3.6 7.1-.6.2.5-.5-.9 0 0z"/>
                                <path fill="#ACFF00" d="M138.6 108c2.8 8.2 3.1 15.3 1.3 23.8v-.7c-.1 2.4 0 7.7-2.1 9.5-3.3 2.8-4.8-2.9-5.4-4.9-1.3-5.3-.5-10.4.5-15.7v.8c0-2.6.1-5.1.3-7.7.1-1.6 0-4.5 1.1-5.8 1.4-1.6 3.8-1.1 4.3.7.4 1-.2-.8 0 0z"/>
                                <g fill="#ACFF00">
                                    <path d="M293.9 72.3v11.4h8.5v8.1h-8.5v11.4h-8.1V72.3h8.1zm17.9 0v30.8h-8.1V72.3h8.1zM323.8 86.1h8.5v8.1h-8.5v8.9h-8.1V81.6c0-5.1 4.2-9.3 9.3-9.3h7.3c5.1 0 9.3 4.2 9.3 9.3v21.5h-8.1V81.6c0-.7-.6-1.3-1.3-1.3h-7.3c-.7 0-1.3.6-1.3 1.3v4.5zM357.6 95.7H355v-8.1h7.5c.7 0 1.3-.6 1.3-1.3v-4.8c0-.7-.6-1.3-1.3-1.3H355c-.7 0-1.3.6-1.3 1.3V103h-8.1V81.5c0-5.1 4.2-9.3 9.4-9.3h7.2c5.1 0 9.6 4.2 9.6 9.3v4.8c0 2.5-1 4.4-3.2 5.7 1.8.5 2.3 2.1 2.6 3.8l1.1 7.2h-8.7l-1.2-6.6c-.2-.5-.5-.7-1.1-.8h-3.7zM375.8 103.1V72.3h16.5c5.1 0 9.3 4.2 9.3 9.3v12.2c0 5.1-4.2 9.3-9.3 9.3h-16.5zm8-8h8.5c.7 0 1.3-.6 1.3-1.3V81.6c0-.7-.6-1.3-1.3-1.3h-8.5v14.8z"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDifficulty;