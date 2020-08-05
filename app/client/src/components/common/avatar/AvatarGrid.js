import React from 'react';
import './avatar.scss';
import Avatar from './Avatar';
import {avatarNames} from './AvatarNames';
import Button from '../../common/buttons/Button';
import {connect} from 'react-redux';

const AvatarGrid = props => {

    const userAvatarSelected = (name) => {
        console.log(name);
    }

    let avatarGrid = avatarNames.map((type, i) => (
        <button className="avatarButton" key={i} onClick={() => userAvatarSelected(type.name)}>
            <Avatar userAvatar={type.name}/>
            {props.userSelectedAvatar === type.name ? <div className='avatarSelectionMarker'/> : null}
        </button>
    ))

    return(
        <div className="avatarGrid">
            <h3 className="avatarGridHeader">{props.label}</h3>
            <div className="avatarGridMain">
                <div className="avatarGridAvatars">
                    {avatarGrid}
                </div>
                <div className="avatarGridSubmitButtons">
                    <Button
                        category="forms"
                        sideEffectLoading={props.sideEffectLoading}
                        sideEffectSuccess={props.sideEffectSuccess}
                        sideEffectFail={props.sideEffectFail}
                        type="Previous"
                        buttonClicked={props.showPreviousFormPart}
                    />
                    <span/>
                    <Button
                        category="forms"
                        type="Submit"
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
        userSelectedAvatar: "Monica"
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarGrid);