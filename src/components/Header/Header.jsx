import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './css/Header.css'
import './css/Header-media.css'
import NavBar from './NavBar'

import logo from '../../common/img/pizza-logo.png'
import textLogo from '../../common/img/text-logo.png'
import basket from '../../common/img/shopping-cart.svg'
import { toggleIsActiveAC } from '../../redux/nav-reducer'


const Header = () => {
    const dispatch = useDispatch()

    const { totalCount, totalPrice } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount
    }))

    const { items } = useSelector(({ cart }) => ({
        items: cart.items
    }))

    const goToCart = () => {
        if (items.length > 0) dispatch(toggleIsActiveAC(false))
    }
    
     return (    
        <div className="header_container">
            <div className='header_wrapper'>
                <NavLink to='/react-pizza' >
                    <img src={logo} alt="logo" className='logo' />
                </NavLink>
                <img src={textLogo} alt="vivat pizza" className="text_logo" />
                <NavBar />
                <div className='contacts'>
                    <div className='basket' >
                        <div className="total_count">
                            <span>{totalPrice} ₽</span>
                        </div>
                        <span>|</span>
                        <div className="basket_icon">
                            <NavLink to='/cart' onClick={ goToCart } >
                                <img src={basket} alt='shopping cart' />
                            </NavLink>
                            <span>{totalCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
