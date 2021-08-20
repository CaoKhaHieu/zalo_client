import { UserConstant } from "../../constants/UserConstant";
import { Actions, Email, Error, Message, OTP, refeshToken, Tokens, User } from "../../types/UserType";

// -------------- LOGIN
export const loginUserRequest = (data: User): Actions => {
  return {
    type: UserConstant.LOGIN_USER_REQUEST,
    payload: data,
  };
};

export const loginUserSuccess = (data: User): Actions => {
  return {
    type: UserConstant.LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserFailure = (error: Error): Actions => {
  return {
    type: UserConstant.LOGIN_USER_FAILURE,
    payload: error,
  };
};

// -------------- REGISTER
export const registerUserRequest = (data: User): Actions => {
  return {
    type: UserConstant.REGISTER_USER_REQUEST,
    payload: data,
  };
};

export const registerUserSuccess = (data: User): Actions => {
  return {
    type: UserConstant.REGISTER_USER_SUCCESS,
    payload: data,
  };
};

export const registerUserFailure = (error: Error): Actions => {
  return {
    type: UserConstant.REGISTER_USER_FAILURE,
    payload: error,
  };
};


// -------------- LOGOUT
export const logoutUserRequest = (): Actions => {
    localStorage.removeItem('token')
    localStorage.removeItem('refeshToken');
  return {
    type: UserConstant.LOGOUT_USER_REQUEST,
  };
};

export const logoutUserSuccess = (message: Message): Actions => {
  return {
    type: UserConstant.LOGOUT_USER_SUCCESS,
    payload: message,
  };
};

export const logoutUserFailure = (error: Error): Actions => {
  return {
    type: UserConstant.LOGOUT_USER_FAILURE,
    payload: error,
  };
};


// -------------- CHECK OTP
export const checkOtpRequest = (data: OTP): Actions => {
  return {
    type: UserConstant.CHECK_OTP_REQUEST,
    payload: data,
  };
};

export const checkOtpSuccess = (data: Message): Actions => {
  return {
    type: UserConstant.CHECK_OTP_SUCCESS,
    payload: data,
  };
};

export const checkOtpFailure = (error: Error): Actions => {
  return {
    type: UserConstant.CHECK_OTP_FAILURE,
    payload: error,
  };
};

// -------------- GET OTP
export const getEmailRequest = (data: Email): Actions => {
  return {
    type: UserConstant.GET_EMAIL_REQUEST,
    payload: data,
  };
};

export const getEmailSuccess = (data: Message): Actions => {
  return {
    type: UserConstant.GET_EMAIL_SUCCESS,
    payload: data,
  };
};

export const getEmailFailure = (error: Error): Actions => {
  return {
    type: UserConstant.GET_EMAIL_FAILURE,
    payload: error,
  };
};

// -------------- UPDATE PASWORD
export const updatePasswordRequest = (data: Email): Actions => {
  return {
    type: UserConstant.UPDATE_PASSWORD_REQUEST,
    payload: data,
  };
};

export const updatePasswordSuccess = (data: Message): Actions => {
  return {
    type: UserConstant.CHECK_OTP_FAILURE,
    payload: data,
  };
};

export const updatePasswordFailure = (error: Error): Actions => {
  return {
    type: UserConstant.CHECK_OTP_FAILURE,
    payload: error,
  };
};

// -------------- GET NEW ACCESS TOKEN
export const getNewTokenRequest = (refeshToken: refeshToken): Actions => {
  return {
    type: UserConstant.GET_NEW_TOKEN_REQUEST,
    payload: refeshToken,
  };
};

export const getNewTokenSuccess = (tokens: Tokens): Actions => {
  return {
    type: UserConstant.GET_NEW_TOKEN_SUCCESS,
    payload: tokens,
  };
};

export const getNewTokenFailure = (error: Error): Actions => {
  return {
    type: UserConstant.GET_NEW_TOKEN_FAILURE,
    payload: error,
  };
};

// -------------- DELETE USER STATE
export const clearUserState = (): Actions => {
    return {
      type: UserConstant.CLEAR_USER_STATE,
    };
};

// -------------- SAVE EMAIL USER TO STATE
export const saveEmailUser = (data: Email): Actions => {
  localStorage.setItem('emailUserResetPass', JSON.stringify(data))
  return {
    type: UserConstant.SAVE_EMAIL_USER,
    payload: data,
  };
};

