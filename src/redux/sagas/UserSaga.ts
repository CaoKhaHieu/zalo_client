import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  acceptFriend,
  checkOtp,
  getEmail,
  getNewToken,
  getUserById,
  login,
  register,
  searchUser,
  updateAvatar,
  updatePassword,
} from "../../api/UserApi";
import { UserConstant } from "../../constants/UserConstant";
import { Actions, User, Message, Tokens, Error } from "../../types/UserType";
import {
  acceptFriendFailure,
  acceptFriendSuccess,
  checkOtpFailure,
  checkOtpSuccess,
  getEmailFailure,
  getEmailSuccess,
  getNewTokenFailure,
  getNewTokenSuccess,
  getUserByIdFailure,
  getUserByIdSuccess,
  loginUserFailure,
  loginUserSuccess,
  registerUserFailure,
  registerUserSuccess,
  searchUserFailure,
  searchUserSuccess,
  updateAvatarFailure,
  updateAvatarSuccess,
  updatePasswordFailure,
  updatePasswordSuccess,
} from "../actions/UserAction";

function* LoginSaga(action: Actions) {
  try {
    const user: User = yield call(login, action.payload);
    localStorage.setItem("token", JSON.stringify(user.token));
    localStorage.setItem("refeshToken", JSON.stringify(user.refeshToken));
    yield put(loginUserSuccess(user));
    action.callback()
  } catch (error) {
    yield put(loginUserFailure(error.response.data.message));
  }
}

function* RegisterSaga(action: Actions) {
  try {
    const user: User = yield call(register, action.payload);
    localStorage.setItem("refeshToken", JSON.stringify(user.refeshToken));
    yield put(registerUserSuccess(user));
    action.callback()
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
    action.callback()
  } catch (error) {
    yield put(checkOtpFailure(error.response.data.message));
  }
}

function* UpdatePasswordSaga(action: Actions) {
  try {
    const result: Message = yield call(updatePassword, action.payload);
    yield put(updatePasswordSuccess(result));
    action.callback()
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

function* GetUserByIdSaga(action: Actions) {
  try {
    const user: User = yield call(getUserById, action.payload);
    yield put(getUserByIdSuccess(user));
  } catch (error) {
    yield put(getUserByIdFailure(error.response.data.message));
  }
}

function* UpdateAvatarSaga(action: Actions) {
  try {
    const result: User = yield call(updateAvatar, action.payload);
    yield put(updateAvatarSuccess(result));
  } catch (error) {
    yield put(updateAvatarFailure(error.response.data.message));
  }
}

function* SearchUserSaga(action: Actions) {
  try {
    const result: User = yield call(searchUser, action.payload);
    yield put(searchUserSuccess(result));
  } catch (error) {
    yield put(searchUserFailure(error.response.data.message));
  }
}

function* AcceptFriendSaga(action: Actions) {
  try {
    const result: User = yield call(acceptFriend, action.payload);
    yield put(acceptFriendSuccess(result));
  } catch (error) {
    yield put(acceptFriendFailure(error.response.data.message));
  }
}

function* mySaga() {
  yield takeEvery(UserConstant.LOGIN_USER_REQUEST, LoginSaga);
  yield takeEvery(UserConstant.REGISTER_USER_REQUEST, RegisterSaga);
  yield takeLatest(UserConstant.GET_USER_BY_ID_REQUEST, GetUserByIdSaga);
  yield takeLatest(UserConstant.UPDATE_AVATAR_REQUEST, UpdateAvatarSaga);
  
  yield takeLatest(UserConstant.GET_EMAIL_REQUEST, GetEmailSaga);
  yield takeLatest(UserConstant.CHECK_OTP_REQUEST, CheckOtpSaga);
  yield takeLatest(UserConstant.UPDATE_PASSWORD_REQUEST, UpdatePasswordSaga);
  yield takeLatest(UserConstant.GET_NEW_TOKEN_REQUEST, GetNewTokenSaga);
  yield takeLatest(UserConstant.SEARCH_USER_REQUEST, SearchUserSaga);

  yield takeLatest(UserConstant.ACCEPT_FRIEND_REQUEST, AcceptFriendSaga);
}

export default mySaga;
