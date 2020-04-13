export enum MessageActionConstants {
    ADD_MESSAGE = 'MESSAGE/ADD_MESSAGE',
    ADD_MESSAGE_SUCCESS = 'MESSAGE/ADD_MESSAGE_SUCCESS',
    PING = 'MESSAGE/PING',
}

export interface Message {
    message: string;
}

export interface MessageReducerState {
    messages: Message[];
}

export type FeatureMessageState = {
    message: MessageReducerState
}
