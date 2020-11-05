// import logo from '../../logo.svg';
import React, {Component} from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator';
import Calculations from '../Calculations/Calculations';
import axios from 'axios';

class App extends Component {

  state = {
    calculationHistory: [],
  }

  componentDidMount() {
    this.getCalcHx();
    setInterval(this.getCalcHx, 1000);
  }

  getCalcHx = () => {
    axios({
      method: 'GET',
      url: '/calculations'
    }).then((response) => {
      this.setState({
        calculationHistory: response.data
      })
    }).catch((error) => {
      console.log('error with GET request', error);
    })
  }

  submitCalc = (newCalc) => {
    axios({
      method: 'POST',
      url: '/calculations',
      data: newCalc
    }).then((response) => {
      this.getCalcHx();
    }).catch ((err) => {
      alert('ERROR with app.js POST: ', err)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-body">
            <Calculator submitCalc={this.submitCalc}/>
        </div>
        <div className="calculation-history">
            <Calculations calculationHistory={this.state.calculationHistory}/>
        </div>
      </div>
    );
  }
}

export default App;
