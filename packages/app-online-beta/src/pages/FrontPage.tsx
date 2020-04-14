import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Message, Messages } from '@opr-finance/feature-messages';
import { IsAuthenticated } from "@opr-finance/feature-login";
import { useSelector } from "react-redux";
import { AppState } from "../types/general";

export function FrontPage() {
    const messages = useSelector<AppState, Message[]>((state: AppState): Message[] => {
        return state.message.messages;
    });
    return (
        <div>
            <div>
                <div>Got messages: {messages.length}</div>
                <IsAuthenticated />
                <Messages />
            </div>
        </div>
    );
}
