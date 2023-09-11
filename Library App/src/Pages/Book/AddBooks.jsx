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

function AddBooks() {

    const { Formik } = formik;

    const schema = yup.object().shape({
      isbn: yup.string().required(),
      title: yup.string().required(),
      subtitle: yup.string().required(),
      author: yup.string().required(),
      publisher: yup.string().required(),
      pages: yup.string().required(),
      imageUrl: yup.string().required(),
    });
  
  /*  const isbn = useRef("");
    const title= useRef("");
    const subtitle = useRef("");
    const author = useRef("");
    const publisher = useRef("");
    const pages = useRef("");*/

    const navigate = useNavigate();

    
        const addBooksHandler = () => {
            var payload = {
              isbn: isbn.current.value? Number(isbn.current.value): 0,
              title: title.current.value,
              subtitle: subtitle.current.value,
              author: author.current.value,
              publisher: publisher.current.value,
              pages: pages.current.value? Number(pages.current.value): 0,
              imageUrl: imageUrl.current.value,
            };
            axios.post("http://localhost:4000/books", payload).then(() => {
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
        isbn: '',
        title: '',
        subtitle: '',
        author: '',
        publisher: '',
        pages: '',
        imageUrl:'',
      }}
    >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationFormik01">
          <Form.Label style={{color: "white"}}>ISBN</Form.Label>
          <Form.Control type="text"  
                         name="isbn"
                         placeholder="ISBN"
                         value={values.isbn}
                        onChange={handleChange}
                        isInValid={!!errors.isbn}/>
                        <ErrorMessage name="isbn">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                         <Form.Control.Feedback type="invalid">
                              {errors.isbn}
                         </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="validationFormik02">
          <Form.Label style={{color: "white"}}>Title</Form.Label>
          <Form.Control type="text" 
                         name="title"
                         placeholder="title"
                         value={values.title}
                         onChange={handleChange}
                         isInValid={!!errors.title} />
                         <ErrorMessage name="title">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                         <Form.Control.Feedback type="invalid">
                            {errors.title}
                         </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="validationFormik03">
          <Form.Label style={{color: "white"}}>Subtitle</Form.Label>
          <Form.Control type="text" 
                        name="subtitle"
                        placeholder="subtitle"
                        value={values.subtitle}
                        onChange={handleChange}
                        isInValid={!!errors.subtitle} />
                        <ErrorMessage name="subtitile">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                        <Form.Control.Feedback type="invalid">
                            {errors.subtitle}
                         </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="validationFormik04">
          <Form.Label style={{color: "white"}}>Author</Form.Label>
          <Form.Control type="text" 
                        name="author"
                        placeholder="author"
                        value={values.author}
                        onChange={handleChange}
                        isInValid={!!errors.author} />
                        <ErrorMessage name="author">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                        <Form.Control.Feedback type="invalid">
                             {errors.author}
                         </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="validationFormik05">
          <Form.Label style={{color: "white"}}>Publisher</Form.Label>
          <Form.Control type="text"
                         name="publisher"
                         placeholder="publisher"
                         value={values.publisher}
                        onChange={handleChange}
                        isInValid={!!errors.publisher} />
                        <ErrorMessage name="publisher">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                        <Form.Control.Feedback type="invalid">
                          {errors.publisher}
                          </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="validationFormik06">
          <Form.Label style={{color: "white"}}>No of Pages</Form.Label>
          <Form.Control type="number"  
                        name="pages"
                        placeholder="pages"
                         value={values.pages}
                        onChange={handleChange}
                        isInValid={!!errors.pages} />
                        <ErrorMessage name="pages">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                         <Form.Control.Feedback type="invalid">
                              {errors.pages}
                      </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationFormik07">
          <Form.Label style={{color: "white"}}>Image URL</Form.Label>
          <Form.Control type="text"  
                         name="imageUrl"
                         placeholder="ImageUrl"
                         value={values.imageUrl}
                        onChange={handleChange}
                        isInValid={!!errors.imageUrl}/>
                        <ErrorMessage name="imageUrl">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                         <Form.Control.Feedback type="invalid">
                              {errors.imageUrl}
                         </Form.Control.Feedback>
        </Form.Group>
       
        <Button variant="primary" type="submit" onClick={addBooksHandler}>
          Add
        </Button>
      </Form>
        )
        }
      </Formik>
      </div>
    </>
  );
}

export default AddBooks