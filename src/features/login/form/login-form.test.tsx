import React from 'react';
import {render, screen,fireEvent} from "@testing-library/react";
import LoginForm from "./login-form";
import { loginFormMessages } from './login-form-schema';
import { act } from 'react-dom/test-utils';
import { LoginRquest } from '../../../app/models/requests/login-request';
import {sign} from "crypto";

describe('Login Form', () => {

    const onSubmitMock = jest.fn()
    let userNameField:any;
    let passwordField:any;
    let rememberMeCheckbox:any;
    let signInButton:any;

    beforeEach(()=>{
        onSubmitMock.mockClear();
        const props = {
            onSubmit : onSubmitMock,
            loading : false,
            initialValues : new LoginRquest()
        }
        render(<LoginForm {...props}/>);
        signInButton = screen.getByText('Sign in');
        userNameField = screen.getByLabelText('Email address');
        passwordField = screen.getByLabelText('Password');

    })

    it('should not submit when all fields are empty',async ()=>{
        await act(async()=>{
            fireEvent.click(signInButton);
        })


        //OnSubmit should not be called
        expect(onSubmitMock.mock.calls.length).toBe(0);
        //screen.debug();

        //Error messages should display
        expect(screen.getByText(loginFormMessages.userNameIsBlank)).toBeTruthy();
        expect(screen.getByText(loginFormMessages.passwordIsBlank)).toBeInTheDocument();
    })

    it('should call the onsubmit if all fields are properly filled-in',async()=>{

        await act(async()=>{
            fireEvent.change(userNameField, {target:{value:'mk'}});
            fireEvent.change(passwordField, {target:{value:'password1'}});
        })

        await act(async()=>{
            fireEvent.click(signInButton);
        })

        expect(onSubmitMock.mock.calls.length).toBe(1);
        expect(onSubmitMock.mock.calls[0][0]).toEqual({username:'mk',password:'password1',"rememberUser": false,});
    })
});