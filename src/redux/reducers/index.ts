import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";

export const reducers = combineReducers({
    user: UserReducer,   
})

export type RootState = ReturnType<typeof reducers>;