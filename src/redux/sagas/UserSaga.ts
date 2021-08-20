import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  checkOtp,
  getEmail,
  getNewToken,
  login,
  register,
  updatePassword,
} from "../../api/UserApi";
import { UserConstant } from "../../constants/UserConstant";
import { Actions, User, Message, Tokens } from "../../types/UserType";
import {
  checkOtpFailure,
  checkOtpSuccess,
  getEmailFailure,
  getEmailSuccess,
  getNewTokenFailure,
  getNewTokenSuccess,
  loginUserFailure,
  loginUserSuccess,
  registerUserFailure,
  registerUserSuccess,
  updatePasswordFailure,
  updatePasswordSuccess,
} from "../actions/UserAction";

function* LoginSaga(action: Actions) {
  try {
    const user: User = yield call(login, action.payload);
    localStorage.setItem("token", JSON.stringify(user.token));
    localStorage.setItem("refeshToken", JSON.stringify(user.refeshToken));
    yield put(loginUserSuccess(user));
    document.location.href = "/";
  } catch (error) {
    yield put(loginUserFailure(error.response.data.message));
  }
}

function* RegisterSaga(action: Actions) {
  try {
    const user: User = yield call(register, action.payload);
    localStorage.setItem("refeshToken", JSON.stringify(user.refeshToken));
    yield put(registerUserSuccess(user));
  } catch (error) {
    yield put(registerUserFailure(error.response.data.message));
  }
}


function* GetEmailSaga(action: Actions){
  try {
    const result: Message = yield call(getEmail, action.payload);
    yield put(getEmailSuccess(result));
  } catch (error) {
    yield put(getEmailFailure(error.response.data.message));
  }
}

function* CheckOtpSaga(action: Actions) {
  console.log(action);
  try {
    const result: Message = yield call(checkOtp, action.payload);
    yield put(checkOtpSuccess(result));
    document.location.href = "/newpass";
  } catch (error) {
    yield put(checkOtpFailure(error.response.data.message));
  }
}

function* UpdatePasswordSaga(action: Actions) {
  try {
    const result: Message = yield call(updatePassword, action.payload);
    yield put(updatePasswordSuccess(result));
    document.location.href = "/login";
  } catch (error) {
    yield put(updatePasswordFailure(error.response.data.message));
  }
}

function* GetNewTokenSaga(action: Actions) {
  try {
    const result: Tokens = yield call(getNewToken, action.payload);
    localStorage.setItem("token", JSON.stringify(result.accessToken));
    localStorage.setItem("refeshToken", JSON.stringify(result.refeshToken));
    yield put(getNewTokenSuccess(result));
  } catch (error) {
    yield put(getNewTokenFailure(error.response.data.message));
  }
}

function* mySaga() {
  yield takeEvery(UserConstant.LOGIN_USER_REQUEST, LoginSaga);
  yield takeEvery(UserConstant.REGISTER_USER_REQUEST, RegisterSaga);
  
  yield takeLatest(UserConstant.GET_EMAIL_REQUEST, GetEmailSaga);
  yield takeLatest(UserConstant.CHECK_OTP_REQUEST, CheckOtpSaga);
  yield takeLatest(UserConstant.UPDATE_PASSWORD_REQUEST, UpdatePasswordSaga);
  yield takeLatest(UserConstant.GET_NEW_TOKEN_REQUEST, GetNewTokenSaga);

}

export default mySaga;
