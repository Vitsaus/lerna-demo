import React from "react";
import {RouteComponentProps} from 'react-router-dom';

type UserPageProps = {
    id: string;
}

export function UserPage({match}: RouteComponentProps<UserPageProps>) {
    return (
        <div>
            User: {match.params.id}
        </div>
    );
}
