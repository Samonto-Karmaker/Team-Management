import React from "react";
import "../App.css"

const date = new Date()

const Footer = () => {
    return(
        <div className="Container">
            <div className="row justify-content-center mt-3 md-3" style={{"background-color": "rgba(44, 11, 194, 0.6)", "padding" : "10px"}}>
                <div className="col-6">
                    <h5>Team Management App - {date.getFullYear()}</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer