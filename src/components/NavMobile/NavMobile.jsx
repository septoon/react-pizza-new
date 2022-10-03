import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavMobile.css'
import navBarItems from '../../common/json/navBar'

import { useDispatch, useSelector } from 'react-redux'
import { addNavListAC, toggleIsActiveAC } from '../../redux/nav-reducer'

const NavMobileCopy = () => {
  const dispatch = useDispatch()
  const { navList, isOpen } = useSelector(({ nav }) => ({
    navList: nav.list,
    isOpen: nav.isOpen
  }))

  const { items } = useSelector(({ cart }) => ({
    items: cart.items
  }))

  React.useEffect(() => { 
    dispatch(addNavListAC(navBarItems))
  }, [dispatch])

  
  const handleClick = (el) => {
    if (el === '/cart' && items.length > 0) dispatch(toggleIsActiveAC(false))
    else dispatch(toggleIsActiveAC(true))
  }

  return (
    <>
    {
      !isOpen ? '' 
        : (
          <div className="nav_mobile_wrapper">
            <div className="navigation">
              <ul>
              {
                navList.map(i => (
                  <NavLink to={i.navlink} className="list" key={i.id} activeClassName="active"
                    onClick={ () => handleClick(i.navlink) } >
                    <span className="icon">
                      <img src={i.src} alt="menu" className="menu_btn"/>
                    </span>
                    <span className="text">{i.name}</span>
                  </NavLink>
                ))
              }
              </ul>
            </div>
          </div>
        )
    }
    </>
  )
}

export default NavMobileCopy
