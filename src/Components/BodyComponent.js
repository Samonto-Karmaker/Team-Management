import React from "react";
import Employee from "./Employee";

const BodyComponent = props => {
    return(
        <div>
            <Employee 
                employees = {props.employees}
                selectedTeam = {props.selectedTeam}
                handleSelectedTeamChange = {props.handleSelectedTeamChange}
                handleEmployeeClick = {props.handleEmployeeClick}
            />
        </div>
    )
}

export default BodyComponent