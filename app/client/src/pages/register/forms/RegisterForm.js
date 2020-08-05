import React from 'react';
import './forms.scss';
import Input from '../../../components/common/inputs/Input';
import Button from '../../../components/common/buttons/Button';

const RegisterForm = props => {

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