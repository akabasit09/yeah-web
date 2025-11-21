import { Link } from "react-router-dom";
import yeahLogo from '/Yeah-logo.png'
      

import './App.css'
      
function Navbar() {
      
    return (
        <div className='navbar'>
            <div className="log">
                <img src={yeahLogo} className="logo" alt="yeah logo" />
                <h2>Yeah Food Limited</h2>
            </div>
            <div className="nav-links">
                <ul>
                <Link to="/" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/contact" className='link'>Contact</Link>
                <Link to="/Products" className='link'>Our Products</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;