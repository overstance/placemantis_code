import React, {useEffect} from 'react';
import './activity.scss';
import {positionY} from '../../../../anime/position';

const IntervalBoard = props => {

    let reason = props.roundOverReason;

    useEffect(() => {

        let viewHeight = document.documentElement.clientHeight;
        let positionProp = {
            animatedClass: '.playerIntervalBoard',
            translateY: [viewHeight, 0],
            duration: 500,
            easing: 'linear'
        }  
        positionY(positionProp);

        if (reason === "Time Up") {
            const elem1 = document.querySelector('.playerIntervalBoardReason');
            const elem2 = document.querySelector('.playerIntervalBoardMessage');
            const elem3 = document.querySelector('.playerIntervalBoardBubblesDots');

            elem1.style.color = '#ff1a00';
            elem2.style.borderColor = '#ff1a00';
            elem3.style.fill = '#ff1a00';
        }
    })
    return(
        <div className='playerIntervalBoard'>
            <div className='playerIntervalBoardBubbles'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 30">
                    <path fill="#5A24B2" d="M90 30H0V0h67.385z"/>
                    <g className='playerIntervalBoardBubblesDots'>
                        <circle cx="55.5" cy="15" r="7.5"/>
                        <circle cx="34.5" cy="15" r="7.5"/>
                        <circle cx="13.5" cy="15" r="7.5"/>
                    </g>
                </svg>
            </div>
            <div className='playerIntervalBoardMessage'>
                <div className='playerIntervalBoardMain'>
                    <h4 className='playerIntervalBoardReason'>{props.roundOverReason}</h4>
                    <span className='playerIntervalBoardMantis'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 50">
                            <path fill="#78B300" d="M38.892 45.766c-4.936 5.576-12.977 5.539-17.868-.083S9.403 30.189 6.066 23.744s.665-13.625 8.892-15.956 21.727-2.331 30 0 12.312 9.549 8.975 16.039c-3.336 6.49-10.104 16.363-15.041 21.939z"/>
                            <path fill="#ACFF00" d="M31.937 45.484c-1.069.248-2.817.246-3.885-.004 0 0-2.407-.564-4.018-2.415-1.724-1.982-4.693-5.98-4.693-5.98-.654-.881-.553-2.235.224-3.009 0 0 4.37-4.354 4.37-12.087 0-5.497-2.234-9.581-2.234-9.581-.526-.962-.065-1.844 1.026-1.959 0 0 3.978-.42 7.216-.42 3.274 0 7.322.432 7.322.432 1.091.116 1.554.999 1.028 1.963 0 0-2.225 4.08-2.225 9.566 0 7.759 4.398 12.111 4.398 12.111.78.772.88 2.121.222 2.999 0 0-3.024 4.038-4.781 6.023-1.607 1.813-3.97 2.361-3.97 2.361z"/>
                            <g fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10">
                                <path d="M35.23 7.524l5.4-3.454c2.971-1.899 8.247-3.232 11.724-2.958l6.322.497"/>
                                <path d="M24.77 7.524l-5.4-3.454C16.399 2.171 11.123.838 7.646 1.112l-6.322.497"/>
                            </g>
                            <path fill="#78B300" d="M19.945 21.99c0-6.064-1.369-10.979-7.978-10.979S0 15.926 0 21.99c0 6.063 5.358 10.979 11.967 10.979 6.609 0 7.978-4.916 7.978-10.979z"/>
                            <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M11.967 32.969c6.609 0 7.978-4.916 7.978-10.979 0-6.064-1.369-10.979-7.978-10.979"/>
                            <circle fill="#5A24B2" cx="8.426" cy="21.99" r="2.992"/>
                            <path opacity=".5" fill="#D3FF78" d="M12.964 18.998c0-1.819-.411-3.294-2.394-3.294s-3.59 1.474-3.59 3.294c0 1.819 1.607 3.294 3.59 3.294s2.394-1.475 2.394-3.294z"/>
                            <g>
                                <path fill="#78B300" d="M40.055 21.99c0-6.064 1.369-10.979 7.978-10.979C54.644 11.011 60 15.926 60 21.99c0 6.063-5.356 10.979-11.967 10.979-6.609 0-7.978-4.916-7.978-10.979z"/>
                                <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M48.033 32.969c-6.609 0-7.978-4.916-7.978-10.979 0-6.064 1.369-10.979 7.978-10.979"/>
                                <circle fill="#5A24B2" cx="51.574" cy="21.99" r="2.992"/>
                                <path opacity=".5" fill="#D3FF78" d="M47.036 18.998c0-1.819.411-3.294 2.394-3.294s3.59 1.474 3.59 3.294c0 1.819-1.607 3.294-3.59 3.294s-2.394-1.475-2.394-3.294z"/>
                            </g>
                        </svg>
                    </span>
                </div>
                { props.showBonusPoint ?
                    <div className='playerIntervalBoardBonus'>
                        <h5>Bonus:</h5>
                        <span>{' +' + props.displayedBonusPoint}</span>
                    </div>
                    :
                    null
                }
                { props.showBonusLive ?
                    <div className='playerIntervalBoardBonus'>
                        <h5>Bonus:</h5>
                        <span>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 120 120" xmlSpace="preserve">
                                <path fill="#3A1772" d="M118 89c0 15.95-13.05 29-29 29H31c-15.95 0-29-13.05-29-29V31C2 15.05 15.05 2 31 2h58c15.95 0 29 13.05 29 29v58z"/>
                                <path fill="#5A24B2" stroke="#8133FF" strokeWidth="3" strokeMiterlimit="10" d="M112.116 86.059c0 14.333-11.725 26.058-26.058 26.058H33.941c-14.332 0-26.058-11.725-26.058-26.058V33.941c0-14.332 11.726-26.058 26.058-26.058h52.117c14.333 0 26.058 11.726 26.058 26.058v52.118z"/>
                                <path fill="#FF1A00" stroke="#3A1772" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M81.517 20.391c-7.454-1.997-14.997-1.204-21.525 1.736-6.529-2.94-14.073-3.733-21.527-1.736-17.171 4.6-27.362 22.25-22.761 39.422 4.601 17.17 44.289 40.918 44.289 40.918s39.686-23.748 44.287-40.918c4.599-17.171-5.592-34.822-22.763-39.422z"/>
                            </svg>
                        </span>
                    </div>
                    :
                    null
                }
            </div>                                      
        </div>
    )
}

export default IntervalBoard;