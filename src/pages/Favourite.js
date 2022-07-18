import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../components/Favourite/Card.jsx';
import './Favourite.css';


export const Favourite = () => {
  const [favourite, setFavourite] = useState([]);
  const [coins, setCoins] = useState([]);
  const [card, setCard] = useState([])
  const [promedio, setPromedio] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.0x.org/swap/v1/tokens');
      const data = await response.json();
      setCoins(data.records);
    }

    fetchData();

  }, []);

  setInterval(() => {

    if (favourite) {

      let card = favourite.map(coin => {

        let fetchData = async () => {
          const response = await fetch(`https://api.0x.org/swap/v1/quote?buyToken=${coin.symbol}&sellToken=DAI&sellAmount=100000000000000000`);
          const data = await response.json();
          coin.price = 1 / Number(data.price);

          return coin;
        }

        let hola = fetchData();
        hola.then(data => {
          coin.price = data.price.toFixed(4);
          console.log(coin.price)
        })

        return hola;
      })


      Promise.all(card).then(data => {
        setFavourite([...data]);
      })

    } else {
      return
    }


  }, 30000)

  const handleClick = async (e) => {
    let selectFavourite = document.getElementById('favouriteSelect').value;
    const coin = coins.find(coin => coin.symbol === selectFavourite);
    if (coin.symbol === 'DAI') {
      alert('No se puede comprar la moneda base')
      return
    }


    const url = `https://api.0x.org/swap/v1/quote?buyToken=${coin.symbol}&sellToken=DAI&sellAmount=100000000000000000`
    await fetch(url)
      .then(res => res.json())
      .then(data => {

        if (data.reason) {
          alert(data.validationErrors);
          return data.reason;
        }

        coin.price = 1 / data.price;
        coin.price = coin.price.toFixed(4);
      })



    if ((card.length >= 0) && (card.length <= 2)) {

      if (card.includes(coin)) {
        alert('Ya esta en tu lista');
        return;
      }


      if (favourite.length === 3) {
        alert('Ya tienes 3 monedas favoritas');
        return;
      }

      if (favourite.includes(coin)) {
        alert('Ya esta en tu lista');
        return;
      } else {
        setFavourite([...favourite, coin]);
      }

      //setCard([...card, <Card key={coin.price} symbol={selectFavourite} ></Card>])
    } else {
      alert('No puedes agregar mas de 3 monedas');
    }

  }





  return (
    <div>
      <h1 className='mt-4'>PICK YOUT FAVOURITE COIN</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-4">
            <div className="card card-select">
              <div className="card-body text-light">
                <h4 className="card-title">MONEDAS FAVORITAS</h4>
                <p className="card-text">Las monedas seleccionadas en esta pestaña se actualizaran cada 30 segundos.</p>
                <select id="favouriteSelect" className="form-select form-select-lg text-center favouriteSelect ">
                  {coins.map(coin => <option key={coin.id} value={coin.symbol}>{coin.symbol}</option>)}
                </select>
                <br />
                <button id="btnPick" className="btn btn-outline-secondary border-0" onClick={(e) => handleClick(e)}>Pick</button>
              </div>
            </div>
          </div>
        </div>
        <div id="rowFavourites" className='row'>
          {favourite.map(coin => <Card key={coin.id} coin={coin} />)}
        </div>
      </div>
    </div>
  )
}