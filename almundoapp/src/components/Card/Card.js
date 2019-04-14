import React, {Component} from 'react';
import './Card.scss';
import { ClipLoader } from 'react-spinners';

class Card extends Component{

    listaHoteles = (hoteles) =>{
        return this.props.hoteles.map(hotel => 
            <div className='card' key={hotel.id}>
                {/* <img src={"./../../assets/images/"+ hotel.image} alt={hotel.id} /> */}
                <div className='image'></div>
                <div className='info-hotel'> 
                    <p>{hotel.name}</p>
                    {hotel.stars === 1 ?
                        <div className="container-estrellas"> 
                            <div className='estrellas'></div>
                        </div> : null
                    }
                    {hotel.stars === 2 ?
                        <div className="container-estrellas">
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                        </div> : null
                    }
                    {hotel.stars === 3 ?
                        <div className="container-estrellas">
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                        </div> : null
                    }
                    {hotel.stars === 4 ?
                        <div className="container-estrellas">
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                        </div> : null
                    }
                    {hotel.stars === 5 ?
                        <div className="container-estrellas">
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                            <div className='estrellas'></div>
                        </div> : null
                    }
                    <div className='container-iconos'>
                        {hotel.amenities.map((amenitie,i) => 
                            <div className={amenitie} key={i}></div>
                        )}
                    </div>
                </div>
                <div className='valor-hotel'>
                    <p>Precio por noche por habitacion</p>
                    <p className='valor-noche'>ARS<span>{hotel.price}</span></p>
                    <button type='button' className='boton'>Ver Hotel</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='container-card'>
                {this.props.hoteles.length > 0 ? 
                    this.listaHoteles()
                    : 
                    <ClipLoader
                        sizeUnit={"px"}
                        size={60}
                        color={'#123abc'}
                        loading={true}
                    />
                }
            </div>
        )
    }
    
}


export default Card;