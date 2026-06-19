import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../Forms/BaseComponents/FormikControl';
import { getInitValuesFromCheckboxData } from '../../Forms/CatalogPage/CatalogFilterForm';
import { ROUTES } from '../../../config/routes';
import StepNavigation from '../shared/StepNavigation';

const checkBoxOptions = [
  {
    key: 'Я даю согласие на ',
    value: 'confirmUserData',
    chebox_value: true,
    link: {
      text: 'обработку персональных данных',
      ref: ROUTES.personalDataPolicy,
    },
  },
];

function BookingConfirmForm({ init, onSubmit, onBack }) {
  const initialValues = {
    fullName: init.fullName || '',
    phoneNumber: init.phoneNumber || '',
    email: init.email || '',
    acceptTermAndConditions: getInitValuesFromCheckboxData(checkBoxOptions),
  };

  const validation = Yup.object({
    fullName: Yup.string().required('Поле "ФИО" обязательно для заполнения.'),
    phoneNumber: Yup.string().required('Поле "Номер телефона" обязательно для заполнения.'),
    email: Yup.string().email('Неверный формат почтового адреса'),
    acceptTermAndConditions: Yup.array().min(
      1,
      'Необходимо подтвердить согласие на обработку персональных данных'
    ),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
      {({ values, errors, touched, handleBlur, handleChange, isValid }) => (
        <Form className="order-form booking-confirm-form booking-step" autoComplete="off">
          <div className="booking-step__title _title-standart">Подтверждение данных</div>

          <div className="order-form__form">
            <FormikControl
              control="input"
              type="text"
              label="ФИО"
              name="fullName"
              fieldClassName="auth_input"
              placeholder="Иванов Иван Иванович"
              standartOnBlur={handleBlur}
              isError={errors.fullName && touched.fullName}
            />

            <FormikControl
              control="input"
              type="text"
              label="Номер телефона"
              name="phoneNumber"
              fieldClassName="auth_input"
              placeholder="+7(000)-000-00-00"
              standartOnBlur={handleBlur}
              isError={errors.phoneNumber && touched.phoneNumber}
            />

            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
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
              wrapperClassName="checkbox-block"
              itemClassName="checkbox-block__item"
            />
          </div>

          <div className="booking-step-nav">
            <button type="button" className="btn btn_white" onClick={onBack}>
              Назад
            </button>
            <button type="submit" className="btn _filled-btn _green" disabled={!isValid}>
              Подтвердить запись
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BookingConfirmForm;
