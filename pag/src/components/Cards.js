import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context"
import {  Button } from "react-bootstrap"

export const LongCard = (props) => {
  return (<div className="card" style={{ width: "55rem" }}>
    <img src={props.imagen} className="card-img-top" alt="..." />
    <div className="card-header">

    </div>
    <div className="card-body">
      <Link to={props.ruta}>
        <a className="btn btn-primary">{props.titulo}</a>
        <a className="btn btn-primary">{props.name}</a>
      </Link>
    </div>
  </div>)
}

export const Cards = ({ titulo, ruta }) => {
  const { actions } = useContext(Context)

  return <div className="card mx-2 mb-2 mt-2" style={{ width: "18rem" }}>
    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <div className="row">
        <div className="col-8">
          <Link to={ruta}>
            <a href="#" className="btn btn-primary">Go to details</a>
          </Link>
        </div>
        <div className="col">
        <Button variant="outline-danger" className="justify-content-end ml-4" onClick={() => { actions.addFavorite(titulo) }}>🧡</Button> 
        </div>

      </div>
    </div>
  </div>
}
