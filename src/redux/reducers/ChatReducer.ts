import { ChatConstant } from "../../constants/ChatConstant";
import { Actions, FriendItem } from "../../types/UserType"
import { Conversation, IMessage } from "../../types/ChatType"

interface ChatState{
    isloading: boolean,
    error: any
    chatWith: FriendItem | null
    listMessage: IMessage[] 
    listConversation: Conversation[]
}

const initialState: ChatState = {
    isloading: false,
    error: null,
    chatWith: null,
    listMessage: [],
    listConversation: []
}

export const chatReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        // -------------------- GET ALL MESSAGE BY CONVERSATION
        case ChatConstant.GET_ALL_MESSAGE_BY_CONVERSATION_REQUEST: {
            return{
                ...state,
                isLoading: true
            }
        }
        case ChatConstant.GET_ALL_MESSAGE_BY_CONVERSATION_SUCCESS: {
            return{
                ...state,
                isLoading: false,
                listMessage: action.payload
            }
        }
        case ChatConstant.GET_ALL_MESSAGE_BY_CONVERSATION_FAILURE: {
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        // -------------------- PUSH NEW MESSAGE TO LIST MESSAGE
        case ChatConstant.PUSH_NEW_MESSAGE_TO_LIST_MESSAGE: {
            const newListMessage = [...state.listMessage]
            newListMessage.push(action.payload)
            return{
                ...state,
                listMessage: newListMessage
            }
        }

        // -------------------- GET ALL MESSAGE BY CONVERSATION
        case ChatConstant.GET_ALL_CONVERSATION_BY_USER_REQUEST: {
            return{
                ...state,
                isLoading: true
            }
        }
        case ChatConstant.GET_ALL_CONVERSATION_BY_USER_SUCCESS: {
            return{
                ...state,
                isLoading: false,
                listConversation: action.payload
            }
        }
        case ChatConstant.GET_ALL_CONVERSATION_BY_USER_FAILURE: {
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        }


        // -------------------- SAVE INFO CHAT WITH
        case ChatConstant.SAVE_INFO_CHAT_WITH: {
            return{
                ...state,
                chatWith: action.payload
            }
        }
        default:return state
    }
}
