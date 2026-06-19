import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import { connect } from 'react-redux';
import FormikControl from '../BaseComponents/FormikControl';
import { setCurrentPageAC, setSearchTextAC } from '../../../redux/catalog-reducer';

function CatalogSearchForm(props) {

    const initialValues = {
        searchText: props.searchText || '',
    }

    const validation = Yup.object({})

    const onSubmit = values =>{
        props.setSearchText(values.searchText.trim())
        props.setCurrentPage(1)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit} enableReinitialize>
            {
                ({errors, touched, isValid, handleBlur}) => {
                    return (
                        <Form className="filter-form__item" autoComplete="off">
                            <div className="filter-form__search search-form-filter">
                                <FormikControl 
                                    control='input' 
                                    type="text"
                                    name='searchText' 
                                    fieldClassName="filter-form__input" 
                                    placeholder="Поиск по анализам"
                                    standartOnBlur={handleBlur}
                                    isError={errors.fullName && touched.fullName}
                                    wrapperClassName={""}
                                />
                                <button
                                    className="filter-form__btn _icon-search"
                                    type='submit'
                                    disabled={!isValid}
                                > 
                                </button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

const mapStateToProps = (state) => ({
    searchText: state.catalog.searchText,
});

const mapDispatchToProps = (dispatch) => ({
    setSearchText: (searchText) => dispatch(setSearchTextAC(searchText)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogSearchForm);
