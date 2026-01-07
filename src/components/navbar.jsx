import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            padding: "20px",
            backgroundColor: "white",
            zIndex: 1000,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>


            <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>

           <li> <Link to="/">Home</Link></li>
           <li><Link to="/portfolio">Portfolio</Link></li> 
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;