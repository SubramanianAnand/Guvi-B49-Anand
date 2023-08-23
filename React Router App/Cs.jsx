import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cs() {
  return (
    <div className='cs'>
      <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fbk.eu/wp-content/uploads/2020/12/Cover-Cyber-Security-1.jpg" />
      <Card.Body>
        <Card.Title>Introduction of Cyber Security</Card.Title>
        <Card.Text>
        Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://itsupportla.com/files/2021/07/darkweb-Bill-Hinton-Photography-5695cd4b3df78cafda8ecaea.jpg" />
      <Card.Body>
        <Card.Title>Dark Web</Card.Title>
        <Card.Text>
        The dark web is the World Wide Web content that exists on darknets: overlay networks that use the Internet but require specific software, configurations, or authorization to access.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.tekrevol.com/blogs/wp-content/uploads/2020/01/Application-Security.jpg" />
      <Card.Body>
        <Card.Title>Application Security</Card.Title>
        <Card.Text>
        Application security is a set of measures designed to prevent data or code at the application level from being stolen or manipulated. 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://solutions.borderstates.com/wp-content/uploads/2018/04/Network-security.jpg" />
      <Card.Body>
        <Card.Title>Network Security</Card.Title>
        <Card.Text>
        Network Security refers to the measures taken by any enterprise or organization to secure its computer network and data using both hardware and software systems.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.kaspersky.com.au/content/en-au/images/repository/isc/2020/what-is-cloud-security01.jpg" />
      <Card.Body>
        <Card.Title>Cloud Security</Card.Title>
        <Card.Text>
        Cloud security is a collection of procedures and technology designed to address external and internal threats to business security. 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cs