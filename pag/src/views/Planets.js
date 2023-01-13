
import React from "react";
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react";
import { Context } from "../store/Context"
import "bootstrap/dist/css/bootstrap.min.css"

export function Planets() {

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets()
  }, [])

  return (
    <div> 
    {store.planets.map(planets =>  <div className="row-cols-md-2 g-4 mt-2 p-2 d-flex flex-row"  >

      <div className="card h-100">
        <img src="./img/1634980934_021731_1634982870_portada_normal.jpg " className="card-img-top img-fluid" />
        <div className="card-body text-dark text-secondary text-center aling-items-center">
            <Link to={"/planeta/" + planets.uid} > <h5 className="card-title "> {planets.name} </h5>  </Link>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-warning"> Agregar a favoritos </button>
        </div>
     
    </div>
  </div>)}
  </div>
  )
};

export default Planets
