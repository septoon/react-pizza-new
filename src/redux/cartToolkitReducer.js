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
    },
    clearPizzaCart(state) {
      state.items = []
    },
    removePizza(state, action) {
      state.items.splice(action.payload)
    }
  }
})

export default toolkitSlice.reducer

export const {addPizzaToCart, clearPizzaCart, removePizza} = toolkitSlice.actions