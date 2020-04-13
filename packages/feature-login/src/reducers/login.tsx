import { createReducer, getType } from 'typesafe-actions';
import { produce } from 'immer';

import {UserReducerState} from "../types/login";
import {LoginAction, loginActions} from "../actions/login";

export const initialState: UserReducerState = {
    user: null,
    token: null,
};

export const loginReducer = createReducer<UserReducerState, LoginAction>(initialState)
    .handleAction(loginActions.loginCompleteSuccess, (state: UserReducerState, action) => {
        return produce(state, (draftState) => {
            draftState.user = action.payload;
        });
    });
;
