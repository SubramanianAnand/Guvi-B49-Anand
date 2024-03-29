import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Layout(props) {
  return (
    <>
    <div>
    <Navbar expand="lg" variant="dark" bg="primary">
      <Container>
        <Navbar.Brand >User Data</Navbar.Brand>
      </Container>
     </Navbar>
     <Container>{props.children}</Container>
    </div>
</>
  )
}

export default Layout