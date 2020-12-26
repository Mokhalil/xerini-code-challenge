import * as yup from 'yup';

export const profileFormSchema = yup.object().shape({
    first_name: yup.string().required('First name cannot be blank'),
    other_names: yup.string().required('First name cannot be blank'),
    address: yup.object().shape ({
        street: yup.string().required('Street cannot be blank'),
        town: yup.string().required('Town cannot be blank'),
        county: yup.string().required('County cannot be blank'),
        postcode: yup.string().required('Postcode cannot be blank')
    }),
    mobile: yup.string().required('Mobile cannot be blank'),
    email: yup.string().required('email cannot be blank'),
    company: yup.string().required('Company cannot be blank'),
    preferences: yup.array().min(1,"Notification preferences should contain at least one option. "),
})