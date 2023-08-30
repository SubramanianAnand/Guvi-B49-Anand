import './App.css'
import Layout from './Components/Layout'
import AddData from './Pages/AddData';
import Home from './Pages/Home'
import { Routes, Route } from "react-router-dom";
import UpdateData from './Pages/UpdateData';

function App() {
 

  return (
   <Layout>
    <h1>Welcome</h1>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/add-data" element={<AddData />}></Route>
    <Route path="/update-data/:id" element={<UpdateData />}></Route>
    </Routes>
    
   </Layout>
  )
}

export default App
