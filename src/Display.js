import React from 'react';

import './App.css';
import ButtonArea from "./ButtonArea";
import Screen from "./Screen";
import Button from "./Button";
import InputArea from "./InputArea";

class Display extends React.Component {


    render() {


        return (
            <div className="displays">
                <div className="display-1">
                    <InputArea setMaxValue={this.props.setMaxValue} setCounter={this.props.setCounter}  isValueChanged={this.props.isValueChanged} state={this.props.state}/>
                    <div className='buttonArea'>
                        <Button func={this.props.setSetButton}  state={this.props.state} disabled={this.props.state.counter === this.props.state.maxValue} value='set'/>
                    </div>
                </div>

                <div className="display-2">
                    <Screen setSetButton={this.props.setSetButton} state={this.props.state}/>
                    <ButtonArea incButton={this.props.incButton} state={this.props.state}
                                countReset={this.props.countReset}/>
                </div>
            </div>


        )

    }
}

export default Display;
