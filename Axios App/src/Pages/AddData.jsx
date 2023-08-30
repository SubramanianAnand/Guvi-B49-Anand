import React from 'react';
import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddData() {
  const Name = useRef("");
  const userName = useRef("");
  const email = useRef("");
  const address = useRef("");
  const geo = useRef("");
  const phone = useRef("");
  const website = useRef("");
  const companyName = useRef("");
  const catchPhrase = useRef("");
  const bs = useRef("");

  const navigate = useNavigate();
 
  const addDataHandler = () => {
    var payload = {
      Name: Name.current.value,
      userName: userName.current.value,
      email: email.current.value,
      address: address.current.value,
      geo: geo.current.value? Number(geo.current.value):0,
      phone: phone.current.value? Number(phone.current.value):0,
      website: website.current.value,
      companyName: companyName.current.value,
      catchPhrase: catchPhrase.current.value,
      bs: bs.current.value,
    };
    
    axios.post("http://localhost:4000/userdata", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <>
        <legend>Create</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={Name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" ref={userName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="textarea" ref={address} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGeo">
          <Form.Label>Geo</Form.Label>
          <Form.Control type="number" ref={geo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" ref={phone} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" ref={website} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCompanyName">
          <Form.Label>CompanyName</Form.Label>
          <Form.Control type="text" ref={companyName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCatchPhrase">
          <Form.Label>CatchPhrase</Form.Label>
          <Form.Control type="text" ref={catchPhrase} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBs">
          <Form.Label>Bs</Form.Label>
          <Form.Control type="text" ref={bs} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addDataHandler}>
          Add
        </Button>
      </Form>
    </>
  )
}

export default AddData