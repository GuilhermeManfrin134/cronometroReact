import React, { Component } from 'react';

import './Buttons.css';

class Buttons extends Component{
    render(){
        return(
            <div className='buttons'>
                <a className='button' onClick={this.props.start}>{this.props.botao}</a>
                <a className='button' onClick={this.props.stop}>LIMPAR</a>
            </div>
        )
    }
}

export default Buttons;