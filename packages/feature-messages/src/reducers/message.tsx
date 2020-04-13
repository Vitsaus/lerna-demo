import { createReducer, getType } from 'typesafe-actions';
import { produce } from 'immer';

import { MessageReducerState, Message } from '../types/message';
import { MessageAction, messageActions } from '../actions/message';

export const initialState: MessageReducerState = {
    messages: []
};

export const messageReducer = createReducer<MessageReducerState, MessageAction>(initialState)
    .handleAction(messageActions.addMessageSuccess, (state, action) => {
        return produce(state, (draftState) => {
            draftState.messages.push({
                message: action.payload.message
            });
        });
    });
;
