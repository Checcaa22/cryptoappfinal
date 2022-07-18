import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import './Home.css';
import {CardHome} from '../components/Home/CardHome';

export const Home = () => {
  const [coins , setCoins ] = useState([]);
  const [loading , setLoading] = useState(false);
  const [selected , setSelected] = useState([]);


 useEffect(() => {
   fetch('https://api.0x.org/swap/v1/tokens')
  .then(res => res.json())
  .then(data =>{ setCoins(data.records)})
  .catch(err => console.log(err))
  .finally(() => setLoading(true))
  } , []);

//${amount * 10^( Number(coin.decimals))}
  const handleClick = async (e) => {
    let coinSymbol= document.getElementById('from').value;
    let coinSymbol2 = document.getElementById('towards').value;
    let amount = document.getElementById('amount').value;

    let coin = coins.find(coin => coin.symbol === coinSymbol);
    let coin2 = coins.find(coin => coin.symbol === coinSymbol2);
 
    amount = amount * 10**( Number(coin.decimals));
    const url = `https://api.0x.org/swap/v1/price?sellToken=${coin.symbol}&buyToken=${coin2.symbol}&sellAmount=${amount}`

   await fetch(`https://api.0x.org/swap/v1/price?sellToken=${coin.symbol}&buyToken=${coin2.symbol}&sellAmount=${amount}`)
    .then(res => res.json())
    .then(data =>   
    {
      
      if(data.reason){
        alert(data.reason);
        return;
      }

      setSelected([...selected, {
        from: coin.symbol,
        address: coin.address,
        to: coin2.symbol,
        amount: amount,
        price: 1 / (Number(data.price).toFixed(4))
      }])

      
    })
    .catch(err =>{console.log(err)})
  }

  const clickChange = (e) => {
    let from = document.getElementById('from');
    let to = document.getElementById('towards');
    let fromValue = from.value;
    let toValue = to.value;
    from.value = toValue;
    to.value = fromValue;
  }

  return (

    <div className="App">

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Convertir monedas</h1>
          </div>
        </div>
      </div>

      <div className="container">
       <div className='row m-3 '>

        <div className='col-md-4 mt-2'>
        </div>

        <div className='col-md-4 mt-2'>
                <h3>SELL:</h3>

                <div className='contenedorSelect'>
                  <select id='from' className='form-select form-select-lg text-center selectToken' >
                  {coins.map(coin => <option key={coin.id}>{coin.symbol} </option>)}
                  </select>
                  <button className="btn change" onClick={clickChange}><FaExchangeAlt></FaExchangeAlt></button>
                </div>             
          
               
                <h3>BUY:</h3>

                <div className='contenedorSelect'>
                  <select id='towards' className=' form-select form-select-lg mb-3 text-center selectToken'>
                    {coins.map(coin => <option key={coin.id}>{coin.symbol}</option>)}
                  </select>
                  <button className="btn change" onClick={clickChange}><FaExchangeAlt></FaExchangeAlt></button>
                </div>             

                 <div id="contenedorComprar" className='container'>

                  <button id="btnShop" className="btn btn-outline-secondary " type="button"  onClick={handleClick}>BUY</button>
                  <input id="amount" type="text" className="form-control center-block" placeholder="0.0" ></input>

                </div>
          </div>

    
        <div className='col-md-4 mt-2'>
        
        </div>
        
      </div>

      <div> 
        <div id='cards' className='row'>
          {selected.map(selected1 => <CardHome selected={selected1}></CardHome>)}
        </div>
      </div>
    </div>
    </div>
  
  )
}
