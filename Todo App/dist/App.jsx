import Form from 'react-bootstrap/Form';
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Todo from './Todo';
import React, { useState } from 'react';
import Select from 'react-dropdown-select';

function Statusdropdown() {

  const options = [
    { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Not Completed', label: 'Not Completed' }, 
];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select className='select'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
function App() {
  return (
    <>
      <div className='header'>
        <h2>My Todo</h2>
        <br/>
        <br/>
        <Stack direction='horizontal'>
        <Form.Control size="lg" type="text" id="name1" placeholder="Todo Name" />
        <Form.Control size="lg" type="text" id="name2" placeholder="Todo Description" />

        <Button variant="success" size="lg" active>
       Add Todo
      </Button>{' '}
      </Stack>
      <br/>
      <br/>
      
      <h3>My Todos</h3>
      <h4>Status:{Statusdropdown()}</h4>
      <br/>
      <br/>

      <Stack direction='horizontal' gap={5}>
      <Todo/>
      <Todo/>
      <Todo/>
      </Stack>
      </div>
    </>
  )
}

export default App
