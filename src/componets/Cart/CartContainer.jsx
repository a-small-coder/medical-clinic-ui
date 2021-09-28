import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import urlStart, { deleteApiRequest, getApiResponse} from '../../support_functions/api_requests';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../../redux/auth-reducer';
import {setCartIdAC, setChoosenOfficeAC, setOfficeTypeAC} from '../../redux/order-reducer';
import EmptyCart from './EmptyCart';
import CartProductsList from './CartProductsList';
import LoadingSheme from '../SupportsComponents/LoadingSheme';
import '../../styles/CartPage/CartPage.scss';
import { setCartAC } from '../../redux/header-reducer';
import { MAIN_PAGE_NAME, redirectByPageType } from '../../App';
import CartInfoContainer from './CartSideBar/CartInfoContainer';

const Cart = (props) =>{

    const [isRequest, setIsRequest] = useState(false)

    const RemoveProductClickHandler = (productId) => {
        const addProductApiUrl = `${urlStart}cart/current_customer_cart/product_remove_from_cart/${productId}/`
        const goodResponseHandler = () => {
            let newCartProducts = []
            props.cart.products.forEach(p => {
                if (p.id !== productId){
                    newCartProducts.push(p)
                }
            });
            const newCart = {
                id: props.cart.id,
                total_products: props.cart.total_products - 1,
                products: newCartProducts,
            }
            props.setCart(newCart)
        }
        deleteApiRequest(addProductApiUrl, props.userToken, goodResponseHandler)
    }

    // send request to server for get cart data
    useEffect(() => {
        if (props.userToken) {
            // user cart 
            const cartUrl = `${urlStart}cart/current_customer_cart/`
            const setCartFromResponse = (responseData) => {
                if (responseData.products == null){
                    responseData.products = []
                }
                props.setCart(responseData)
                setIsRequest(true)
            }
            getApiResponse(cartUrl, props.userToken, setCartFromResponse)
        }
    }, [])

    // fail to get cart data from server
    if (props.cart == null) {
        return (
            redirectByPageType(MAIN_PAGE_NAME)
        )
    }

    // successfully getting cart data from server
    if (props.cart && props.cart.total_products != null) {
        if (props.cart.total_products === 0) {
            return <EmptyCart />
        }
        return (
            <main className="page">
                <section className="page__base cart-page">
                    <div className="cart-page__container _container">
                        <div className="cart-page__content">
                            <CartProductsList products={props.cart.products} productCloseClick={RemoveProductClickHandler}/>
                            <CartInfoContainer 
                                setOfficeType={props.setOfficeType}
                                history={props.history}
                                setChoosenOffice={props.setChoosenOffice}
                                type_office={props.order.type_office}
                                choosen_office={props.order.choosen_office}
                                products={props.cart.products}
                            />
                        </div>
                    </div>
                </section>
            </main>
        )
        
    }
    
    // waiting server response
    return <LoadingSheme page/>
}

let mapStateToProps = (state)=>{
    return {
        cart: state.header.cart,
        userToken: state.auth.user.token,
        isAuth: state.auth.isAuth,
        order: state.order,
        user: state.auth.user,
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
        },
        setCart: (cart) =>{
            dispatch(setCartAC(cart));
        },
        setCartId: (cart_id) => {
            dispatch(setCartIdAC(cart_id));
        },
        setOfficeType: (office_type) =>{
            dispatch(setOfficeTypeAC(office_type));
        },
        setChoosenOffice: (choosen_office) =>{
            dispatch(setChoosenOfficeAC(choosen_office))
        },
    }
}
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
