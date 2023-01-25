import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context"

export const LongCard = (props) => {
  return (<div className="card" style={{ width: "55rem" }}>
    <img src={props.imagen} className="card-img-top" alt="..." />
    <div className="card-header">

    </div>
    <div className="card-body">
      <Link to={props.ruta}>
        <a className="btn btn-primary">{props.titulo}</a>
      </Link>
    </div>
  </div>)
}

export const Cards = ({ titulo, ruta, descripcion, id }) => {
  const { actions } = useContext(Context)

  return <div className="card mx-2 mb-2 mt-2" style={{ width: "18rem" }}>
    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <div className="row">
        <div className="col-8">
          <Link to={ruta}>
            <a href="#" className="btn btn-primary">Go to details</a>
          </Link>
        </div>
        <div className="col"><button className="btn btn-warning" onClick={() => {
          actions.addFav(titulo, id)
        }}>🧡</button>
        </div>

      </div>
    </div>
  </div>
}
