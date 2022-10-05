import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    items: [],
    totalCount: 0,
    totalPrice: 0
  },
  reducers: {
    addPizzaToCart(state, action) {
      state.items.push(action.payload)
      let newTotalPrice = 0

      state.items.forEach(item => newTotalPrice += parseInt(item.activePrice) + 40 )
      state.totalCount = state.items.length
      state.totalPrice = newTotalPrice
    },
    clearPizzaCartAction(state) {
      state.items = []
    },
    removePizza(state, action) {
      state.items.items.filter(el => el.id !== action.payload)
    }
  }
})

export default toolkitSlice.reducer

export const {addPizzaToCartAction, clearPizzaCart, removePizza} = toolkitSlice.actions