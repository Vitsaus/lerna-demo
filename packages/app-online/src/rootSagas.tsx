import { all, fork } from 'redux-saga/effects';
import { watchAddMessage } from '@opr-finance/feature-messages';
import { watchCheckLoginStatus, watchCompleteLogin, watchStartLogin } from "@opr-finance/feature-login";

export default function* rootSaga() {
    yield all([
        fork(watchAddMessage),
        fork(watchCheckLoginStatus),
        fork(watchStartLogin),
        fork(watchCompleteLogin),
    ]);
}
