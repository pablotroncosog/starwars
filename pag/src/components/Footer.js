import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"


export function Footer() {

    return <div className="container-fluid">
        <div className="row mt-4 p-5">
            <div className="col-xs-12 col-md-6 col-lg-3 bg-dark text-light">
                <ul className="list-group list-group-flush">
                    <li>   <p className="h4 text-danger">   Sobre nosotros  </p>
                    </li>
                </ul>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3 bg-dark text-light">
                <ul className="list-group list-group-flush">
                    <li>
                        <p className="h4 text-danger">  Política y condiciones de uso  </p>
                    </li>
                </ul>

            </div>
            <div className="col-xs-12 col-md-6 col-lg-3 bg-dark text-light">
                <ul className="list-group list-group-flush">
                    <li>
                        <p className="h4 text-danger"> Déjanos tu opinión  </p>
                    </li>
                </ul>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3 bg-dark text-light">
                <ul className="list-group list-group-flush">
                    <li>
                        <p className="h4 text-danger">  Contáctanos  </p>
                    </li>
                </ul>
            </div>
            <div className="col-12 text-light text-center mt-5">Copyright - All Rights Reserved 2022 </div>
        </div>
    </div>



};

export default Footer;