import React from 'react';
import './App.css';

class Button extends React.Component {


    render() {
        let noHover1 = this.props.state.counter < 0 || this.props.state.counter >= this.props.state.maxValue
            || !(this.props.state.onEditMode);
        let noHover2 = this.props.state.maxValue < 0 || this.props.state.maxValue <= this.props.state.counter
            || !(this.props.state.onEditMode);

        let noButtonHover = (noHover1 || noHover2) ? 'noHover' : ''


        return (



            <div>
                <button className={`button + ${noButtonHover}`} onClick={this.props.func}
                        disabled={this.props.disabled} >{this.props.value}
                </button>

            </div>



        )

    }
}

export default Button;
