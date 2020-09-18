import axios from 'axios';
import * as actionTypes from './actionTypes';

export const userAvatarSelected = (avatarName) => {
    return {
        type: actionTypes.USER_AVATAR_SELECTED,
        avatarName: avatarName
    }
}

const checkUsernameAvailabiltyStart = () => {
    return {
        type: actionTypes.CHECK_USERNAME_AVAILABILITY_START
    }
}

const checkUsernameAvailabiltySuccess = (message) => {
    return {
        type: actionTypes.CHECK_USERNAME_AVAILABILITY_SUCCESS,
        message: message
    }
}

const checkUsernameAvailabiltyFail = () => {
    return {
        type: actionTypes.CHECK_USERNAME_AVAILABILITY_FAIL
    }
}

export const checkUsernameAvailabilty = (username) => async dispatch => {
    dispatch(checkUsernameAvailabiltyStart()) 

    const res = await axios.get('/api/check_username_availability', {params: {username: username}})

    if (res.data === 'Username Available') {
        dispatch(checkUsernameAvailabiltySuccess(res.data))
    } else if (res.data === 'Username Unavailable') {
        dispatch(checkUsernameAvailabiltySuccess(res.data))
    } else if (res.data.error) {
        dispatch(checkUsernameAvailabiltyFail())
    } else {
        dispatch(checkUsernameAvailabiltyFail())
    }
}

// REGISTER USER

const registerUserStart = () => {
    return {
        type: actionTypes.REGISTER_USER_START
    }
}

const registerUserSuccess = () => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS
    }
}

const registerUserFail = (error) => {
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        error: error
    }
}

export const registerUser = (userData) => async dispatch => {

    dispatch(registerUserStart());

    const res = await axios.post('/api/register_user', userData);

    if (res.data === 'User Registration Successful') {
        dispatch(registerUserSuccess());
    } else if (res.data.error) {
        dispatch(registerUserFail(res.data.error));
    }
}

export const resetRegisterPage = () => {
    return {
        type: actionTypes.RESET_REGISTER_PAGE
    }
}

// LOGIN/CONFIRM/RESET USER

const loginUserStart = () => {
    return {
        type: actionTypes.LOGIN_USER_START
    }
}

const loginUserSuccess = (successMessage) => {
    return {
        type: actionTypes.LOGIN_USER_SUCCESS,
        successMessage: successMessage
    }
}

const loginUserFail = (error) => {
    return {
        type: actionTypes.LOGIN_USER_FAIL,
        error: error
    }
}

export const loginUser = (formGroup, username, email, password) => async dispatch => {
    dispatch(loginUserStart());

    if (formGroup === 'login') {
        const res = await axios.post('/api/login_user', {username: username, password: password})

        if (res.data === 'Login Successful') {
            dispatch(loginUserSuccess(res.data))
        } else if (res.data.error) {
            dispatch(loginUserFail(res.data.error))
        }
    } else if (formGroup === 'confirm') {
        const res = await axios.post('/api/confirm_user', {username: username, email: email})

        if (res.data === 'User Confirmed') {
            dispatch(loginUserSuccess(res.data))
        } else if (res.data.error) {
            dispatch(loginUserFail(res.data.error))
        }
    } else if (formGroup === 'reset') {
        const res = await axios.post('/api/reset_user', {username: username, password: password})

        if (res.data === 'User Password Reset') {
            dispatch(loginUserSuccess(res.data))
        } else if (res.data.error) {
            dispatch(loginUserFail(res.data.error))
        }
    }
}

export const resetLoginPage = () => {
    return {
        type: actionTypes.RESET_LOGIN_PAGE
    }
}