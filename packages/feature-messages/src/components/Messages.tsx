import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FeatureMessageState} from '../types/message';
import {messageActions} from "../actions/message";
import {Box} from '@opr-finance/component-box';
import {Button} from '@opr-finance/component-button';

export function Messages() {
    const dispatch = useDispatch();
    const messages = useSelector((state: FeatureMessageState) => {
        return state.message.messages;
    });
    return (
        <Box>
            <Button onClick={() => {
                console.log('clicked!');
                dispatch(messageActions.addMessage({
                    message: "Hello wrold!"
                }));
            }}>Add message</Button>
            {messages.map((message, index) => {
                return <div key={"message-" + index}>{message.message}</div>
            })}
        </Box>
    );
}
