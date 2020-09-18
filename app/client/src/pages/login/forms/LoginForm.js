import React, {useEffect} from 'react';
import './forms.scss';
import Input from '../../../components/common/inputs/Input';
import Button from '../../../components/common/buttons/Button';
import {positionX} from "../../../anime/position";
import { usePreviousValue } from "../../../utilities/utilities";

const LoginForm = props => {

    const previousPlaceholder = usePreviousValue(props.placeholder)

    useEffect(() => {
        if (previousPlaceholder !== props.placeholder) {
            if (props.direction === 'Next') {
                const positionProp = {
                    animatedClass: ".loginForm",
                    translateX: ['100%', "0%"],
                    duration: 300,
                    easing: "cubicBezier(.5, .05, .1, .3)"
                }

                positionX(positionProp);
            } else if (props.direction === 'Previous') {
                const positionProp = {
                    animatedClass: ".loginForm",
                    translateX: ['-100%', "0%"],
                    duration: 300,
                    easing: "cubicBezier(.5, .05, .1, .3)"
                }

                positionX(positionProp);
            }
        }

    }, [props.placeholder, previousPlaceholder, props.direction])

    let firstButtonType = "Next";

    if (props.isLastPart) {
        firstButtonType = "Submit"
    }

    return(
        <form
            className='loginForm'
        >
            <Input
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                changed={props.changed}
                fillError={props.fillError}
                label={props.label}
                labelSpan={props.labelSpan}
                hasValueCount={props.hasValueCount}
                valueCount={props.valueCount}
                valid={props.valid}
            />
            <div className='loginFormButtons'>
                { props.hasPrevious ?
                    <>
                        <Button
                            category="forms"
                            type="Previous"
                            buttonClicked={props.showPreviousFormPart}
                        />
                        <span/>
                    </>
                    :
                    null
                }
                <Button
                    category="forms"
                    sideEffectLoading={props.sideEffectLoading}
                    sideEffectSuccess={props.sideEffectSuccess}
                    sideEffectFail={props.sideEffectFail}
                    type={firstButtonType}
                    inputValid={props.valid}
                    buttonClicked={props.submitPartForm}
                />
            </div>
            {props.formGroup === 'login' ?
                <div 
                    className='formFootOption'
                    onClick={props.forgotPasswordClicked}
                >
                    Forgot Password?
                </div>
                : 
                <div 
                    className='formFootOption'
                    onClick={props.backToLoginClicked}
                >
                    Back to Login?
                </div>
            }
        </form>
    )
}

export default LoginForm;