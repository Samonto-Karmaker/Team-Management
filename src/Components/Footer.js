import React from "react";

const date = new Date()

const Footer = () => {
    return(
        <div className="Container">
            <div className="row justify-content-center mt-3 md-3">
                <div className="col-6">
                    <h5>Team Management App - {date.getFullYear()}</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer