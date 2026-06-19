import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateNewSearchTextAC } from '../../../redux/header-reducer';
import { setCurrentPageAC, setSearchTextAC } from '../../../redux/catalog-reducer';
import { ROUTES } from '../../../config/routes';

const HeaderSearch = (props) => {
    const inputSearchRef = React.useRef();
    const iconSearchRef = React.useRef();
    const searchFormRef = React.useRef();

    const iconSearchClick = () => {
        if (iconSearchRef.current != null){
            
            if (!iconSearchRef.current.closest('.search-form') && document.querySelectorAll('.search-form._active').length > 0){
                const activeForms = document.querySelectorAll('.search-form._active');
                for (var i = 0; i < activeForms.length; i++) {
                    activeForms[i].classList.remove('_active');
                }
            }
            searchFormRef.current.classList.toggle('_active');
            
        }
    };

    const onSearchChange = (event) =>{
        props.updateNewSearchText(event.target.value);
    }

    const submitSearch = (event) => {
        event.preventDefault();
        const text = props.search.newSearchText.trim();
        props.setSearchText(text);
        props.setCurrentPage(1);
        props.history.push(ROUTES.catalog);
        if (searchFormRef.current) {
            searchFormRef.current.classList.remove('_active');
        }
    }

    return(
        <div className="header__search">
            <div className="search-form" ref={searchFormRef}>
                <button data-spoller type="button" className="search-form__icon _icon-search" ref={iconSearchRef} onClick={iconSearchClick}></button>
                <form action="#" className="search-form__item" onSubmit={submitSearch}>
                    <button type="submit" className="search-form__btn _icon-search"></button>
                    <input autoComplete="off" type="text" name="search" className="search-form__input" 
                    value={props.search.newSearchText} onChange={onSearchChange} ref={inputSearchRef}/>
                </form>
            </div>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        search: state.header.search,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewSearchText: (text) => {
            dispatch(updateNewSearchTextAC(text));
        },
        setSearchText: (searchText) => {
            dispatch(setSearchTextAC(searchText));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
    }
}

const HeaderSearchContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderSearch));

export default HeaderSearchContainer;
