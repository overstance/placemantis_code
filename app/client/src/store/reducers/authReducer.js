import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userSelectedAvatar: null,

    checkUsernameLoading: false,
    checkUsernameSuccess: false,
    checkUsernameSuccessMessage: null, 
    checkUsernameFail: false,

    registrationLoading: false,
    registrationSuccess: false,
    registrationFail: false,
    registrationFailReason: '',

    loginLoading: false,
    loginSuccess: false,
    loginFail: false,

    loginSuccessMessage: null,
    loginFailMessage: null
}

const checkUsernameAvailabilityStart = (state, action) => {
    return {
        ...state,
        checkUsernameLoading: true,
        checkUsernameSuccess: false,
        checkUsernameSuccessMessage: null, 
        checkUsernameFail: false,
    }
}

const checkUsernameAvailabilitySuccess = (state, action) => {
    return {
        ...state,
        checkUsernameLoading: false,
        checkUsernameSuccess: true,
        checkUsernameSuccessMessage: action.message, 
        checkUsernameFail: false,
    }
}

const checkUsernameAvailabilityFail = (state, action) => {
    return {
        ...state,
        checkUsernameLoading: false,
        checkUsernameSuccess: false,
        checkUsernameSuccessMessage: null, 
        checkUsernameFail: true,
    }
}

const setUserAvatarSelection = (state, action) => {
    return {
        ...state,
        userSelectedAvatar: action.avatarName
    }
}

// REGISTER USER

const registerUserStart = (state, action) => {
    return {
        ...state,
        registrationLoading: true,
        registrationSuccess: false,
        registrationFail: false,
        registrationFailReason: ''
    }
}

const registerUserSuccess = (state, action) => {
    return {
        ...state,
        registrationLoading: false,
        registrationSuccess: true,
        registrationFail: false,
        registrationFailReason: ''
    }
}

const registerUserFail = (state, action) => {
    return {
        ...state,
        registrationLoading: false,
        registrationSuccess: false,
        registrationFail: true,
        registrationFailReason: action.error
    }
}

const resetRegisterPage = (state, action) => {
    return {
        ...state,
        userSelectedAvatar: null,

        checkUsernameLoading: false,
        checkUsernameSuccess: false,
        checkUsernameSuccessMessage: null, 
        checkUsernameFail: false,

        registrationLoading: false,
        registrationSuccess: false,
        registrationFail: false,
        registrationFailReason: '',
    }
}

// LOGIN/CONFIRM/RESET USER

const loginUserStart = (state, action) => {
    return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
        loginFail: false,

        loginSuccessMessage: null,
        loginFailMessage: null
    }
}

const loginUserSuccess = (state, action) => {
    return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        loginFail: false,

        loginSuccessMessage: action.successMessage,
        loginFailMessage: null
    }
}

const loginUserFail = (state, action) => {
    return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        loginFail: true,

        loginSuccessMessage: null,
        loginFailMessage: action.error
    }
}

const resetLoginPage = (state, action) => {
    return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        loginFail: false,

        loginSuccessMessage: null,
        loginFailMessage: null
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_AVATAR_SELECTED: 
            return setUserAvatarSelection(state, action);
        case actionTypes.CHECK_USERNAME_AVAILABILITY_START: 
            return checkUsernameAvailabilityStart(state, action);
        case actionTypes.CHECK_USERNAME_AVAILABILITY_SUCCESS: 
            return checkUsernameAvailabilitySuccess(state, action);
        case actionTypes.CHECK_USERNAME_AVAILABILITY_FAIL: 
            return checkUsernameAvailabilityFail(state, action);
        case actionTypes.REGISTER_USER_START: 
            return registerUserStart(state, action);
        case actionTypes.REGISTER_USER_SUCCESS: 
            return registerUserSuccess(state, action);
        case actionTypes.REGISTER_USER_FAIL: 
            return registerUserFail(state, action);
        case actionTypes.RESET_REGISTER_PAGE: 
            return resetRegisterPage(state, action);
        case actionTypes.LOGIN_USER_START:
            return loginUserStart(state, action);
        case actionTypes.LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action);
        case actionTypes.LOGIN_USER_FAIL:
            return loginUserFail(state, action);
        case actionTypes.RESET_LOGIN_PAGE:
            return resetLoginPage(state, action);
        
        default: return state;
    }
}

export default reducer