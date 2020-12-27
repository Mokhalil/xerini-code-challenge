import * as yup from 'yup';


export const loginFormMessages={
    userNameIsBlank : 'Username cannot be left blank',
    passwordIsBlank:'Password cannot be left blank',
    passwordIsLessThan5:'Password cannot be less than 5 characters'
}
export const loginFormSchema = yup.object().shape({
    username : yup.string().required(loginFormMessages.userNameIsBlank),
    password : yup.string().required(loginFormMessages.passwordIsBlank).min(5,loginFormMessages.passwordIsLessThan5)
})