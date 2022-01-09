import React, { Component } from 'react';

import './Cronometro.css'

class Cronometro extends Component{
    render(){
        return(
            <>
                <img className='img' src={require('../assets/cronometro.png')} />
                <a className='number'>{this.props.number.toFixed(1)}</a>
            </>
        )
    }
}

export default Cronometro;