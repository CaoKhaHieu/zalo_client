import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  checkOtp,
  getEmail,
  login,
  register,
  updatePassword,
} from "../../api/UserApi";
import { UserConstant } from "../../constants/UserConstant";
import { Actions, User, Message } from "../../types/UserType";
import {
  checkOtpFailure,
  checkOtpSuccess,
  getEmailFailure,
  getEmailSuccess,
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
    localStorage.setItem("user_token", JSON.stringify(user));
    yield put(loginUserSuccess(user));
  } catch (error) {
    yield put(loginUserFailure(error.response.data.message));
  }
}

function* RegisterSaga(action: Actions) {
  console.log(action);
  try {
    const user: User = yield call(register, action.payload);
    localStorage.setItem("user_token", JSON.stringify(user));
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

function* mySaga() {
  yield takeLatest(UserConstant.LOGIN_USER_REQUEST, LoginSaga);
  yield takeEvery(UserConstant.REGISTER_USER_REQUEST, RegisterSaga);
  yield takeLatest(UserConstant.GET_EMAIL_REQUEST, GetEmailSaga);
  yield takeLatest(UserConstant.CHECK_OTP_REQUEST, CheckOtpSaga);
  yield takeLatest(UserConstant.UPDATE_PASSWORD_REQUEST, UpdatePasswordSaga);
}

export default mySaga;
