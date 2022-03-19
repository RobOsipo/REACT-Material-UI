import React from "react";
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from "@material-ui/icons/Save"


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <ButtonGroup>
        <Button 
        size='large'
        endIcon={<SaveIcon />}
        
        onClick={() => console.log('hello')}
        variant='contained' 
        color="primary">
         Save
        </Button>
        <Button 
        size='large'
        endIcon={<SaveIcon />}
        
        onClick={() => console.log('hello')}
        variant='contained' 
        color="secondary">
          Discard
        </Button>
        
   </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
