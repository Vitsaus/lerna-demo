import { takeEvery, put, call } from 'redux-saga/effects';
import {LoginActionConstants} from "../types/login";

export function* watchStartLogin() {
    yield takeEvery(LoginActionConstants.LOGIN_START, handleStartLogin);
}

export function* handleStartLogin() {
    console.log('start login!');
}

export function* watchCompleteLogin() {
    yield takeEvery(LoginActionConstants.LOGIN_COMPLETE, handleCompleteLogin);
}

export function* handleCompleteLogin() {
    console.log('complete login!');
}

export function* watchCheckLoginStatus() {
    yield takeEvery(LoginActionConstants.LOGIN_CHECK_STATUS, handleCheckLoginStatus);
}

export function* handleCheckLoginStatus() {
    console.log('check login status');
}
