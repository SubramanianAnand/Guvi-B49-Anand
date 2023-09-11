
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Layout(props) {
  return (
    <div>
        <Navbar expand="lg" variant="warning" bg="warning">
          <Container>
            <Navbar.Brand><b>Library</b></Navbar.Brand>
          </Container>
        </Navbar>
        <body class=" hero center px3 py4 white">
</body>
      <Container>{props.children}</Container>
    </div>
  )
}

export default Layout