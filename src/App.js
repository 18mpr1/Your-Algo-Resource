import './App.css';

let arraySize = 40;
let min = 1;
let max = 250;

let array = {arraySize};
let sortedArray = {arraySize};

function generateArray(){
  for (var i = 0; i<=arraySize;i++){
    array[i]=generateArrayValue();
    if (array[i]===array[i-1]){
      array[i]=generateArrayValue(min,max);
    }
  }
}

function generateArrayValue(){
  return Math.floor(Math.random()*(max-min)+min);
}

function App() {
  generateArray();
  console.log(array);
  return (

    <div className="App">

    </div>
  );
}

export default App;
