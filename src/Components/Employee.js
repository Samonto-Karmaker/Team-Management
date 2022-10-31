import React from "react";
import { useState } from "react";
import employee_data from "../Data/employeeData";
import femaleProfile from "../Data/image/femaleProfile.jpg"
import maleProfile from "../Data/image/maleProfile.jpg"
import "../App.css"

const Employee = () => {

    const [employees, setEmployees] = useState(employee_data)

    return(
        <div className="Container">
            <div className="row justify-content-center mt-3 md-3">
                <div className="col-4">
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