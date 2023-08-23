import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import All from './All'
import Fsd from './Fsd'
import Ds from './Ds'
import Cs from './Cs'
import Career from './Career'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  
  return (
    <>
      <Router>
        <div>
        <Nav variant="underline" className='nav'>
      <Nav.Item>
        <Nav.Link href="/home">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/fullstackdevelopment">Full Stack Development</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/datascience">Data Science</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cybersecurity">Cyber Security</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='career'>Career</Nav.Link>
      </Nav.Item>
    </Nav>
          <Routes>
            <Route path='/home' exact Component={All}></Route>
            <Route path='/fullstackdevelopment' Component={Fsd}></Route>
            <Route path='/datascience' Component={Ds}></Route>
            <Route path='/cybersecurity' Component={Cs}></Route>
            <Route path='/career' Component={Career}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}


export default App
