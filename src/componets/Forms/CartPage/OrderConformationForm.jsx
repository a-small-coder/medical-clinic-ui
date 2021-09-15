import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import { getInitValuesFromCheckboxData } from '../CatalogPage/CatalogFilterForm';
import FormikControl from '../BaseComponents/FormikControl';

function OrderConformationForm(props) {

    // const checkBoxesOptions = [
    //     {
    //         key: 'Я даю согласие на ', 
    //         value: 'acceptTermAndConditions',
    //         chebox_value: true,
    //         link: {
    //             text: "обработку персональных данных", 
    //             ref: "/personal-conversations"
    //         }
    //     },
    //     {
    //         key: 'Подписаться на рассылку по e-mail ', 
    //         value: 'acceptMailing',
    //         chebox_value: true,
    //         link: null
    //     },
    // ]

    const checkBoxOptions = [
        {
            key: 'Я даю согласие на ', 
            value: 'confirmUserData',
            chebox_value: true,
            link: {
                text: "обработку персональных данных", 
                ref: "/personal-conversations"
            }
        },
    ]
    const initialValues = {
        fullName: props.init.fullName != null? props.init.fullName : '',
        adress: props.init.address != null? props.init.address : '',
        phoneNumber: props.init.phone != null? props.init.phone : '',
        email: props.init.email != null? props.init.email : '',
        acceptTermAndConditions: getInitValuesFromCheckboxData(checkBoxOptions),
        // checkboxes: getInitValuesFromCheckboxData(checkBoxesOptions),
    }

    const validation = Yup.object({
        fullName: Yup.string().required('Поле "ФИО" обязательно для заполнения.'),
        adress: Yup.string().required('Поле "Адрес" обязательно для заполнения.'),
        phoneNumber: Yup.string().required('Поле "Номер телефона" обязательно для заполнения.'),
        email: Yup.string()
            .email('Неверный формат почтового адреса')
            .required('Поле "Email" обязательно для заполнения.'),
        acceptTermAndConditions: Yup.array().min(1,"Необходимо подтвердить согласие на обработку персональных данных"),
    })

    const onSubmit = values =>{
        console.log("Form data", values)
        props.onSubmit(values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ values, errors, touched, isValid, handleBlur, handleChange}) => {
                    return (
                        <Form className="order-form" autoComplete="off">
                            <div className="order-form__form">
                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='ФИО' 
                                    name='fullName' 
                                    fieldClassName="auth_input" 
                                    placeholder="Иванов Иван Иванович"
                                    standartOnBlur={handleBlur}
                                    isError={errors.fullName && touched.fullName}
                                />

                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Адрес' 
                                    name='adress' 
                                    fieldClassName="auth_input" 
                                    placeholder="Москва, ул. Пушкина, д. 66, кв. 6"
                                    standartOnBlur={handleBlur}
                                    isError={errors.adress && touched.adress}
                                />

                                <FormikControl
                                    control='input' 
                                    type="text" 
                                    label='Номер телефона' 
                                    name='phoneNumber' 
                                    fieldClassName="auth_input" 
                                    placeholder="+7(000)-000-00-00"
                                    standartOnBlur={handleBlur}
                                    isError={errors.phoneNumber && touched.phoneNumber}
                                />

                                <FormikControl 
                                    control='input' 
                                    type="email" 
                                    label='Email' 
                                    name='email' 
                                    fieldClassName="auth_input" 
                                    placeholder="yourEmail@mail.ru"
                                    standartOnBlur={handleBlur}
                                    isError={errors.email && touched.email}
                                />

                                

                                <FormikControl
                                    control="checkbox"
                                    name="acceptTermAndConditions"
                                    options={checkBoxOptions}
                                    checkboxValue={values.acceptTermAndConditions}
                                    standartOnChange={handleChange}
                                    isError={errors.acceptTermAndConditions}
                                    wrapperClassName={"form-control checkbox-block"}
                                />

                                {/* <FormikControl
                                    control="checkbox"
                                    name="checkboxes"
                                    options={checkBoxesOptions}
                                    checkboxValue={values.checkboxes}
                                    standartOnChange={handleChange}
                                    isError={errors.checkboxes}
                                    wrapperClassName={"form-control checkbox-block"}
                                /> */}

                                {/* <FormikControl
                                    control="checkbox"
                                    name="acceptMailing"
                                    options={acceptMailingCBOptions}
                                    checkboxValue={values.acceptMailing}
                                    standartOnChange={handleChange}
                                    isError={errors.acceptMailing}
                                    wrapperClassName={"form-control checkbox-block"}
                                /> */}

                                <button
                                    className="cart-info__confirm btn _circle-btn _filled-btn _green"
                                    type='submit'
                                    disabled={!isValid}
                                >
                                    ОФОРМИТЬ ЗАКАЗ
                                </button>

                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default OrderConformationForm;