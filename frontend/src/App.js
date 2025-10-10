import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import BackDrop from "./component/BackDrop";
import SideDrawer from "./component/SideDrawer";
import {useState} from "react";
import IndividualProduct from "./component/IndividualProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./component/CheckOut";
function App() {
  const [sideToggle,setSideToggle]=useState(false)
  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
      
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<IndividualProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkOut" element={<CheckOut/>}/>
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </main>
    </Router>
  );
}

export default App;
