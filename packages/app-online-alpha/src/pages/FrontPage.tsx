import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { IsAuthenticated } from "@opr-finance/feature-login";
import { useSelector } from "react-redux";
import { AppState } from "../types/general";

export function FrontPage() {
    return (
        <div>
            <IsAuthenticated />
        </div>
    );
}
