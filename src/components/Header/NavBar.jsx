import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Header.css'
import './css/Header-media.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/catalog' className='nav_btn' ><span>Меню</span></NavLink>
      <NavLink to='/teaCard' className='nav_btn' ><span>Чайная карта</span> </NavLink>
      <NavLink to='/aboutUs' className='nav_btn' ><span>О Нас</span> </NavLink>
      <NavLink to='/delivery' className='nav_btn' ><span>Доставка</span> </NavLink>
    </div>
  )
}

export default NavBar
