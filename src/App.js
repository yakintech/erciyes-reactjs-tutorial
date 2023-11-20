import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Suppliers from "./pages/Suppliers"
import SupplierDetail from "./pages/SupplierDetail"
import StateIntro from "./state/StateIntro"
import StateIntro2 from "./state/StateIntro2"


function App(){

  return <StateIntro2/>
  return <>

    <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>   
      <li><Link to='/suppliers'>Suppliers</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/suppliers" element={<Suppliers></Suppliers>}></Route>
      <Route path="/suppliers/:id" element={<SupplierDetail/>}></Route>
    </Routes>

  <h1>Site Footer</h1>
  </>
}

export default App