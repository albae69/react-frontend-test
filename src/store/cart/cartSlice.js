import { createSlice } from '@reduxjs/toolkit'

import dummy from '../../data/dummy.json'

const initialState = {
  carts: dummy.carts,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    insert: (state, action) => {
      state.carts.push(action.payload)
    },
    update: (state, action) => {},
    remove: (state, action) => {
      state.carts.filter((item) => item.id != action.payload.id)
    },
  },
})

export const { insert, remove, update } = cartSlice.actions

export default cartSlice.reducer
