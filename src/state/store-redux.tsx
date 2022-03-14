import { combineReducers, createStore, applyMiddleware } from "redux";
import { users_reducer } from "../reducers/users_reducer";
import { post_reducer } from "../reducers/post_reducer";
import {app_reducer} from "../reducers/app_reducer";
import {auth_reducer} from "../reducers/auth_reducer";
import ThunkMiddleware from 'redux-thunk'

const rootReducers = combineReducers( {
    usersReducer: users_reducer,
    postReducer: post_reducer,
    appReducer: app_reducer,
    authReducer: auth_reducer
});

export const store = createStore(rootReducers,applyMiddleware(ThunkMiddleware));


export type rootReducerType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store;