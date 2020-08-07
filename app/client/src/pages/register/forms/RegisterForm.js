import React, {useEffect} from 'react';
import './forms.scss';
import Input from '../../../components/common/inputs/Input';
import Button from '../../../components/common/buttons/Button';
import {positionX} from "../../../anime/position";
import { usePreviousValue } from "../../../utilities/utilities";


const RegisterForm = props => {
    const previousPlaceholder = usePreviousValue(props.placeholder)

    useEffect(() => {
        if (previousPlaceholder !== props.placeholder) {
            if (props.direction === 'Next') {
                const positionProp = {
                    animatedClass: ".registerPartForm",
                    translateX: ['100%', "0%"],
                    duration: 300,
                    easing: "cubicBezier(.5, .05, .1, .3)"
                }

                positionX(positionProp);
            } else if (props.direction === 'Previous') {
                const positionProp = {
                    animatedClass: ".registerPartForm",
                    translateX: ['-100%', "0%"],
                    duration: 300,
                    easing: "cubicBezier(.5, .05, .1, .3)"
                }

                positionX(positionProp);
            }
        }

    }, [props.placeholder, previousPlaceholder, props.direction])

    return(
        <form 
            // onSubmit={props.submitForm}
            className='registerPartForm'
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
            <div className='registerPartFormButtons'>
                { props.hasPrevious ?
                    <>
                        <Button
                            category="forms"
                            sideEffectLoading={props.sideEffectLoading}
                            sideEffectSuccess={props.sideEffectSuccess}
                            sideEffectFail={props.sideEffectFail}
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
                    type="Next"
                    inputValid={props.valid}
                    buttonClicked={props.submitPartForm}
                />
            </div>
        </form>
    )
}

export default RegisterForm;