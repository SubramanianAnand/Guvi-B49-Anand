import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Fsd() {
  return (
      <div className='fsd'>
      <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.section.io/engineering-education/front-end-vs-back-end-in-web-development/full-stack-development.png" />
      <Card.Body>
        <Card.Title>Introduction of Full Stack Development</Card.Title>
        <Card.Text>
        Full Stack Development refers to the development of both front end (client side) and back end(server side) portions of web application.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://geekofcoding.files.wordpress.com/2020/09/images.png" />
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Text>
        HTML is the standard markup language for Web pages. With HTML you can create your own Website.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.codespot.org/assets/css.jpg" />
      <Card.Body>
        <Card.Title>CSS</Card.Title>
        <Card.Text>
        CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.jpg" />
      <Card.Body>
        <Card.Title>Javascript</Card.Title>
        <Card.Text>
        JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Fsd