import React from 'react';
import { connect } from 'react-redux';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../../redux/auth-reducer';
import '../../styles/AboutUs/about_us.scss';
import ContentBlock from './ContentBlock';

function AboutUs(props) {
    return (
        <main className="page">
            <section className="page__base aboutus-page">
                <div className="aboutus-page__container _container">
                    <div className="aboutus-page__body">
                        <h1 className="aboutus-page__title _title"><span>О компании</span></h1>
                        <div className="aboutus-page__content">
                            <ContentBlock/>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
    );
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
const AboutUsConteiner = connect(mapStateToProps, mapDispatchToProps)(AboutUs);

export default AboutUsConteiner;