import React from 'react';
import './App.css';
import Button from "./Button";

class ButtonArea extends React.Component {


    render() {


        return (


            <div className='buttonsArea'>

                <Button func={this.props.incButton} state={this.props.state} value='inc'
                        disabled={this.props.state.counter === this.props.state.maxValue || !(this.props.state.onEditMode)}/>
                <Button func={this.props.countReset} state={this.props.state}  value='reset'
                        disabled={this.props.state.counter === this.props.state.maxValue || !(this.props.state.onEditMode)}/>
            </div>





        )

    }
}

export default ButtonArea;
