import React, { Component } from 'react';

import './App.css';
import Buttons from './components/Buttons';
import Cronometro from './components/Cronometro';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      botao: 'VAI'
    }

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.timer = null;
  }

  start(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.number += 0.1;
        state.botao = 'PAUSAR';
        this.setState(state)
      }, 100);
    }
  }

  stop(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.number = 0;
    state.botao = 'VAI';
    this.setState(state);
  }

  render(){
    return(
      <div className='container'>
        <Cronometro number={this.state.number}/>
        <Buttons botao={this.state.botao} start={this.start} stop={this.stop} />
      </div>
    )
  }
}

export default App;
