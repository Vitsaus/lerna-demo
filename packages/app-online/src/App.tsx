import React from 'react';
import { Message, Messages } from '@opr-finance/feature-messages';
import { IsAuthenticated } from "@opr-finance/feature-login";
import { useSelector } from "react-redux";
import { AppState } from "./types/general";

const App: React.FC = () => {
    const messages = useSelector<AppState, Message[]>((state: AppState): Message[] => {
        return state.message.messages;
    });
    return (
        <div>
            <div>Got messages: {messages.length}</div>
            <IsAuthenticated />
            <Messages />
        </div>
    );
}

export default App;
