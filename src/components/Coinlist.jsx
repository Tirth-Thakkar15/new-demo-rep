import React from 'react'
import { Link } from 'react-router-dom'
import CoinItem from './CoinItem'


function Coinlist({coins}) {
  return (
    <div className='lg:max-w-[1268px] mx-w-[85%] w-full mx-auto  mt-8'>
        <div>
            <div className='text-gray-600 flex justify-between h-18 items-center shadow-lg mx-4 my-4 font-bold px-6 py4 bg-gray-400'>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p>24H</p>
                <p className='lg:block hidden'>Volume</p>
                <p className='lg:block hidden'>Market Cap</p>
            </div>
            {coins.map((coin,idx)=>{
                return(
                    <CoinItem coins={coin} key={idx} />
                )
            })}
        </div>
    </div>
  )
}

export default Coinlist