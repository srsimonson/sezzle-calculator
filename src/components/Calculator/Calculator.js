import React, { Component } from 'react';
import { evaluate, sqrt } from 'mathjs';
import './Calculator.css';

class Calculator extends Component {
    state = {
        operator: '',
        operatorClicked: false,
        firstNumber: '',
        secondNumber: '',
        answer: '',
        showExpression: true,
    }

    numberClicked = (event) => {
        if (this.state.operatorClicked === false) {
            this.setState({ 
                firstNumber: this.state.firstNumber.concat(event.target.value),
                showExpression: true,
            })
        } else {
            this.setState({ 
                secondNumber: this.state.secondNumber.concat(event.target.value),
                showExpression: true,
            })
        }
    }

    decimalClicked = (event) => {
        if (!this.state.firstNumber.includes('.') && !this.state.operatorClicked) {
            this.setState({ 
                firstNumber: this.state.firstNumber.concat(event.target.value) 
            })
        } else if (this.state.operatorClicked) {
            !this.state.secondNumber.includes('.') 
                ? 
                    this.setState({ 
                        secondNumber: this.state.secondNumber.concat(event.target.value) 
                    }) 
                : 
                    console.log('You can\'t have 2 decimals. I\'m sorry, you just can\'t!');
        }
    }

    operatorClicked = (event) => {
        if (this.state.firstNumber !== '') {
            this.setState({
                operator: event.target.value,
                operatorClicked: true,
            })
        }
    }

    equalsClicked = () => {
        let answer = evaluate(this.state.firstNumber.concat(this.state.operator, this.state.secondNumber));
        // answer === Infinity 
        //     ?
        //         this.setState({
        //             answer: undefined
        //         }) 
        //     :
        this.setState({
            firstNumber: this.state.firstNumber,
            secondNumber: this.state.secondNumber,
            operator: this.state.operator,
            answer: answer,
        }, () => { 
            this.props.submitCalc(this.state)
            this.setState({
                showExpression: false,
                firstNumber: '',
                secondNumber: '',
                operator: '',
                operatorClicked: false,
            })
        })
    };

    percentClicked = () => {
        this.setState({
            firstNumber: this.state.firstNumber,
            answer: this.state.firstNumber / 100,
            operator: '%',
        }, () => { 
            this.props.submitCalc(this.state)
            this.setState({
                firstNumber: '',
                operator: '',
            })
        })
    };

    sqrtClicked = () => {
        this.setState({
            firstNumber: this.state.firstNumber,
            answer: sqrt(this.state.firstNumber),
            operator: '√',
        }, () => { 
            this.props.submitCalc(this.state)
            this.setState({
                firstNumber: '',
                operator: '',
            })
        })
    };

    clearClicked = () => {
        this.setState({
            answer: '',
            firstNumber: '',
            secondNumber: '',
            operator: '',
        })
    }

    render() {
        return (
            <>
            <div className='output'>
                { this.state.showExpression === true 
                ? 
                    <ul>
                        <li>{this.state.firstNumber} {this.state.operator} {this.state.secondNumber}</li>
                    </ul>
                :
                    <ul>
                        <li>{this.state.answer}</li>
                    </ul>
                }
            </div>
            <div className='button-grid'>
                <div className='button-row'>
                    <button className='non-ops' onClick={this.clearClicked}>C</button>
                    <button className='non-ops' onClick={this.sqrtClicked}>√</button>
                    <button className='non-ops' value='%' onClick={this.percentClicked}>%</button>
                    <button className='operator' value='/' onClick={this.operatorClicked}>/</button>
                </div>
                <div className="button-row">
                    {['7', '8', '9'].map(e => <button value={e} onClick={this.numberClicked}>{e}</button>)}
                    <button className='operator' value='*' onClick={this.operatorClicked}>x</button>
                </div>
                <div className="button-row">
                    {['4', '5', '6'].map(e => <button value={e} onClick={this.numberClicked}>{e}</button>)}
                    <button className='operator' value='-' onClick={this.operatorClicked}>-</button>
                </div>
                <div className="button-row">
                    {['1', '2', '3'].map(e => <button value={e} onClick={this.numberClicked}>{e}</button>)}
                    <button className='operator' value='+' onClick={this.operatorClicked} >+</button>
                </div>
                <div className="button-row">
                    <button className='zero' value='0' onClick={this.numberClicked}>0</button>
                    <button value='.' onClick={this.decimalClicked} >.</button>
                    <button className='operator' value='=' onClick={this.equalsClicked}>=</button>
                </div>
            </div>
            </>
        )
    }
}

export default Calculator;