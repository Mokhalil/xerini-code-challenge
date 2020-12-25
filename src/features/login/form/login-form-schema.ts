import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
    username : yup.string().required('Username cannot be left blank'),
    password : yup.string().required('Password cannot be left blank').min(5,'Password cannot be less than 5 characters')
})