import React from "react";
import { useState } from "react";
import employee_data from "../Data/employeeData";
import femaleProfile from "../Data/image/femaleProfile.jpg"
import maleProfile from "../Data/image/maleProfile.jpg"
import "../App.css"

const Employee = () => {

    const [selectedTeam, setTeam] = useState("TeamA")
    const [employees, setEmployees] = useState(employee_data)

    const handleSelectedTeamChange = event => {
        setTeam(event.target.value)
    }

    return(
        <div className="Container">
            <div className="row justify-content-center mt-3 md-3">
                <div className="col-6">
                    <div>
                        <select className="form-select form-select-lg" value={selectedTeam} onChange={handleSelectedTeamChange}>
                            <option value="TeamA">Team A</option>
                            <option value="TeamB">Team B</option>
                            <option value="TeamC">Team C</option>
                            <option value="TeamD">Team D</option>
                        </select>
                    </div>
                    <div className="collection">
                        {
                            employees.map((employee) => (
                                    <div id={employee.id} className="card m-2" style={{cursor: "pointer"}}>
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