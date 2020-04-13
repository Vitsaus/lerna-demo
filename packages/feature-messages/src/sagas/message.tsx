import { takeEvery, put, call } from 'redux-saga/effects';
import {Message, MessageActionConstants} from '../types/message';
import { messageActions } from '../actions/message';
import {helloApi} from "../api/hello";

export function* watchAddMessage() {
    yield takeEvery(MessageActionConstants.ADD_MESSAGE, handleAddMessage);
}

export function* handleAddMessage() {
    const message: Message = yield call(helloApi);
    yield put(messageActions.addMessageSuccess(message));
}
