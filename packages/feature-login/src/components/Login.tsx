import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {loginActions} from "../actions/login";
import {Loader} from '@opr-finance/component-loader';

export function Login() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginActions.loginStart);
    }, []);

    return <Loader isLoading={true} />;

}
