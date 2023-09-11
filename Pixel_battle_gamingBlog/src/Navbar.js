const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Pixel Battle</h1>
            <div className="links">
                <a href="./">Home</a>
                <a href="./" style ={{
                    color: "red", background: "orange", borderRadius: "20px"
                }}>About Us</a>
                <a href="./">Blog</a>
                <a href="./">Teams</a>
            </div>
        </nav>
     );
}
 
export default Navbar;