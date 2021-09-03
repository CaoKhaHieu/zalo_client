import { combineReducers } from "redux";
import { optionLayoutReducer } from "./optionLayoutReducer";
import { createSocket } from "./SocketReducer";
import { UserReducer } from "./UserReducer";

export const reducers: any = combineReducers({
    user: UserReducer,
    socket: createSocket,
    optionLayout: optionLayoutReducer,
})

export type RootState = ReturnType<typeof reducers>;