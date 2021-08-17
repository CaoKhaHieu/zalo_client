import { UserConstant } from "../../constants/UserConstant"

interface UserState {
    isLoading: Boolean
    userCurrent: {}
    error: string | null
    emailUserResetPass: any
}

type UserLoginAction = {
    type: string,
    payload: {},
}

const InitialState :UserState = {
    isLoading: false,
    userCurrent: [],
    error: null,
    emailUserResetPass: null
}

export const UserReducer = (state = InitialState, action: UserLoginAction) => {
    switch (action.type) {
        // ------------- LOGIN
        case UserConstant.LOGIN_USER_REQUEST: {
            return {
                isLoading: true
            }
        }

        case UserConstant.LOGIN_USER_SUCCESS: {
            return {
                isLoading: false,
                userCurrent: action.payload,
                error: undefined,
            }
        }

        case UserConstant.LOGIN_USER_FAILURE: {
            return {
                error: action.payload,
                isLoading: false,
            }
        }

        // ------------- REGISTER
        case UserConstant.REGISTER_USER_REQUEST: {
            return {
                isLoading: true
            }
        }

        case UserConstant.REGISTER_USER_SUCCESS: {
            return {
                isLoading: false,
                userCurrent: action.payload,
                error: undefined,
            }
        }

        case UserConstant.REGISTER_USER_FAILURE: {
            return {
                error: action.payload,
                isLoading: false,
            }
        }

        // ------------- GET OTP BY EMAIL
        case UserConstant.GET_EMAIL_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserConstant.GET_EMAIL_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                result: action.payload,
                error: undefined,
            }
        }

        case UserConstant.GET_EMAIL_FAILURE: {
            return {
                ...state,
                errorResetPass: action.payload,
                isLoading: false,
            }
        }

        // ------------- CHECK OTP
        case UserConstant.CHECK_OTP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserConstant.CHECK_OTP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                checkOtp: action.payload
            }
        }

        case UserConstant.CHECK_OTP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }

        // ------------- UPDATE PASSWORD
        case UserConstant.UPDATE_PASSWORD_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserConstant.UPDATE_PASSWORD_SUCCESS: {
            return {
                ...state,
                resultUpdatePassword: action.payload
            }
        }

        case UserConstant.UPDATE_PASSWORD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }

        // ------------- SAVE EMAIL USER
        case UserConstant.SAVE_EMAIL_USER: {
            return {
                ...state,
                emailUserResetPass: action.payload
            }
        }

        // ------------- DELETE USER STATE
        case UserConstant.CLEAR_USER_STATE: {
            return {}
        }
    
        default: return state
    }
}