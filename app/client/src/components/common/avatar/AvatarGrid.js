import React, {useEffect} from 'react';
import './avatar.scss';
import Avatar from './Avatar';
import {avatarNames} from './AvatarNames';
import Button from '../../common/buttons/Button';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import { positionX } from "../../../anime/position";

const AvatarGrid = props => {

    useEffect(() => {
        const positionProp = {
            animatedClass: ".avatarGrid",
            translateX: ['100%', "0%"],
            duration: 300,
            easing: "cubicBezier(.5, .05, .1, .3)"
        }

        positionX(positionProp);

    }, [])

    const userAvatarSelected = (avatarName) => {
        props.onUserAvatarSelected(avatarName);
    }

    let avatarGrid = avatarNames.map((type, i) => (
        <button className="avatarButton" key={i} onClick={() => userAvatarSelected(type.name)}>
            <Avatar userAvatar={type.name}/>
            {props.userSelectedAvatar === type.name ? <div className='avatarSelectionMarker'/> : null}
        </button>
    ))

    return(
        <div className="avatarGrid">
            {props.valid ?
                <h3 className="avatarGridHeader">{props.label}</h3>
                :
                <h3 className="avatarGridHeaderInvalid">{props.label}</h3>
            }
            <div className="avatarGridMain">
                <div className="avatarGridAvatars">
                    {avatarGrid}
                </div>
                <div className="avatarGridSubmitButtons">
                    { props.hasPreviousButton ?
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
                        type="Submit"
                        inputValid={props.valid}
                        buttonClicked={props.submitFormAll}
                        sideEffectLoading={props.sideEffectLoading}
                        sideEffectSuccess={props.sideEffectSuccess}
                        sideEffectFail={props.sideEffectFail}
                    />
                </div>
            </div>
        </div>      
    )
}

const mapStateToProps = state => {
    return {
        userSelectedAvatar: state.auth.userSelectedAvatar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserAvatarSelected: (avatarName) => dispatch(actions.userAvatarSelected(avatarName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AvatarGrid);