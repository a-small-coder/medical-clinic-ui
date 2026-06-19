import { useEffect, useRef } from 'react';
import {setCategoriesAC} from '../../../redux/header-reducer'
import {connect} from 'react-redux';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import * as axios from 'axios'
import urlStart from '../../../support_functions/api_requests'

const FALLBACK_CATEGORIES = [
    {
        id: 1,
        category: 'Каталог',
        slug: 'catalog',
        sub_categories: [
            { id: 1, sub_category: 'Все анализы', slug: 'all-analyzes' },
            { id: 2, sub_category: 'Комплексы', slug: 'complex-analyzes' },
        ],
    },
];

const HeaderMain = (props) => {
    const navigationLoaded = useRef(false);

    useEffect(() => {
        if (navigationLoaded.current || props.categories.length > 0) {
            return;
        }
        navigationLoaded.current = true;

        axios.get(`${urlStart}navigation/`)
            .then(response => {
                const data = response.data;
                if (Array.isArray(data) && data.length > 0) {
                    props.setCategories(data);
                } else {
                    props.setCategories(FALLBACK_CATEGORIES);
                }
            })
            .catch(() => {
                props.setCategories(FALLBACK_CATEGORIES);
            });
    }, [props.categories.length, props.setCategories]);

    const spoilerClassName = "menu__list";

    const menuItemElements = props.nav.categories.map(c => 
        <MenuItem key={c.id} category={c} isBurgerShowed={props.initSpoiler}/>
    )

    return (
        <div className="header__main">
            <Link to={"/"} className="header__logo">Med.</Link>
            <div className="header__menu menu">
                <nav className="menu__body">
                    <ul data-spollers="768, max" className={spoilerClassName}>
                        {menuItemElements}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

let mapStateToProps = (state)=>{
    return {
        initSpoiler: state.header.nav.initSpoiler,
        nav: state.header.nav,
        categories: state.header.nav.categories,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setCategories: (categories) =>{
            dispatch(setCategoriesAC(categories));
        },
    }
}

const HeaderMainContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderMain);

export default HeaderMainContainer;
