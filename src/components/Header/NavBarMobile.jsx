import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Header.css'
import './css/Header-media.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNavListAC, toggleIsActiveAC } from '../../redux/nav-reducer'
import navBarItems from '../../common/json/navBar'

const NavBarMobile = () => {
  const dispatch = useDispatch()
  const { navList, isOpen } = useSelector(({ nav }) => ({
    navList: nav.list,
    isOpen: nav.isOpen
  }))

  React.useEffect(() => { 
    dispatch(addNavListAC(navBarItems))
  }, [dispatch])
  
  const toggleSwitch = () => isOpen ? dispatch(toggleIsActiveAC(false)) : dispatch(toggleIsActiveAC(true))

  const burger = isOpen ? "burger change" : "burger"
  const barContainer = isOpen ? "navbar_mobile_container bar_active" : "navbar_mobile_container"

  return (
    <div className={barContainer}>
      <div className="navbar_wrapper">
        <div className={burger} onClick={ toggleSwitch }>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className='navbar_mobile'>
          {
            navList.map(i => {
              
              return (
                <NavLink to={i.navlink} key={i.id} className="nav_btn_mobile" 
                onClick={ toggleSwitch } >
                  <span>{i.name}</span>
                </NavLink>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NavBarMobile

