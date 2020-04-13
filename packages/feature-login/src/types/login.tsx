export enum LoginActionConstants {
    LOGIN_CHECK_STATUS = 'LOGIN/STATUS',
    LOGIN_START = 'LOGIN/START',
    LOGIN_START_SUCCESS = 'LOGIN/START_SUCCESS',
    LOGIN_COMPLETE = 'LOGIN/COMPLETE',
    LOGIN_COMPLETE_SUCCESS = 'LOGIN/COMPLETE_SUCCESS',
}

export interface User {
    username: string;
}

export interface UserReducerState {
    user: User | null,
    token: string | null;
}

export type FeatureLoginState = {
    user: UserReducerState
}
