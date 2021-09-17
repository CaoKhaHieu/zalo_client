import { call, put, takeLatest } from "@redux-saga/core/effects"
import { getAllConversationByUser, getAllMessageByConversation } from "../../api/ChatApi"
import { ChatConstant } from "../../constants/ChatConstant"
import { Conversation, IMessage } from "../../types/ChatType"
import { Actions } from "../../types/common/CommonType"
import { getAllConversationByUserFailure, getAllConversationByUserSuccess, getAllMessageByConversationFailure, getAllMessageByConversationSuccess } from "../actions/ChatAction"

function* getAllMessageByConversationSaga(action: Actions){
    try {
        const data:IMessage[] =  yield call(getAllMessageByConversation, action.payload)
        yield put(getAllMessageByConversationSuccess(data))

    } catch (error) {
        yield put(getAllMessageByConversationFailure(error.response.data.message))
    }
}

function* getAllConversationByUserSaga(action: Actions){
    try {
        const data:Conversation[] =  yield call(getAllConversationByUser, action.payload)
        yield put(getAllConversationByUserSuccess(data))

    } catch (error) {
        yield put(getAllConversationByUserFailure(error.response.data.message))
    }
}

function* ChatSaga(){
    yield takeLatest(ChatConstant.GET_ALL_MESSAGE_BY_CONVERSATION_REQUEST, getAllMessageByConversationSaga)
    yield takeLatest(ChatConstant.GET_ALL_CONVERSATION_BY_USER_REQUEST, getAllConversationByUserSaga)
}

export default ChatSaga