import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({coin} ) => {
    const { symbol , price } = coin;


        return (
            <div className='col-md-4'>
            <div key={Date.now()} className="card text-center coin-card">
              <div className="card-body text-light">
                <h4 className="card-title identificadorSymbol">${symbol}</h4>
                <p className="card-text parrafoPrice"> Precio de compra: ${price} $USD</p>
                <a href="#!" className="btn btn-card-left" >
                    <Link className='link' to={`/`}>
                       Comprar ${symbol}
                    </Link>
                  </a>
                <a href="#!" className="btn btn-card-right">Vender ${symbol}</a>
              </div>
            </div>
            </div>
          )
    }


    // let amount = 1 * 10 ** (Number(coin.decimals))
    // coin.price = await fetch(`https://api.0x.org/swap/v1/price?sellToken=DAI&buyToken=${coin.symbol}&sellAmount=${amount}`)
    //   .then(res => res.json())
    //   .then(data => data.price);

    // //console.log(coin)
