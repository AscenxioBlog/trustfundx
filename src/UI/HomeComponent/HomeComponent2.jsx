import React, { useEffect, useState } from 'react'

function HomeComponent2() {
    const [crypto, setCrypto ] = useState('')
    useEffect(()=>{
        // fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=YOUR_API_KEY')
        .then(res=> res.json())
        .then(json=>{
        console.log(json)
            
            setCrypto(json)})
    },[])
  return (
    <div className='text-[white] h-[10px] w-full bg-amber-200'>
      

    </div>
  )
}

export default HomeComponent2