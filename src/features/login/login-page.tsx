import React from 'react';
import LoginForm from './login-form';

const LoginPage = () => {
    return (
        <div className={'bg-gray-50 min-h-screen flex flex-col justify-center px-8 py-12'}>
            <div className={'mx-auto w-full max-w-md'}>
                <img className={'mx-auto w-auto'} src={'Xerini-logo-lock-up.svg'}/>
                <div className={'mt-6 text-center text-3xl font-extrabold text-gray-900'}>Sign into your account</div>
                <p className="mt-2 text-center text-lg text-gray-600 max-w">
                    Or
                    <a href="#" className="font-medium text-lg text-purple-900 hover:text-purple-500">
                        {` sign up if it's your first time`}
                    </a>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;