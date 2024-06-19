import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Coinpage() {
const params = useParams()
const [coin, setCoin] = useState({})


const URL=`https://api.coingecko.com/api/v3/coins/${params.coinId}`

useEffect(() => {
axios.get(URL)
.then((response)=>{
  setCoin(response.data)
  console.log(response.data)
})
.catch(err=>{ console.log(err)})
}, [])


    // {coin.market_data ? (
    //   <div className='max-w-[868px]'></div>
    // )}
  
}

export default Coinpage