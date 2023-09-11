import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddAuthor() {

    const { Formik } = formik;

    const schema = yup.object().shape({
      name: yup.string().required(),
      dob: yup.string().required(),
      about: yup.string().required(),
    });

    const navigate = useNavigate();

    const addAuthorsHandler = () => {
        var payload = {
          name: name.current.value,
          dob: dob.current.value? Number(dob.current.value): 0,
          about: about.current.value,
        };
        axios.post("http://localhost:4000/authors", payload).then(() => {
          navigate("/");
        });
    };

  return (
    <>
        <div className='add'>
        <legend style={{color: "white"}}>Create</legend>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        dob: '',
        about: '',
      }}
    >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationFormik01">
          <Form.Label style={{color: "white"}}>Name</Form.Label>
          <Form.Control type="text"  
                         name="name"
                         placeholder="Name"
                         value={values.name}
                        onChange={handleChange}
                        isInValid={!!errors.name}/>
                        <ErrorMessage name="name">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                         <Form.Control.Feedback type="invalid">
                              {errors.name}
                         </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="validationFormik02">
          <Form.Label  style={{color: "white"}}>DOB</Form.Label>
          <Form.Control type="text" 
                         name="dob"
                         placeholder="DOB"
                         value={values.dob}
                         onChange={handleChange}
                         isInValid={!!errors.dob} />
                         <ErrorMessage name="dob">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                         <Form.Control.Feedback type="invalid">
                            {errors.dob}
                         </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="validationFormik03">
          <Form.Label style={{color: "white"}}>About</Form.Label>
          <Form.Control type="text" 
                        name="about"
                        placeholder="about"
                        value={values.about}
                        onChange={handleChange}
                        isInValid={!!errors.about} />
                        <ErrorMessage name="about">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                        <Form.Control.Feedback type="invalid">
                            {errors.about}
                         </Form.Control.Feedback>
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={addAuthorsHandler}>
          Add
        </Button>
      </Form>
        )
        }
      </Formik>
      </div>
      </>
  )
}

export default AddAuthor