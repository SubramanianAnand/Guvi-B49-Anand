
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import React, { useState } from 'react';
import Select from 'react-dropdown-select';

function Todo() {

    function CardDropdown() {
    const options = [
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
  return (
    <div>
        <Card className="card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>Name:</Card.Text>
        <Card.Text>Description:</Card.Text>
        <Card.Text><Stack direction="horizontal">Status:<br/>{CardDropdown()}</Stack></Card.Text>
        <div className='card-button'>
       <Button className='edit'>Edit</Button>{' '}
       <Button className='delete'>Delete</Button>
       </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Todo