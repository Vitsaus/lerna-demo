import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FeatureLoginState} from "../types/login";
import {loginActions} from "../actions/login";

export function IsAuthenticated() {

    const dispatch = useDispatch();
    const token = useSelector((state: FeatureLoginState) => {
        return state.user.token;
    });

    return (
        <div onClick={() => {
            dispatch(loginActions.loginCheckStatus());
        }}>
            Is authenticated? {token ? 'Yes' : 'No'}
        </div>
    );
}
