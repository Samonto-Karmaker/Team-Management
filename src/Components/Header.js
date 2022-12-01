import React from "react";
import "../App.css"

const Header = props => {
    return(
        <div className="Container">
            <div className="row justify-content-center mt-3 md-3">
                <div className="col-6">
                    <h1>Team Information:</h1>
                    <h3>{props.selectedTeam} has {props.memberCount} members</h3>
                </div>
            </div>
        </div>
    )
}

export default Header