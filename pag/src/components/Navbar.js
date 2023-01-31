import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Favorites from "./Favorites"





export function Navbar() {

    return <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 bg-dark text-light ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" alt="logo" width="150" height="80"></img>
            </div>
            <div className="col-lg-6 bg-dark"> </div>
            <div className="col-lg-2 bg-dark text-light aling-items-center mt-4">
                <div className="dropdown">
                    <button className="btn btn-warning text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
                      <Favorites/>
                      </button>
                    <ul className="dropdown-menu">
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
};

export default Navbar