import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FeatureMessageState, Message} from '../types/message';
import {messageActions} from "../actions/message";

export function Messages() {
    const dispatch = useDispatch();
    const messages = useSelector((state: FeatureMessageState) => {
        return state.message.messages;
    });
    return (
        <div>
            <div onClick={() => {
                console.log('clicked!');
                dispatch(messageActions.addMessage({
                    message: "Hello wrold!"
                }));
            }}>Add message</div>
            {messages.map((message, index) => {
                return <div key={"message-" + index}>{message.message}</div>
            })}
        </div>
    );
}
