// Matthew Rieckenberg

// https://www.youtube.com/watch?v=Ci-6NYmaimw
// left off at 20:39
// very good tutorial

import './App.css'
import React,{Component} from "react";
import Bar from './components/bar';

class App extends Component{
    state = {
        array: [],
        arraySteps: [],
        colourKey: [],
        colourSteps: [],
        currentStep: 0,
        count: 10, // number of values in the array
        delay: 100, // milliseconds
        algorithm: '',
        timeouts: [],
    };

    componentDidMount() {
        this.generateRandomArray();
    };

    generateRandomInteger = (min,max) =>{
        return Math.floor(Math.random()*(max-min)+min);
    };

    generateRandomArray(){
        console.log("Generating a new array");
        const count = this.state.count;
        const tempArray = new Array();

        for(let i = 0; i<count;i++){
            tempArray.push(this.generateRandomInteger(50,200));
        }

        this.setState({
            array: tempArray,
            arraySteps: {tempArray},
        })

        console.log(tempArray);
    };
    render() {
        let bars = this.state.array.map((value,index)=>{
            <Bar
                key={index}
                index={index}
                length={value}
                colour={this.state.colourKey[index]}
            />
        })
        return(
            <div className="app">
                <h1>{bars}</h1>
            </div>

        )
    }
}

export default App;