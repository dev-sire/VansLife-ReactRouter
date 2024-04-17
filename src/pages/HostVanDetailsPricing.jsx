import React from "react";
import {useOutletContext} from "react-router-dom"

export default function HostVanDetailsPricing(){
    const {currentVan} = useOutletContext();
    return(
        <h3 className="host-van-price">${currentVan.price}<span>/Day</span></h3>
    )
}