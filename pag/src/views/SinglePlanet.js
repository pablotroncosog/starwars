import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Espacio from "../Img/Espacio.jpg"
/* import { useParams } from "react-router-dom"; 
 */
export function SinglePlanet() {

  const { id } = useParams();
  const [Planet, SetPlanet] = useState({})


  useEffect(() => {
    getPlanetsById(id)
  }, [])

  function getPlanetsById(id) {
    fetch('https://swapi.tech/api/planets/' + id)
      .then((Response) => Response.json())
      .then((data) => SetPlanet(data.result))
      .catch((error) => console.log(error));
  }
  return <div className="col-12">
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src= {Espacio}  class="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"> {Planet?.properties?.name}</h5>
            <p className="card-text"> Su población es de {Planet?.properties?.population} habitantes</p>
          </div>
        </div>
      </div>
    </div>
  </div>

};

export default SinglePlanet