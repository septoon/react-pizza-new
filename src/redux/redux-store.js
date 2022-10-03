import { combineReducers, createStore } from 'redux'

import cartReducer from './cart-reducer'
import cartToolkitReducer from './cartToolkitReducer'

import catalogReducer from './catalog-reducer'
import darkReducer from './darkTheme-reducer'
import deliveryReducer from './delivery-reducer'
import navReducer from './nav-reducer'
import teaCardReducer from './teaCard-reducer'

const reducers = combineReducers({
    catalogPage: catalogReducer,
    teaCardPage: teaCardReducer,
    deliveryPage: deliveryReducer,
    cart: cartToolkitReducer,
    nav: navReducer,
    dark: darkReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // applyMiddleware for thunk

window.store = store
