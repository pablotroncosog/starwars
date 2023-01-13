import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Baby from "../Img/Baby.jpg"


export function SingleCharacter() {

    const { id } = useParams();
    const [Character, SetCharacter] = useState({})

    useEffect(() => {
        getCharacterById(id)
    }, [])

    function getCharacterById(id) {
        fetch("https://swapi.tech/api/people/" + id)
            .then((response) => response.json())
            .then((data) => SetCharacter(data.result))
            .catch((error) => console.log(error));
    }

    return <div className="col-12">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img  class="img-fluid rounded-start" src= {Baby}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {Character.properties?.name}</h5>
                        <p className="card-text">{Character.description}</p>
                        <p className="card-text"><small className="text-muted"> {Character.properties?.birth_year}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

};

export default SingleCharacter