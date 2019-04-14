import React from 'react';
import './FiltrosBusqueda.scss';
export const FiltroBusqueda = ({buscarEstrellas, handleInput, buscarNombreHotel, state, getHoteles}) => {
    console.log(state);
    return (
        <div className="filtros-desptok">
            <div className='buscar-hotel'>
                <div className='titulo'>
                    <div className='lupa'></div><p>Nombre de Hotel</p>
                </div>
                <div className='container-input'>
                    <input type='text' value={state.nombreHotel} name='nombreHotel' onChange={handleInput}/>
                    <button type='button' onClick={buscarNombreHotel}>Buscar</button>
                </div>
            </div>
            <div className='buscar-estrellas-container'>
                <div className ='buscar-estrellas'>
                    <input type='checkbox' onClick = {getHoteles}/>
                    <label>Todas las estrellas</label>
                </div>
                <div className ='buscar-estrellas'>
                    <input type='checkbox' onClick = {(e) => buscarEstrellas(e,5)}/>
                    <div className='estrella'></div><div className='estrella'></div><div className='estrella'></div><div className='estrella'></div><div className='estrella'></div>
                </div>
                <div className ='buscar-estrellas'>
                    <input type='checkbox' onClick = {(e) => buscarEstrellas(e,4)}/>
                    <div className='estrella'></div><div className='estrella'></div><div className='estrella'></div><div className='estrella'></div>
                </div>
                <div className ='buscar-estrellas'>
                    <input type='checkbox' onClick = {(e) => buscarEstrellas(e,3)}/>
                    <div className='estrella'></div><div className='estrella'></div><div className='estrella'></div>
                </div>
                <div className ='buscar-estrellas'>
                    <input type='checkbox' onClick = {(e) => buscarEstrellas(e,2)}/>
                    <div className='estrella'></div><div className='estrella'></div>
                </div>
                <div className ='buscar-estrellas'>
                    <input type='checkbox' onClick = {(e) => buscarEstrellas(e,1)}/>
                    <div className='estrella'></div>
                </div>
            </div>
        </div>

    )
}