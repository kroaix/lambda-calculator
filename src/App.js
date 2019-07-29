import React, { useState } from "react";
import "./App.css";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo.js";
import Display from "./components/DisplayComponents/Display.js";


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should receive 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayState, setDisplayState] = useState('0');

  const updateValue = param => {
    setDisplayState(displayState === '0' ? param : displayState + param);
  }

  const resetValue = () => setDisplayState('0');
  
  const calculateValue = () => {
    setDisplayState(eval(displayState));
  }

  return (
    <div className="container">
      <Logo />
      <Display displayState={displayState}/>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className="left">
          <Specials updateValue={updateValue} resetValue={resetValue} />
          <Numbers updateValue={updateValue} />
        </div>
        <div className="right">
          <Operators updateValue={updateValue} calculateValue={calculateValue} /> 
        </div>
      </div>
    </div>
  );
  
}
export default App;