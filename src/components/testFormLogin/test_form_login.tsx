import React from 'react';
import { useFormik } from 'formik';
import style from './test_login_form.module.css'
import {authorizeMeTC} from "../../reducers/auth_reducer";
import {useDispatch} from "react-redux";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values: { email: string; password: string | []; checkbox : boolean}) => {
    const errors: any = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export const TestFormLogin = () => {
    const dispatch = useDispatch()
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkbox: false,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log( values )
            dispatch(authorizeMeTC(values))
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={style.form_test}>


            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <label htmlFor="checkbox">Password</label>
            <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.checkbox}
            />
            {/*{formik.errors.email ? <div>{formik.errors.email}</div> : null}*/}

            <button type="submit">Submit</button>
        </form>
    );
};