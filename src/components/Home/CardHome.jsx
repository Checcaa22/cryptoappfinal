import React from 'react'

export const CardHome = ({selected} ) => {



  return (
    <div className='col-md-4'>
      <div class="card-body text-light coin-card">
        <h4 class="card-title">${selected.from} to ${selected.to}</h4>
        <p class="card-text"> Adress: ${selected.address}</p>
        <p class="card-text"> Precio de cambio: ${selected.price}</p>
        <a href="#!" class="btn btn-outline-secondary border-0">Comprar ${selected.to} con ${selected.from}</a>
      </div>
    </div>
  )
}
