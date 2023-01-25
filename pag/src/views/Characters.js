import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/Context"
import { Cards } from "../components/Cards";
import "bootstrap/dist/css/bootstrap.min.css"

export function Characters() {

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters()
  }, [])

  return (<div className="container">
    <div className="row">
      {store.characters.map((elm, index) => {
        return <Cards titulo={elm.name} id={elm.uid} ruta={"/personaje/" + elm.uid} />
      }
      )}
    </div>
  </div>)
}
;

export default Characters
