import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, update } from '../store/cart/cartSlice'
import { formatNumber } from '../utils/formatNumber'

export default function CartItem(props) {
  let { item, onFavorite, onRemove, isLast } = props ?? {}
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  let format_item_price = formatNumber((item.item_price * qty).toFixed(2))

  const updateItem = useCallback(() => {
    let temp = { ...item, qty: qty }
    dispatch(update(temp))
  }, [qty])

  useEffect(() => {
    updateItem()
  }, [qty])

  return (
    <>
      <div className='flex flex-col md:flex-row gap-6 w-full'>
        {/* dummy pict */}
        <div className='h-[180px] md:w-[250px] rounded-lg shadow-sm bg-gray-100' />
        {/* dummy pict */}

        <div className='flex flex-col justify-between w-full'>
          <div>
            <h3 className='text-base text-black font-bold mb-2'>
              {item.item_name}
            </h3>
            <div className='flex gap-4'>
              {item.item_category?.length > 0 &&
                item.item_category.map((item, index) => (
                  <p className='mb-2 text-xs md:text-base' key={index}>
                    {item}
                  </p>
                ))}
            </div>
            <p className='mb-2 text-xs md:text-base'>
              COLOR : {item.item_color}
            </p>
          </div>
          <p className='mb-2 text-xs md:text-base'>SIZE : {item.item_size}</p>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 pb-4'>
              <button onClick={onRemove} className='text-xs md:text-base'>
                REMOVE ITEM
              </button>
              <button onClick={onFavorite} className='text-xs md:text-base'>
                MOVE TO WISH LIST
              </button>
            </div>
          </div>
        </div>

        <div className='flex md:flex-col items-start md:items-end justify-between'>
          <div>
            <div className='flex flex-row items-center justify-between border rounded mb-2'>
              <button
                className='border-r w-[25px]'
                onClick={() => {
                  // prevent dec to minus
                  if (qty > 1) {
                    setQty((prev) => prev - 1)
                  } else {
                    dispatch(remove(item))
                  }
                }}>
                -
              </button>
              <div className='flex items-center justify-center text-center w-[50px]'>
                <input
                  className='w-full text-center'
                  type='number'
                  value={qty}
                  onChange={async (e) => {
                    if (e.target.value > 0) {
                      setQty(e.target.value)
                    }
                  }}
                />
              </div>
              <button
                className='border-l w-[25px]'
                onClick={() => {
                  setQty((prev) => prev + 1)
                }}>
                +
              </button>
            </div>
            <p className='text-sm'>(Note, 1 piece)</p>
          </div>
          <p className='pb-4 text-black font-medium'>{format_item_price}</p>
        </div>
      </div>

      {/* separator */}
      {!isLast && <div className='h-[1px] w-full bg-gray-100 mt-4 mb-4' />}
      {/* separator */}
    </>
  )
}
