import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="not-found-container">
            <h1>Sorry, the page you were looking for was not Found!</h1>
            <Link to="/" className="link-button">Return To Home</Link>
        </div>
    )
}