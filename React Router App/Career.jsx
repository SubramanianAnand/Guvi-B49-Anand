import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Career() {
  return (
    <div className='career'>
      <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg" />
      <Card.Body>
        <Card.Title>Full Stack Development</Card.Title>
        <Card.Text>
        Full Stack Development refers to the development of both front end (client side) and back end(server side) portions of web application.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://sloanreview.mit.edu/wp-content/uploads/2020/09/EG2-Redman-Davenport-Serious-Data-Science-1290x860-1.jpg" />
      <Card.Body>
        <Card.Title>Data Science</Card.Title>
        <Card.Text>
        Data science is an in-demand career path for people with an aptitude for research, programming, math, and computers.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://nfea.no/wp-content/uploads/2018/01/CYBER-2018.jpg" />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
        <Card.Text>
        Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Career