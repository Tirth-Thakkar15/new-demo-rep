import React from 'react'

function CoinItem({coins}) {
  return (
    <div className='h-auto w-auto bg-yellow-200 rounded-lg'>
    <div className='text-black flex justify-between items-center bg-primary shadow-lg rounded-l lg:max-4 my-8 py-3 px-6 hover:scale-105 hover:bg-slate-400 transition-all duration-300 cursor-pointer w-full'>
        <p>
            {coins.market_cap_rank}
        </p>
        <div className='flex items-center gap-x-2 w-auto '>
    <img src={coins.image} alt=""  className='w-[40px]'/>
    <p>{coins.symbol.toUpperCase()}</p>
        </div>
        <p>
            ${coins.current_price.toLocaleString()}
        </p>
        <p>{coins.price_change_percentage_24h.toFixed(1)}</p>
        <p className='lg:block hidden'>${coins.total_volume.toLocaleString()}</p>
        <p className='lg:block hidden'>${coins.market_cap.toLocaleString()}</p>
    </div>
    </div>
  )
}

export default CoinItem