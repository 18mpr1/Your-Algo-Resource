import './App.css';
import React,{Component} from "react";

// with help from https://www.youtube.com/watch?v=Ci-6NYmaimw


class App extends Component{
    state = {
        array: [],
        arraySteps: [],
        colourKey: [],
        colourSteps: [],
        count: 10,
        delay: 100,
        algorithm: '',
        timeouts: [],
    };

    componentDidMount() {
        this.generateRandomArray();
    }

    generateRandomInt = (min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    generateRandomArray=()=>{
        const count = this.state.count;
        const temp = [];

        for(let i = 0; i<count; i++){
            temp.push(this.generateRandomInt(50,200));
        }
        console.log(temp);
    }
    render(){

        return(
            <div className="App">
                <h1>Hulloo</h1>
            </div>

        );
    }
}

export default App;
