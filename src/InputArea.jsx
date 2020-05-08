import React from 'react';
import './App.css';

class InputArea extends React.Component {

// state={
//     minStart: -1,
//     minMax: 0
// }





    render() {

        let incorrectCounter = this.props.state.counter < 0 || this.props.state.counter >= this.props.state.maxValue;
        let incorrectMaxValue = this.props.state.maxValue < 0 || this.props.state.maxValue <= this.props.state.counter;

        let errorValue = incorrectCounter  ? 'incorrect' : ''
        let errorValueM = incorrectMaxValue  ? 'incorrect' : ''



        return (


            <div className='inputArea'>
                <div className='input'>
                    <span className='title'>Max value</span>
                   <input min={1} className={errorValueM} onChange={this.props.setMaxValue} value={this.props.state.maxValue} type='number'/>

                </div>
                <div className='input'>
                    <span className='title'>Start value</span>
                     <input min={-1} className={errorValue} onChange={this.props.setCounter} value={this.props.state.counter} type='number' />
                </div>

            </div>


        )

    }
}

export default InputArea;
