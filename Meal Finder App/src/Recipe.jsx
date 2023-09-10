import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Recipe() {

    const [allMeals, setAllMeals] = useState([]);
    const [searchField, setSearchField] = useState("");
   

    const handleChange = e => {
        setSearchField(e.target.value);
      };

    useEffect(() => {
        axios.get("http://localhost:4000/meals").then((response) => {
          setAllMeals(response.data);
        });
      }, []);
    
  return (
    <div>
      <br/>
      <h3>Meal Finder</h3>
        <br/>
        <input 
          className="col-md-3 center"
          type = "search" 
          placeholder = "Search Food" 
          value={searchField}
          onChange = {handleChange}
        />
        <Button variant="warning" id="button-addon2" className='button'>
          search
        </Button>
        
      <Row xs={1} md={3} className='container1'>
        {allMeals.map((item) => (
          <Col key={item.id}>
            <Card className='card'>
              <Card.Body className='cardbody'>
              <Card.Img className='cardimg' variant="top" src={item.strMealThumb} />
                <Card.Title className='cardtext'>{item.strMeal}</Card.Title>
                <Card.Text className='cardtext'><b>Category</b> : {item.strCategory}</Card.Text>
                <Card.Text className='cardtext'><b>Country</b> : {item.strArea}</Card.Text>
                <Button href={item.strYoutube} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor:'green'}} size="lg"
                 onClick={()=>{item.strYoutube}}>
	                  Watch Video
              	</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Recipe