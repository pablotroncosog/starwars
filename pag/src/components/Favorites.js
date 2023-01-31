import React, { useContext } from "react";
import { Context } from "../store/Context"
import { Dropdown } from "react-bootstrap"
import { RiCloseCircleLine } from "react-icons/ri";

const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        store.favorites !== undefined ?
            (
                store.favorites.map((item, index) => {
                    return (
                        <Dropdown.Item href="#/action-1" key={index}>{item}<RiCloseCircleLine className="ml-2 h5" onClick={() => actions.removeFavorite(index)} /></Dropdown.Item>
                    )
                })
            )
            :
            (
                <h4>Loading</h4>
            )
    )
};

export default Favorites;