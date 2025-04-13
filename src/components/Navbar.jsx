import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: '1rem' }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Navbar;