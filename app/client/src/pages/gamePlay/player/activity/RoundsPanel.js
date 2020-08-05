import React from 'react';
import './activity.scss';

const TimerPanel = props => {
    return(
        <div className='activityRoundsPanel'>
            <div className='roundsPanelLives'>
                { props.live1 ?
                    <span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 120 120" xmlSpace="preserve">
                            <path fill="#3A1772" d="M118 89c0 15.95-13.05 29-29 29H31c-15.95 0-29-13.05-29-29V31C2 15.05 15.05 2 31 2h58c15.95 0 29 13.05 29 29v58z"/>
                            <path fill="#5A24B2" stroke="#8133FF" strokeWidth="3" strokeMiterlimit="10" d="M112.116 86.059c0 14.333-11.725 26.058-26.058 26.058H33.941c-14.332 0-26.058-11.725-26.058-26.058V33.941c0-14.332 11.726-26.058 26.058-26.058h52.117c14.333 0 26.058 11.726 26.058 26.058v52.118z"/>
                            <path fill="#FF1A00" stroke="#3A1772" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M81.517 20.391c-7.454-1.997-14.997-1.204-21.525 1.736-6.529-2.94-14.073-3.733-21.527-1.736-17.171 4.6-27.362 22.25-22.761 39.422 4.601 17.17 44.289 40.918 44.289 40.918s39.686-23.748 44.287-40.918c4.599-17.171-5.592-34.822-22.763-39.422z"/>
                        </svg>
                    </span>
                    :
                    null
                }
                { props.live2 ?
                    <span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 120 120" xmlSpace="preserve">
                            <path fill="#3A1772" d="M118 89c0 15.95-13.05 29-29 29H31c-15.95 0-29-13.05-29-29V31C2 15.05 15.05 2 31 2h58c15.95 0 29 13.05 29 29v58z"/>
                            <path fill="#5A24B2" stroke="#8133FF" strokeWidth="3" strokeMiterlimit="10" d="M112.116 86.059c0 14.333-11.725 26.058-26.058 26.058H33.941c-14.332 0-26.058-11.725-26.058-26.058V33.941c0-14.332 11.726-26.058 26.058-26.058h52.117c14.333 0 26.058 11.726 26.058 26.058v52.118z"/>
                            <path fill="#FF1A00" stroke="#3A1772" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M81.517 20.391c-7.454-1.997-14.997-1.204-21.525 1.736-6.529-2.94-14.073-3.733-21.527-1.736-17.171 4.6-27.362 22.25-22.761 39.422 4.601 17.17 44.289 40.918 44.289 40.918s39.686-23.748 44.287-40.918c4.599-17.171-5.592-34.822-22.763-39.422z"/>
                        </svg>
                    </span>
                    :
                    null
                }
                { props.live3 ?
                    <span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 120 120" xmlSpace="preserve">
                            <path fill="#3A1772" d="M118 89c0 15.95-13.05 29-29 29H31c-15.95 0-29-13.05-29-29V31C2 15.05 15.05 2 31 2h58c15.95 0 29 13.05 29 29v58z"/>
                            <path fill="#5A24B2" stroke="#8133FF" strokeWidth="3" strokeMiterlimit="10" d="M112.116 86.059c0 14.333-11.725 26.058-26.058 26.058H33.941c-14.332 0-26.058-11.725-26.058-26.058V33.941c0-14.332 11.726-26.058 26.058-26.058h52.117c14.333 0 26.058 11.726 26.058 26.058v52.118z"/>
                            <path fill="#FF1A00" stroke="#3A1772" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M81.517 20.391c-7.454-1.997-14.997-1.204-21.525 1.736-6.529-2.94-14.073-3.733-21.527-1.736-17.171 4.6-27.362 22.25-22.761 39.422 4.601 17.17 44.289 40.918 44.289 40.918s39.686-23.748 44.287-40.918c4.599-17.171-5.592-34.822-22.763-39.422z"/>
                        </svg>
                    </span>
                    :
                    null
                }
                { props.live4 ?
                    <span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 120 120" xmlSpace="preserve">
                            <path fill="#3A1772" d="M118 89c0 15.95-13.05 29-29 29H31c-15.95 0-29-13.05-29-29V31C2 15.05 15.05 2 31 2h58c15.95 0 29 13.05 29 29v58z"/>
                            <path fill="#5A24B2" stroke="#8133FF" strokeWidth="3" strokeMiterlimit="10" d="M112.116 86.059c0 14.333-11.725 26.058-26.058 26.058H33.941c-14.332 0-26.058-11.725-26.058-26.058V33.941c0-14.332 11.726-26.058 26.058-26.058h52.117c14.333 0 26.058 11.726 26.058 26.058v52.118z"/>
                            <path fill="#FF1A00" stroke="#3A1772" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M81.517 20.391c-7.454-1.997-14.997-1.204-21.525 1.736-6.529-2.94-14.073-3.733-21.527-1.736-17.171 4.6-27.362 22.25-22.761 39.422 4.601 17.17 44.289 40.918 44.289 40.918s39.686-23.748 44.287-40.918c4.599-17.171-5.592-34.822-22.763-39.422z"/>
                        </svg>
                    </span>
                    :
                    null
                }
            </div>
            <div className='roundsPanelCounter'>
                <div className='roundsPanelCounterHead'>
                    <h3>Round:</h3>                                              
                </div>
                <div className='roundsPanelCount'>
                    <div>
                        <span>{props.round}</span>
                        <div>{"/" + props.totalRounds}</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default TimerPanel;