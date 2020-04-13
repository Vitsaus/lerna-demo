import React from 'react';
import { Message, Messages } from '@opr-finance/feature-messages';
import { useSelector } from "react-redux";
import { AppState } from "./types/general";

const App: React.FC = () => {
    const messages = useSelector<AppState, Message[]>((state: AppState): Message[] => {
        return state.message.messages;
    })
    return (
        <div>
            <div>Got messages: {messages.length}</div>
            <Messages />
        </div>
    );
}

export default App;
