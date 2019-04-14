import React from 'react';
import {FiltroBusqueda} from './../FiltroBusqueda/FiltrosBusqueda';
import './Filtrar.scss';
const Filtrar = ({abrirFiltros, state, buscarNombreHotel, buscarEstrellas, handleInput, getHoteles}) => {
    return (
        <div className='container'>
            <div className="container-filtrar" >
                <p onClick={abrirFiltros}>Filtrar</p>
            </div>
            {window.screen.width < 720 && state.abrirFiltros ? 
                <div className='filtros'>
                    <FiltroBusqueda getHoteles={getHoteles} state={state} buscarNombreHotel={buscarNombreHotel} buscarEstrellas={buscarEstrellas} handleInput={handleInput}/>
                </div>: null
            }
            { window.screen.width > 720 ?
                <FiltroBusqueda getHoteles={getHoteles} state={state} buscarNombreHotel={buscarNombreHotel} buscarEstrellas={buscarEstrellas} handleInput={handleInput}/>:
                null
            }
        </div>
    );
}


export default Filtrar;