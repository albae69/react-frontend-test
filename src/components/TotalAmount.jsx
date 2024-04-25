export default function TotalAmout() {
  return (
    <div className='flex px-4'>
      <div className='flex-[2] p-4 border rounded-md shadow-md'>
        {/* card title */}
        <h3 className='text-black font-medium tet-base mb-4'>
          The total amount of
        </h3>
        {/* card title */}

        {/* temporary amount */}
        <div className='flex flex-row items-center justify-between mb-4'>
          <p className='text-sm'>Temporary amount</p>
          <p className='text-sm'>$53.98</p>
        </div>
        {/* temporary amount */}

        {/* shipping */}
        <div className='flex flex-row items-center justify-between mb-4'>
          <p className='text-sm'>Shipping</p>
          <p className='text-sm'>Gratis</p>
        </div>
        {/* hipping */}

        {/* separator */}
        <div className='h-[1px] w-full bg-gray-100 mt-2 mb-2' />
        {/* separator */}

        {/* total */}
        <div className='flex flex-row items-center justify-between'>
          <p className='text-sm text-black font-medium'>
            The total amount of (including VAT)
          </p>
          <p className='text-sm text-black font-medium'>$53.98</p>
        </div>
        {/* total */}

        {/* checkout button */}
        <button className='text-xs h-10 w-full bg-blue-600 rounded text-white mt-4'>
          GO TO CHECKOUT
        </button>
        {/* checkout button */}
      </div>
    </div>
  )
}
