import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";




export function Menu() {


    return <ul className="list-group list-group-flush">
        <Link to="/" className="btn btn-dark">
            <li className="list-group-item bg-dark text-light text-strong"> Menú</li>
        </Link>
        <Link to="/personajes" className="btn btn-dark">
            <li className="list-group-item bg-dark text-light">- Personajes </li>
        </Link>
        <Link to="/planets" className="btn btn-dark">
            <li className="list-group-item bg-dark text-light">- Planetas</li>
        </Link>
        <li className="list-group-item bg-dark text-light text-muted"> More in soon...</li>
    </ul>
};

export default Menu;