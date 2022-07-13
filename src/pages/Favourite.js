import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../components/Card.jsx';
import './Favourite.css';
import swr from 'swr';

export const Favourite = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [card, setCard] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.0x.org/swap/v1/tokens');
      const data = await response.json();
      setCoins(data.records);
    }
    fetchData();

   
  }, []);

  const handleClick = async (e) => {
    let selectFavourite = document.getElementById('favouriteSelect').value;
    const coin = coins.find(coin => coin.symbol === selectFavourite);

    if ((card.length >= 0) && (card.length <= 2)) {

      if (card.includes(coin)) {
        alert('Ya esta en tu lista');
        return;
      }

      setCard([...card, <Card key={coin.price} symbol={selectFavourite} ></Card>])
    } else {
      alert('No puedes agregar mas de 3 monedas');
    }

    setCard([...card, <Card key={coin.price} symbol={selectFavourite} ></Card>])
  }



  if (coins) {
    return (
      <div>
        <h1>Pick your Favourite coin</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card ">
                <div className="card-body text-light">
                  <h4 className="card-title">Pick your favourite coin</h4>
                  <p className="card-text">Pick your favourite coin</p>
                  <select id="favouriteSelect" className="form-control favouriteSelect">
                    {coins.map(coin => <option key={coin.id} value={coin.symbol}>{coin.symbol}</option>)}
                  </select>
                  <br />
                  <button id="btnPick" className="btn btn-outline-secondary border-0" onClick={(e) => handleClick(e)}>Pick</button>
                </div>
              </div>
            </div>
          </div>
          <div id="rowFavourites" className='row'>
             {card}
          </div>
        </div>
      </div>
    )
  } else {
    return (<></>)

  }

}



