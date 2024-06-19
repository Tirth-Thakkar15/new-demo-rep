import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Coinlist from './components/Coinlist'
import Coinpage from './components/Coinpage'

function App() {
const [coin, setCoin] = useState([])

useEffect(() => {
  axios.get(api_url)
  .then(response=>{setCoin(response.data)
   
  })
  .catch(err=>{
    console.log(err)
  })
}, [])


const api_url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";
  return (
    <>
    <div className='font-primary'>

    <Navbar />
    <Routes>
      <Route path='/' element={<Coinlist coins={coin} />}/>
      <Route path='/coins' element={<Coinpage />}/>
        <Route path=':coinId' element={<Coinpage/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App
