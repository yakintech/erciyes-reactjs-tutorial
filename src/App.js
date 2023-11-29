import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Suppliers from "./pages/Suppliers"
import SupplierDetail from "./pages/SupplierDetail"
import Customers from "./effect/Customers"
import CustomerDetail from "./effect/CustomerDetail"
import Products from "./pages/Products"
import Favorites from "./pages/Favorites"
import { useContext } from "react"
import { FavoritesContext } from "./context/FavoritesContext"
import ProductDetail from "./pages/ProductDetail"


function App(){

   const {favorites} = useContext(FavoritesContext)


  return <>

    <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>   
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'> Favorites (<span style={{color:'red'}}>{favorites.length}</span>) </Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/customers" element={<Customers/>}></Route>
      <Route path="/customers/:id" element={<CustomerDetail/>}></Route>
      <Route path="/suppliers" element={<Suppliers></Suppliers>}></Route>
      <Route path="/suppliers/:id" element={<SupplierDetail/>}></Route>
      <Route path="/products" element={<Products/>} ></Route>
      <Route path="/products/:id" element={<ProductDetail/>} ></Route>
      <Route path="/favorites" element={<Favorites/>}></Route>
    </Routes>

  <h1>Site Footer</h1>
  </>
}

export default App