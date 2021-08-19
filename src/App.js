import React from 'react';
import { useReducer } from 'react';
import './App.css';
import reducer, { initialState} from './reducers';
import { addOne } from './actions';
import { applyNumber, changeOperation, clearDisplay, memoryPlus, memoryValue, memoryClear } from './actions';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

const App = () =>{
  const [state, dispatch ] = useReducer(reducer, initialState);

  /*const add = () =>
  {
    dispatch(addOne());
  }*/
  const memoryplus = () =>
  {
    console.log("Memory Plus is working",state.memory);
    dispatch(memoryPlus())
  }
  const add = (value) => {
    dispatch(applyNumber(parseInt(value.target.textContent)))
    //console.log(value.target.textContent);
  }

  const operate = (value) => 
  {//console.log(value.target.textContent)
    dispatch(changeOperation(value.target.textContent));
  }

  const clear = () =>
  {
    dispatch(clearDisplay());
  }

  const mrValue = (x) =>
  {
    console.log("Memory Value is working", state.memory);
    dispatch(memoryValue);
  }

  const mrClear = () =>
  {console.log("Value in memory is ", state.memory)
    dispatch(memoryClear)
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">value.target.textContent
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> state.operation</span>
              <span id="memory"><b>Memory:</b> state.memory</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={memoryplus}/>
              <CalcButton value={"MR"} onClick={mrValue}/>
              <CalcButton value={"MC"} onClick={mrClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={add}/>
              <CalcButton value={2} onClick={add}/>
              <CalcButton value={3} onClick={add}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={add}/>
              <CalcButton value={5} onClick={add}/>
              <CalcButton value={6} onClick={add}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={add}/>
              <CalcButton value={8} onClick={add}/>
              <CalcButton value={9} onClick={add}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operate}/>
              <CalcButton value={"*"} onClick={operate}/>
              <CalcButton value={"-"} onClick={operate}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
