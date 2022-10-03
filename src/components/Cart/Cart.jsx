import React from 'react'
import './Cart.css'
import './Cart-media.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import basket from '../../common/img/shopping-cart-black.svg';
import trash from '../../common/img/trash.svg';
import emptyCart from '../../common/img/empty-cart.svg';
import emptyCartDark from '../../common/img/empty-cart-dark.svg';
import { clearPizzaCartAC, removePizzaAC } from '../../redux/cart-reducer';
import CartItem from './CartItem';
import Form from './Form/Form';
import { toggleIsActiveAC } from '../../redux/nav-reducer'

const Cart = () => {
  const dispatch = useDispatch()

  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }))

  const { isDark } = useSelector(({ dark }) => ({
    isDark: dark.isDark
  }))

  const [isOrder, setIsOrder] = React.useState(false)

  const onClickRemovePizza = (pizzaId) => {
    dispatch(removePizzaAC(pizzaId))
  }
  const onClickClearCart = () => {
    dispatch(clearPizzaCartAC())
  }
  return  (
    <div className="cart_wrapper">
      <div className="content">
        { isOrder && (<Form setIsOrder={setIsOrder} 
                            onClickClearCart={onClickClearCart}
                            items={items} 
                            totalCount={totalCount} 
                            totalPrice={totalPrice} />) }
        <div className="container container--cart">
          <div className="cart">
            {
              items.length ?
              ( // Если в корзине что-то есть
                <>
                  <div className="cart__top">
                    <h2 className="content__title"> <img src={basket} className="bask svg" alt="basket" /> Корзина</h2>
                    <div className="cart__clear" onClick={() => {
                      let popup = window.confirm("Вы уверены, что хотите очистить корзину?") 
                      popup && dispatch(clearPizzaCartAC())
                    } }>
                      <img src={trash} alt="trash" />
                      <span>Очистить корзину</span>
                    </div>
                  </div>
                  <div div className="cart_items_wrapper">
                    <div className="content__items">

                  {items.map((item, index) => {
                    const result = items.filter( elem => elem.id === item.id)
                    let price = 0
                    const itemIndex = items.indexOf(item)
                    
                    return ( 
                      <CartItem key={index} result={result} price={price} itemIndex={itemIndex} onClickRemovePizza={onClickRemovePizza}  {...item} />
                    )
                  })}

                    </div>
                    <div className="cart__bottom">
                      <div className="cart__bottom-details">
                        <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                        <span> Сумма заказа: <b>{totalPrice}₽</b> </span>
                      </div>
                      <div className="cart__bottom-buttons">
                        <NavLink to='/catalog' className="cart_bottom" onClick={ () => dispatch(toggleIsActiveAC(true))}>
                          <button>Вернуться назад</button>
                        </NavLink>
                        <div className="button pay-btn cart_bottom">
                          <button className="btn-order" onClick={ () => {
                            window.scrollTo(0, -200)
                            return setIsOrder(true)
                          } 
                            }>Заказать</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </>
              ) :
              ( // Если корзина пустая
                <div className="empty_cart">
                  <h2>Корзина пустая</h2>
                  <p>Вероятней всего, вы не заказывали ещё пиццу.
                     Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                     {
                       isDark ? (<img src={emptyCartDark} alt="empty-cart-logo" className="empty-cart-logo" />)
                        : (<img src={emptyCart} alt="empty-cart-logo" className="empty-cart-logo" />)
                     }
                     
                     <NavLink to='/catalog' className="cart_back_btn_wrapper">
                        <button className="cart_back_btn">Вернуться назад</button>
                     </NavLink>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
