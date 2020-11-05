import React, { Component } from 'react';

class Calculations extends Component {

    render(){
        return(
        <>  
            <ul>
                {this.props.calculationHistory.map((item) => {
                    return <li className="calculationHx" key={item.id}> {item.expression} = {item.answer}</li>
                })}
            </ul>
        </>
        );
    }
}

export default Calculations;