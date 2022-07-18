import React from 'react'
import './Contact.css'

export const Contact = () => {


    return (
        <div>
            <div className='container margin-top100'>
                <form action='' className='form marginClass'>
                    <div className='form'>
                        <h1 className='h1-contacto'>CONTACTANOS!</h1>
                        <div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Nombre</label>
                        </div>
                        <div class="grupo">
                            <input type="email" name="" id="" required/><span class="barra"></span>
                                <label>Email</label>
                        </div>
                        <div class="grupo">
                            <input type="number" name="" id="" required/><span class="barra"></span>
                                <label>Edad</label>
                        </div>
                        <div class="grupo">
                            <textarea name="" id="" rows="3" required></textarea><span class="barra"></span>
                            <label>Asunto</label>
                        </div>
                        <button type="submit" class="boton-submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
