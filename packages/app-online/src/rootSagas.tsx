import { all, fork } from 'redux-saga/effects';
import { watchAddMessage } from '@opr-finance/feature-messages';

export default function* rootSaga() {
    yield all([
        fork(watchAddMessage)
    ]);
}
