import { connect } from 'react-redux';
import React from 'react';
import { postApiRequest } from '../../support_functions/api_requests';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../../redux/auth-reducer';
import '../../styles/Autorization/Autorization.scss';
import '../../styles/Forms/Forms.scss';
import { BAD_LINK, MAIN_PAGE_NAME, redirectByPageType} from '../../App';
import LoadingSheme from '../SupportsComponents/LoadingSheme';
import AuthFormControl from './AutorizationTypes/AuthFormControl';
import { setStorageUser, removeStorageUser } from '../../support_functions/utils';

const AuthPageBody = (props) => {

    function authUser (userdata, errorMessageSetter, errorFieldName, needRemember=false) {
        const loginUrl = "https://tedmedapi-server.herokuapp.com/auth/"
            
            const goodResponseHandler = (response)=>{
                if (response.status === 200){
                    props.setIsAuth(true)
                    props.setIsNeedRedirect(true)
                    props.setUserData({
                        userId: null,
                        token: response.data.token,
                        username: ""
                    })
                    if (needRemember){
                        setStorageUser(response.data.token)
                    }
                    else{
                        removeStorageUser()
                    }
                }           
            }
            const badResponseHandler = (err) => {
                if (err.response){
                    if (err.response.status === 400){
                        errorMessageSetter(errorFieldName, "Неверный логин или пароль")
                    }
                }
                errorMessageSetter(errorFieldName, "Что-то пошло не так, перезагрузите страницу и попробуйте снова")
            }
            postApiRequest(loginUrl, userdata, goodResponseHandler, badResponseHandler)
    }

    const onSubmitLoginForm = (formData, errorMessageSetter, errorFieldName) =>{
        console.log("Form data", formData)
        const userData = JSON.stringify(formData)
        authUser(userData, errorMessageSetter, errorFieldName, formData.rememberMe)
    }
    const onSubmitRegisterForm = (formData, errorMessageSetter, errorFieldName) =>{
        console.log("Form data", formData)
        const loginUrl = "https://tedmedapi-server.herokuapp.com/api/auth/register/register_user/"
        const userData = JSON.stringify(formData)
        const goodResponseHandler = (response)=>{
            if (response.status === 200){
                let userdata = {}
                console.log("new username", response.data.username)
                userdata.username = response.data.username
                userdata.password = formData.password
                authUser(userdata, errorMessageSetter, errorFieldName)
            }           
        }
        const badResponseHandler = (err) => {
            if (err.response.status === 400){
                errorMessageSetter(errorFieldName, err.detail)
            }
        }
        postApiRequest(loginUrl, userData, goodResponseHandler, badResponseHandler)
    }
    if (props.auth.isNeedRedirect || !props.auth.user.is_anon) {
        return (
        redirectByPageType(MAIN_PAGE_NAME)
        )
    }
    if (props.auth.isLoading){
        return (
            <LoadingSheme page/>
        )
    }
    const authType = props.history.location.pathname.split('/')[2]
    return (
        <main className="page">
            <section className="page__base autorization-page">
                <div className="autorization-page__container _container">
                    <AuthFormControl 
                        control={authType}
                        submitLoginFormHandler={onSubmitLoginForm}
                        submitRegisterForm={onSubmitRegisterForm}
                        errorHandler={redirectByPageType(BAD_LINK)}
                    />
                </div>
            </section>
        </main>
    )
}

let mapStateToProps = (state)=>{
    return {
        auth: state.auth,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setIsAuth: (isAuth) => {
            dispatch(setIsAuthAC(isAuth));
        },
        setIsLoading: (isLoading) =>{
            dispatch(setIsLoadingAC(isLoading));
        },
        setIsNeedRedirect: (isNeedRedirect) =>{
            dispatch(setIsNeedRedirectAC(isNeedRedirect))
        },
        setUserData: (userData) => {
            dispatch(setUserDataAC(userData))
        }
    }
}
const AuthPageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthPageBody);

export default AuthPageContainer;

