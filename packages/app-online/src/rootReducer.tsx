import { combineReducers } from 'redux';
import { messageReducer } from '@opr-finance/feature-messages';

export const rootReducer = combineReducers({
    message: messageReducer,
});

