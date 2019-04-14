import React, { Component } from 'react';
import Header from './../components/Header/Header';
import Filtrar from './../components/Filtrar/Filtrar';
import Card from './../components/Card/Card';
import {getHotelService} from './../services/getHoteleService';
import {filtrarHoteles} from './../services/filtrarHoteles';

class PaginaPrincipal extends Component {

    constructor(){
        super();
        this.state = { 
            hoteles : [], 
            nombreHotel: '', 
            abrirFiltros: false
        }
    }

    abrirFiltros = () =>{
        this.setState({abrirFiltros: !this.state.abrirFiltros});
    }

    componentDidMount(){
        this.getHoteles();
    }

    getHoteles = () =>{
        let endPoint = 'http://localhost:3000/hotels';
        getHotelService(endPoint).then(
            response => {
                this.setState({hoteles: response.data.hoteles, abrirFiltros: false});
            }, error => {
                console.log(error);
            }
        )
    }

    handleInput = (e) =>{
        const{name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    buscarEstrellas = (e, param) =>{
        console.log();
        let endPoint= 'http://localhost:3000/filtrar-hoteles';
        let body = {
            numeroEstrellas : param,
            parametroBusqueda: 'estrellas'
        }
        if(e.target.checked){
            filtrarHoteles(endPoint, body).then(
                response => {
                    console.log(response);
                    this.setState({hoteles: response.data.hoteles, abrirFiltros: false});
                }
            )
        }else{
            this.getHoteles();
        }
    }

    buscarNombreHotel = () =>{
        let endPoint= 'http://localhost:3000/filtrar-hoteles';
        let body = {
            nombreHotel : this.state.nombreHotel,
            parametroBusqueda: 'hoteles'
        }
        filtrarHoteles(endPoint, body).then(
            response => {
                this.setState({hoteles: response.data.hoteles, nombreHotel:'', abrirFiltros: false});
            }
        )
    }

    render() {
        console.log('el estado Cambio')
        return (
            <div>
                <Header />
                <div className='body-app'>
                    <Filtrar getHoteles={this.getHoteles} abrirFiltros={this.abrirFiltros} state={this.state} buscarNombreHotel={this.buscarNombreHotel} buscarEstrellas={this.buscarEstrellas} handleInput={this.handleInput}/>
                    <Card hoteles = {this.state.hoteles} />
                </div>
            </div>
        );
    }
}

export default PaginaPrincipal;