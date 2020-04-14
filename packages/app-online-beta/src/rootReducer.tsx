import { combineReducers } from 'redux';
import { messageReducer } from '@opr-finance/feature-messages';
import {loginReducer} from "@opr-finance/feature-login";

export const rootReducer = combineReducers({
    message: messageReducer,
    user: loginReducer
});

