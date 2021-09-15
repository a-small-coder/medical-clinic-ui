import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IN_WORK_PAGE_NAME, redirectByPageType } from '../../../App';
import { setCurrentPageAC, setProductsAC } from '../../../redux/catalog-reducer';
import { setCartAC, setProductsCountInCartAC } from '../../../redux/header-reducer';
import urlStart, { deleteApiRequest, getApiResponse, putApiRequest } from '../../../support_functions/api_requests';
import LoadingSheme from '../../SupportsComponents/LoadingSheme';
import Paggination from '../../SupportsComponents/Paggination/Paggination';
import Product from './Product';

const Products = (props) => {

    let catagoryName = props.history.location.pathname
    let apiLink = catagoryName.slice(1, props.history.location.pathname.length)
    if (apiLink === 'catalog') {
        apiLink += '/all'
    }
    const [Badresponse, setNeedRedirect] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])

    const sendRequestForGetProducts = (pageNumber)=>{
        const productsApiUrl = `${urlStart}${apiLink}?page=${pageNumber}&count=${props.pageSize}`
        const mapProductsDataResponse = (data) =>{
            props.setProducts(data.items, data.total_count, catagoryName, data.page_size)
        }
        const badResponseHandler =()=>{
            if (pageNumber > 1){
                props.setCurrentPage(1)
            }
            else{
                setNeedRedirect(true)
            }
        }
        getApiResponse(productsApiUrl, false, mapProductsDataResponse, badResponseHandler)
    }
    const onPageChenged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        sendRequestForGetProducts(pageNumber)
    }
    useEffect(() => {
        if ((props.products.items.length === 0 || props.products.category !== catagoryName) && !Badresponse){
            sendRequestForGetProducts(1)
        }
    })

    const buttonButClickHandler = (productId, inCart) => {
        const goodResponseHandler = () =>{
            const cartUrl = `${urlStart}cart/current_customer_cart/`
            const setCartFromResponse = (responseData) => {
                props.setCart(responseData)
            }
            getApiResponse(cartUrl, props.userToken, setCartFromResponse)
        }
        if (inCart) {
            const cartProductId = getProductInCartId(productId, props.cart.products)
            const addProductApiUrl = `${urlStart}cart/current_customer_cart/product_remove_from_cart/${cartProductId}/`
            deleteApiRequest(addProductApiUrl, props.userToken, goodResponseHandler)
        }
        else {
            const addProductApiUrl = `${urlStart}cart/current_customer_cart/add_to_cart/${productId}/`
            putApiRequest(addProductApiUrl, props.userToken, goodResponseHandler)
        }
    }


    let productsElements
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    if (props.products.items != null){
        productsElements = props.products.items.map(
            a => {
                const isInCart = isProductInCart(a.id, props.cart.products)
            return <Product key={a.id} id={a.id} title={a.title} time={a.time} number={a.number}
                slug={a.id} price={a.price} mainSlug={apiLink} vendor_code={a.vendor_code} 
                InCart={isInCart} buttonButClickHandler={buttonButClickHandler} forCart={false}
                />
            });
    }
    
    let titleKey = props.products.category.substring(1) + '/'
    
    if (Badresponse){
        return redirectByPageType(IN_WORK_PAGE_NAME)
    }
    if (productsElements && productsElements.length > 0){
        return (
            <div className="analyze-section">
                <h2 className="analyze-section__title _title">{props.products.title[titleKey]}</h2>
                <div className="analyze-section__items">
                    {productsElements}
                </div>
                <Paggination pagesCount={pagesCount} totalPage={props.products.currentPage} PageChenge={onPageChenged} />
            </div>

        )
    }
    return (
        <div className="analyze-section">
            <LoadingSheme block={true}/>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        products: state.catalog.products,
        pageSize: state.catalog.products.pageSize,
        totalCount: state.catalog.products.totalCount,
        pageNumber: state.catalog.products.currentPage,
        countProductsInCart: state.header.cart.total_products,
        cart: state.header.cart,
        userToken: state.auth.user.token
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProducts: (items, totalCount, category, pageSize) => {
            dispatch(setProductsAC(items, totalCount, category, pageSize));
        },
        setCurrentPage: (totalPage) =>{
            dispatch(setCurrentPageAC(totalPage));
        },
        setProductsCountInCart: (total_products) => {
            dispatch(setProductsCountInCartAC(total_products));
        },
        setCart: (cart) =>{
            dispatch(setCartAC(cart))
        },
    }
}
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;



export function isProductInCart (id, cartProducts) {
    for (let product of cartProducts){
        if (id === product.product.id){
            return true
        }
    }
    return false
}

export function getProductInCartId (productId, cartProducts) {
    for (let product of cartProducts){
        if (productId === product.product.id){
            return product.id
        }
    }
    return null
}