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
    update: (state, action) => {
      state.carts = state.carts.map((item) => {
        if (item.item_id == action.payload.item_id) {
          return action.payload
        } else {
          return item
        }
      })
    },
    remove: (state, action) => {
      state.carts = state.carts.filter(
        (item) => item.item_id != action.payload.item_id
      )
    },
  },
})

export const { insert, remove, update } = cartSlice.actions

export default cartSlice.reducer
