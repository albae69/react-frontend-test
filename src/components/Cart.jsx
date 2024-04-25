import CartItem from './CartItem'
import TotalAmount from './TotalAmount'
import Discount from './Discount'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cart = useSelector((state) => state.cart.carts)

  return (
    <div className='flex px-4'>
      {/* Cart Items */}
      <div className='flex-[1.9] p-4 border rounded-md shadow-md'>
        <h3 className='text-black text-base mb-4'>Cart (2 items)</h3>
        {cart.length > 0 &&
          cart.map((item) => <CartItem key={item.item_id} {...item} />)}
      </div>
      {/* Cart Items */}

      {/* Total Amount */}
      <div className='flex-1'>
        <TotalAmount />
        {/* Discount */}
        <Discount />
        {/* Discount */}
      </div>
      {/* Total Amount */}
    </div>
  )
}
