import { useState } from 'react'

export default function CartItem(props) {
  let { item_price, item_name, item_color, item_size, item_category } =
    props ?? {}

  const [qty, setQty] = useState(1)
  item_price = (17.99 * qty).toFixed(2)

  return (
    <>
      <div className='flex gap-6 w-full'>
        {/* dummy pict */}
        <div className='h-[180px] w-[250px] rounded-lg shadow-sm bg-gray-100' />
        {/* dummy pict */}

        <div className='flex flex-col justify-between w-full'>
          <div>
            <h3 className='text-base text-black font-bold'>{item_name}</h3>
            <div className='flex gap-4'>
              {item_category?.length > 0 &&
                item_category.map((item) => (
                  <p className='mb-2' key={item.id}>
                    Shirt
                  </p>
                ))}
            </div>
            <p className='mb-2'>COLOR : {item_color}</p>
          </div>
          <p className='mb-2'>SIZE : {item_size}</p>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 pb-4'>
              <p>REMOVE ITEM</p>
              <p>MOVE TO WISH LIST</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-end justify-between'>
          <div>
            <div className='flex flex-row items-center justify-between border rounded mb-2'>
              <button
                className='border-r w-[25px]'
                onClick={() => {
                  // prevent dec to minus
                  if (qty > 1) {
                    setQty((prev) => prev - 1)
                  }
                }}>
                -
              </button>
              <button className='w-[50px]'>{qty}</button>
              <button
                className='border-l w-[25px]'
                onClick={() => setQty((prev) => prev + 1)}>
                +
              </button>
            </div>
            <p className='text-sm'>(Note, 1 piece)</p>
          </div>
          <p className='pb-4 text-black font-medium'>${item_price}</p>
        </div>
      </div>

      {/* separator */}
      <div className='h-[1px] w-full bg-gray-100 mt-4 mb-4' />
      {/* separator */}
    </>
  )
}
