import { Message, MessageActionConstants } from '../types/message';
import { ActionType, createAction } from 'typesafe-actions';

export const messageActions = {
    addMessage: createAction(MessageActionConstants.ADD_MESSAGE)<Message>(),
    addMessageSuccess: createAction(MessageActionConstants.ADD_MESSAGE_SUCCESS)<Message>(),
    ping: createAction(MessageActionConstants.PING)()
};

export type MessageAction = ActionType<typeof messageActions>;
