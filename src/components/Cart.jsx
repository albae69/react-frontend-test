import { useSelector, useDispatch } from 'react-redux'

import CartItem from './CartItem'
import TotalAmount from './TotalAmount'
import Discount from './Discount'
import { remove } from '../store/cart/cartSlice'

export default function Cart() {
  const cart = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch()

  let totalTempAmount = cart
    .map((item) => Number(item.item_price * item.qty))
    .reduce((a, b) => a + b, 0)

  function onRemove(item) {
    console.log('onRemove', item)
    dispatch(remove(item))
  }

  console.log('cart', cart)

  return (
    <div className='md:flex px-4'>
      {/* Cart Items */}
      <div className='flex-[1.9] p-4 border rounded-md shadow-md'>
        <h3 className='text-black text-base mb-4'>
          Cart ({cart.length} items)
        </h3>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem
              key={item.item_id}
              item={item}
              onRemove={() => onRemove(item)}
              onFavorite={() => {}}
              isLast={cart.length - 1 == index}
            />
          ))
        ) : (
          <div className='flex flex-1 h-[100px] md:h-full text-center items-center justify-center'>
            <h3 className='text-black font-bold -mt-8'>Cart is empty!</h3>
          </div>
        )}
      </div>
      {/* Cart Items */}

      {/* Total Amount */}
      <div className='mt-4 md:flex-1'>
        <TotalAmount amount={totalTempAmount} />

        {/* Discount */}
        <Discount />
        {/* Discount */}
      </div>
      {/* Total Amount */}
    </div>
  )
}
