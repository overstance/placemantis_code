import React from 'react';
import Button from '../buttons/Button';
import './dialogue.scss';

const PostAjaxDailogue = props => {

    let dailogue;

    if (props.loading) {
        dailogue = 
            <span className='loadingIndicator'>Processing...</span>
    } else if (props.success) {
        dailogue =
        <>
            <h3 className='postAjaxDailogueHeading'>{props.successHeading}</h3>
            <div className='postAjaxDailogueButtons'>
                <Button 
                    type={props.successType1}
                    buttonClicked={props.successButton1Clicked}
                />
                { props.hasSecondSuccessButton ?
                    <>
                        <span />
                        <Button 
                            type={props.successType2}
                            buttonClicked={props.successButton2Clicked}
                        />
                    </>
                    :
                    null
                }
            </div>
        </>
    } else if (props.fail) {
        dailogue =
        <>
            <h3 className='postAjaxDailogueHeadingFail'>{props.failHeading}</h3>
            <div className='postAjaxDailogueButtons'>
                <Button 
                    type={props.failType1}
                    buttonClicked={props.failButton1Clicked}
                />
                { props.hasSecondFailButton ?
                    <>
                        <span />
                        <Button 
                            type={props.failType2}
                            buttonClicked={props.failButton2Clicked}
                        />
                    </>
                    :
                    null
                }
            </div>
        </>
    }
    return(
        <div className='postAjaxDailogue'>
            {dailogue}
        </div>
    )
}

export default PostAjaxDailogue;

