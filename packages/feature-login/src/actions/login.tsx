import { ActionType, createAction } from 'typesafe-actions';
import {LoginActionConstants, User} from "../types/login";

export const loginActions = {
    loginStart: createAction(LoginActionConstants.LOGIN_START)(),
    loginSuccess: createAction(LoginActionConstants.LOGIN_START_SUCCESS)(),
    loginComplete: createAction(LoginActionConstants.LOGIN_COMPLETE)(),
    loginCompleteSuccess: createAction(LoginActionConstants.LOGIN_COMPLETE_SUCCESS)<User>(),
    loginCheckStatus: createAction(LoginActionConstants.LOGIN_CHECK_STATUS)(),
};

export type LoginAction = ActionType<typeof loginActions>;
