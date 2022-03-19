import React from "react";
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'
import CalendarTodaySharpIcon  from "@material-ui/icons/CalendarTodaySharp";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={<Checkbox 
          checked={checked}
          icon={ <SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
       />}
       label="Testing Checkbox"
    />
      
    
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CalendarTodaySharpIcon />
      <TextField 
        variant='filled'
        type='date'

      />
      <CheckboxExample />
    <ButtonGroup variant='contained' 
        color="primary">
        <Button 
        size='large'
        endIcon={<SaveIcon /> }
        >
         Save
        </Button>

        <Button 
        size='large'
        endIcon={<DeleteIcon />}
        
      
        >
          Discard
        </Button>
        
   </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
