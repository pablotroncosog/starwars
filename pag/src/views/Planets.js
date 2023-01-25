import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/Context"
import { Cards } from "../components/Cards";
import "bootstrap/dist/css/bootstrap.min.css"

export function Planets() {

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets()
  }, [])

  return (<div className="container">
      <div className="row">
      {store.planets.map((planets, index) => {
        return <Cards titulo={planets.name} id={planets.uid} ruta={"/planeta/" + planets.uid} />
      }
      )}
    </div>


  </div>)
}
;

export default Planets
