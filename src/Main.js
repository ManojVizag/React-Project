import {Link,Route,Routes} from "react-router-dom";
import './Home.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
const Main=()=>{
    return(
        <>
        <div align={`center`}>
        <nav>
        <ul>
      <li><Link to="/home" style={{marginRight:70,marginLeft:70}} id="Link">Home</Link></li>
      <li><Link to="/about" style={{marginRight:70,marginLeft:70}} id="Link">About</Link></li>
      <li><Link to="/contact" style={{marginRight:70,marginLeft:70}} id="Link">Contact</Link></li>
      <li><Link to="/login" style={{marginRight:70,marginLeft:70}} id="Link">Login</Link></li>
      <li><Link to="/register" style={{marginRight:89,marginLeft:70}} id="Link">Register</Link></li>
        </ul>
        </nav>
        <br></br>
        <br></br>
        <h1 align={`center`} style={{color:"red"}}>EMPLOYEE MANAGEMENT SYSTEM</h1>
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        </div>
        </>
    )
}
export default Main;