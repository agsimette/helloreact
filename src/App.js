import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';


function App() {

const [contador, setContador] = useState(0);

function handleButtonClick(){
  setContador(contador + 1);
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Header title={contador}/>
        </p>
        <input type="button" value="click me" onClick={handleButtonClick} />
      </header>
    </div>
  );
}

export default App;
