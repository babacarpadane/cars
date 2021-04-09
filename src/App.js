import React, { Component } from 'react';
import Car from './Car/Car';
import './App.css';

class car extends Component {
  state = {
    cars: [
      { marca: "BMW", modello: "M4", prezzo: 110000 },
      { marca: "Mercedes", modello: "SLS AMG", prezzo: 140000 },
      { marca: "Audi", modello: "RS7", prezzo: 100000 }
    ],
    testo: "Nuovi veicoli in arrivo a breve"
  }

  haiCliccatoHandler = () => {
    //alert("Hai cliccato il bottone");
    //this.state.cars[0].marca = "Lamborghini"; NON FUNZIONA COSì
    this.setState({
      cars: [
        { marca: "BMW", modello: "M4", prezzo: 110000 },
        { marca: "Mercedes", modello: "SLS AMG", prezzo: 140000 },
        { marca: "Nissan", modello: "GTR", prezzo: 70000 }
      ]
    })
  }

  render() {
    return (
      <div className="webApp" >
        <h1> Bonfanti AUTO </h1>
        <p> Listino modelli e prezzi </p>
        <Car marca={this.state.cars[0].marca} modello={this.state.cars[0].modello} prezzo={this.state.cars[0].prezzo} >€</Car>
        <Car marca={this.state.cars[1].marca} modello={this.state.cars[1].modello} prezzo={this.state.cars[1].prezzo} >€</Car>
        <Car marca={this.state.cars[2].marca} modello={this.state.cars[2].modello} prezzo={this.state.cars[2].prezzo} >€</Car>
        <p> {this.state.testo} </p>
        <button className="bottoneClicca" onClick={this.haiCliccatoHandler}>Mostra Nissan</button>
      </div>
    );
  }
}

export default car;