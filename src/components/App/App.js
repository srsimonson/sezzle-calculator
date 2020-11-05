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
      console.log('GET error: ', error.response);
    })
  }

  submitCalc = (newCalc) => {
    axios({
      method: 'POST',
      url: '/calculations',
      data: newCalc
    }).then((response) => {
      this.getCalcHx();
    }).catch ((error) => {
      console.log('POST error: ', error.response)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-body">
            <h3>Steve Simonson - Sezzle Calculator</h3>
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
