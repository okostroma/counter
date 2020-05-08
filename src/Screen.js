import React from 'react';

import './App.css';


class Screen extends React.Component {




    render () {
        let newClass = this.props.state.counter === this.props.state.maxValue || this.props.state.counter >= this.props.state.maxValue
            || this.props.state.counter < 0 || this.props.state.maxValue < 0 || this.props.state.maxValue <= this.props.state.counter ?
            "counter" : "";

        let maxEl = this.props.state.digit === this.props.state.maxValue  ? 'counter' : ''



    return (

          <div className='screen'>
              <span className={`maxValue + ${newClass}`}>


                  { this.props.state.counter === this.props.state.maxValue || this.props.state.counter >= this.props.state.maxValue
                  || this.props.state.counter < 0 || this.props.state.maxValue < 0
                  || this.props.state.maxValue <= this.props.state.counter ? <span className='incorrectValue'> incorrect value!!!</span> :
                      !(this.props.state.onEditMode) ?
                      <span className='set'> Enter values and press 'Set'</span> : <span className={`digit + ${maxEl}`}>{this.props.state.digit}</span>

                  }

              </span>
          </div>


    )

  }
}

export default Screen;
