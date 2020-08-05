import React, {useEffect} from 'react';
import './inputs.scss';


const Input = (props) => {

    useEffect(() => {
        if (props.valid === false) {
            let elem1 = document.querySelector('.formInputAndCounter');
            elem1.style.borderColor = '#ff1a00';
        } else if (props.valid === true) {
            let elem1 = document.querySelector('.formInputAndCounter');
            elem1.style.borderColor = '#5923b2';
        }
    
        if (props.hasValueCount) {
            if (props.valueCount === 0) {
                let elem1 = document.querySelector('.formInputCounter');
                elem1.style.color = '#ff1a00';
                elem1.style.borderColor = '#ff1a00';
            } else if (props.valueCount > 0) {
                let elem1 = document.querySelector('.formInputCounter');
                elem1.style.color = '#abff00';
                elem1.style.borderColor = '#abff00';
            }
        }

        return () => {}
    }, [props.fillError, props.valid, props.valueCount, props.hasValueCount]);

    return (
        <div className='formInput'>
            {props.fillError ?
                <label className='formInputLabelError'>{props.fillError}</label>
                :
                <label className='formInputLabel'>{props.label}<span>{props.labelSpan}</span></label>              
            }
            <div className='formInputAndCounter'>
                <input
                    className='formInputMain'
                    type={props.type}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.changed}
                />
                {props.hasValueCount ?
                    <span className='formInputCounter'>
                        {props.valueCount}
                    </span>
                    :
                    null
                }
            </div>
        </div>
    );

};

export default Input;