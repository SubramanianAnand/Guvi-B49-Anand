import React, { useState, useEffect } from 'react';
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from '../../Components/DeleteConfirmation';

function AllBooks() {

  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:4000/books").then((response) => {
      setAllBooks(response.data);
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
      .delete(`http://localhost:4000/books/${itemToDeleteId}`)
      .then((response) => {
        setAllBooks((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  return (
    <>

      <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this Book?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>

    <Row className="mt-2"  id='button1'>
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/add-books")}>
            Add New Book
          </Button>
        </Col>
      </Row><br/>
           <Row className='container1'>
        {allBooks.map((item) => (
          <Col key={item.id}>
           
            <Card className='card1'>
              <Card.Body className='cardbody'>
              <Card.Img className='cardimg' variant="top" src={item.imageUrl} />  
                <Card.Text className='cardtext'><strong>ISBN : </strong>{item.isbn}</Card.Text>
                <Card.Text className='cardtext'><b>Title :  </b>{item.title}</Card.Text>
                <Card.Text className='cardtext'><b>Subtitle : </b>{item.subtitle}</Card.Text>
                <Card.Text className='cardtext'><b>Author : </b>{item.author}</Card.Text>
                <Card.Text className='cardtext'><b>Publisher : </b>{item.publisher}</Card.Text>
                <Card.Text className='cardtext'><b>No Of Pages : </b>{item.pages}</Card.Text>
                <Button className='button' variant="primary" onClick={() => navigate(`/update-books/${item.id}`)}>
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
     
    </>
  )
}

export default AllBooks