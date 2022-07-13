import React, { useEffect } from 'react'
import useSWR from 'swr'
import swr from 'swr'
import fetcher from './fetcher'
import fetcher2 from './fetcher2'


export const Card = ({symbol} ) => {
    const { data, error } = useSWR("https://api.0x.org/swap/v1/tokens", URL => fetcher(URL, symbol));
    const {data: falopa , error: falopa2 } = useSWR('https://api.0x.org/swap/v1/price?sellToken=DAI&buyToken='+data.symbol+'&sellAmount='+data.price , fetcher2)
    

    function handleDelete(e) {
        let btn = e.target;
        btn.disabled = true;
    }


 
    
    if(data && falopa) {
        return (
            <div className='col-md-4'>
            <div key={Date.now()} className="card text-center bg-dark animate__animated animate__fadeInUp">
              <div className="card-body text-light">
                <button onClick={handleDelete} className="btn btn-danger eliminarBtn">X</button>
                <h4 className="card-title identificadorSymbol">${data.symbol}</h4>
                <p className="card-text parrafoPrice"> Precio de compra: $1234141 $USD</p>
                <a href="#!" className="btn btn-outline-secondary border-0">Comprar ${data.symbol}</a>
                <a href="#!" className="btn btn-outline-secondary border-0">Vender ${data.symbol}</a>
              </div>
            </div>
            </div>
          )

    }else{
        return( <></>)
    }
    
    
    }


    // let amount = 1 * 10 ** (Number(coin.decimals))
    // coin.price = await fetch(`https://api.0x.org/swap/v1/price?sellToken=DAI&buyToken=${coin.symbol}&sellAmount=${amount}`)
    //   .then(res => res.json())
    //   .then(data => data.price);

    // //console.log(coin)
