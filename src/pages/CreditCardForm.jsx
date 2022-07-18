import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './CreditCardForm.css'

export const CreditCardForm = () => {

  const [numero, setNumero] = useState('');
  const [nombre, setNombre] = useState('');
  const [expiracion, setExpiracion] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const enviarTarjeta = () => {
    if (numero.length < 16) {
      alert('El numero de tarjeta debe tener 16 digitos')
      return false;
    }
    if (nombre.length < 3) {
      return false;
    }
    if (expiracion.length < 4) {
      return false;
    }
    if (cvc.length < 3) {
      return false;
    }
    
    alert('Tarjeta enviada');

  }




  return (

    <div>
   
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 contenedorForm' >
          <form action=''>
            <div className='form-group cardImage'>
              <Cards
                number={numero}
                name={nombre}
                expiry={expiracion}
                cvc={cvc}
                focused={focus}
              />
            </div>

          <div className='form'>
            <h1 className='h1-contacto'>Ingresa tus datos!</h1>
            <div class="grupo">
              <input type="text" 
              placeholder='Ingrese aqui su nombre' 
              name="nombre" 
             onChange={e => setNombre(e.target.value)} 
             onFocus = {e => setFocus(e.target.name)}
             required /><span class="barra"></span>
              <label>Nombre del propietario</label>
            </div>
            <div class="grupo">
              <input 
              type="tel" 
              name="numero" 
              onChange={e => setNumero(e.target.value)}
              onFocus = {e => setFocus(e.target.name)}
              required /><span class="barra"></span>
              <label>Numero de la tarjeta</label>
            </div>
            <div class="grupo">
              <input 
              type="tel" 
              name="" 
              onChange={e => setExpiracion(e.target.value)} 
              onFocus = {e => setFocus(e.target.name)}
              required /><span class="barra"></span>
              <label>Vencimiento</label>
            </div>
            <div class="grupo">
              <input 
              name="CVC" 
              onChange={e => setCvc(e.target.value)} 
              onFocus = {e => setFocus(e.target.name)}
              required></input><span class="barra"></span>
              <label>CVC</label>
            </div>
            <button type="submit" class="boton-submit" onClick={enviarTarjeta}>Enviar</button>
          </div>
        </form>
          </div>
          <div className='col-md-4'></div>

        </div>
       
      </div>

  )
}


