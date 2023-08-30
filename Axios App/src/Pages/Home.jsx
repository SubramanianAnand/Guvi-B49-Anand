import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from '../Components/DeleteConfirmation';

function Home() {

    const [alldata, setAllData] = useState([]);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:4000/userdata").then((response) => {
          setAllData(response.data);
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
          .delete(`http://localhost:4000/userdata/${itemToDeleteId}`)
          .then((response) => {
            setAllData((previousState) => {
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
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>

    <Row className="mt-2" id="button">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/add-data")}>
            Add New Data
          </Button>
        </Col>
      </Row>
<br/>
        <Row xs={1} md={3} className="g-2">
        {alldata.map((person) => (
          <Col key={person.id}>
            <Card id="card">
              <Card.Body>
                <Card.Title>Name : {person.name}</Card.Title>
                <Card.Text>Username : {person.username}</Card.Text>
                <Card.Text>Email : {person.email}</Card.Text>
                <Card.Text>Address :  {person.address.street}, {person.address.suite}, {person.address.city}, {person.address.zipcode}.</Card.Text>
                <Card.Text>Geo :  {person.address.geo.lat},  {person.address.geo.lng}</Card.Text>
                <Card.Text>Phone : {person.phone}</Card.Text>
                <Card.Text>Website : {person.website}</Card.Text>
                <Card.Text>Company Name : {person.company.name}</Card.Text>
                <Card.Text>CatchPhrase : {person.company.catchPhrase}</Card.Text>
                <Card.Text>Bs : {person.company.bs}</Card.Text>
                <Button variant="primary" onClick={() => navigate(`/update-data/${person.id}`)}>
	                Edit
	              </Button>{' '}
                <Button
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(person.id)}}
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

export default Home