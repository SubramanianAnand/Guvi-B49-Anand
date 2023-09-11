import React, { useState, useEffect } from 'react';
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from '../../Components/DeleteConfirmation';
 

function AllAuthors(props) {

  const [allAuthors, setAllAuthors] = useState([]);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:4000/authors").then((response) => {
      setAllAuthors(response.data);
    });
  }, []);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };
 
  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:4000/authors/${itemToDeleteId}`)
      .then((response) => {
        setAllAuthors((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  return (
    <div>
        <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this Author?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>

        <Row className="mt-2"  id='button1'>
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/add-authors")}>
            Add New Author
          </Button>
        </Col>
        </Row><br/>

        <Row className='container1'>
        {allAuthors.map((item) => (
          <Col key={item.id}>
           
            <Card className='card1'>
              <Card.Body className='cardbody'>  
                <Card.Text className='cardtext'><strong>Name : </strong>{item.name}</Card.Text>
                <Card.Text className='cardtext'><b>DOB :  </b>{item.dob}</Card.Text>
                <Card.Text className='cardtext'><b>About : </b>{item.about}</Card.Text>
                
                <Button className='button' variant="primary" onClick={() => navigate(`/update-authors/${item.id}`)}>
	                  Edit
              	</Button>
                <Button className='button2'
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
     
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default AllAuthors