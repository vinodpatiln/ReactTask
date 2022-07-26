import React from "react";
import { Link } from "react-router-dom";
const Header =()=>{
    return(
        <>
        <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
            Home
        </Link>
        <Link to="/films" style={{ padding: 5 }}>
            Film
        </Link>
        <Link to="/peoples" style={{ padding: 5 }}>
            People
        </Link>
        <Link to="/planets" style={{ padding: 5 }}>
            Planets
        </Link>
        <Link to="/species" style={{ padding: 5 }}>
            Species
        </Link>
        <Link to="/starships" style={{ padding: 5 }}>
            Starships
        </Link>
        <Link to="/vehicles" style={{ padding: 5 }}>
            Vehicles
        </Link>
        </nav>
        </>
    )

}
export default Header;