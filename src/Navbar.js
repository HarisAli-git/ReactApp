import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Block!</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Page</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;