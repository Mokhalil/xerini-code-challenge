import React, {useState} from "react";
import {LoginRquest} from "../../../app/models/requests/login-request";
import {Field, Form, Formik} from "formik";
import {loginFormSchema} from "./login-form-schema";
import LoadingIndicator from "../../../app/common/loading-indicator";
import Alert from "../../../app/common/alert";

interface IProps {
    onSubmit: (values: any) => void;
    loading: boolean;
    error? : string;
}

const LoginForm = ({onSubmit, loading, error}: IProps) => {
    //state
    const [loginRequest, setLoginRequest] = useState<LoginRquest>(
        new LoginRquest()
    );

    //handlers
    const onFormSubmit = (values: any) => {
        onSubmit(values);
    };


    return (
        <Formik
            onSubmit={onFormSubmit}
            initialValues={loginRequest}
            enableReinitialize={true}
            validationSchema={loginFormSchema}
        >
            {(formik) => (
                <Form className="space-y-6">
                    {(error)?<Alert message={error}/>:''}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <div className="mt-1">
                            <Field
                                {...formik.getFieldProps("username")}
                                disabled={loading}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {formik.errors.username && formik.touched.username ? (
                                <p className="mt-2 text-sm text-red-600" id="email-error">{formik.errors.username}</p>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="mt-1">
                            <Field
                                {...formik.getFieldProps("password")}
                                type="password"
                                disabled={loading}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <p className="mt-2 text-sm text-red-600" id="email-error">{formik.errors.password}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <LoadingIndicator loading={loading}/>
                            Sign in
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
