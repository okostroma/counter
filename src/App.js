import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./Display";

class App extends React.Component {
    componentDidMount() {
        this.restoreState();
    }


    state = {
        counter: 0,
        maxValue: 5,
        onEditMode: false,
        digit: 0

    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('state', stateAsString)

    }

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem('state');
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state)

    }

    setMaxValue = (e) => {
        this.setState({
            maxValue: e.currentTarget.valueAsNumber,
            onEditMode: false
        }, this.saveState)

    }


    setCounter = (e) => {
        this.setState({
            counter: e.currentTarget.valueAsNumber,
            onEditMode: false
        }, this.saveState)
    }


    setSetButton = () => {
        this.setState({
            digit: this.state.counter,
            onEditMode: true
        }, this.saveState)
    }

    incButton = () => {
        let number = this.state.digit;
        number < this.state.maxValue && number++
        this.setState({
            digit: number
        }, this.saveState)
    }


    countReset = () => {
        this.setState({
            digit: this.state.counter
        }, this.saveState)


    }


    render() {


        return (
            <div className="App">
                <Display incButton={this.incButton} setSetButton={this.setSetButton} setMaxValue={this.setMaxValue}
                         setCounter={this.setCounter} state={this.state}
                         countReset={this.countReset}/>
            </div>
        )

    }
}

export default App;
