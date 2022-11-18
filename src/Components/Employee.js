import React from "react";
import femaleProfile from "../Data/image/femaleProfile.jpg"
import maleProfile from "../Data/image/maleProfile.jpg"
import "../App.css"

const Employee = props => {
    return(
        <div className="Container">
            <div className="row justify-content-center mt-3 md-3">
                <div className="col-6">
                    <div>
                        <select className="form-select form-select-lg" value={props.selectedTeam} onChange={props.handleSelectedTeamChange}>
                            <option value="TeamA">Team A</option>
                            <option value="TeamB">Team B</option>
                            <option value="TeamC">Team C</option>
                            <option value="TeamD">Team D</option>
                        </select>
                    </div>
                    <div className="collection">
                        {
                            props.employees.map((employee) => (
                                    <div id={employee.id} 
                                        className={(employee.teamName === props.selectedTeam) ? "card m-2 standout" : "card m-2"} 
                                        style={{cursor: "pointer"}} 
                                        onClick = {props.handleEmployeeClick}>
                                        {
                                            (employee.gender === "male") ? 
                                                <img src={maleProfile} className="card-img-top"/> : 
                                                <img src={femaleProfile} className="card-img-top"/>
                                        }
                                        <div className="card-body">
                                            <h5 className="card-title">Name: {employee.fullName}</h5>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee