import React from "react";
import BodyComponent from "./Components/BodyComponent";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState } from "react";
import employee_data from "../src/Data/employeeData";

const MainComponent = () => {

    const [selectedTeam, setTeam] = useState("TeamA")
    const [employees, setEmployees] = useState(employee_data)

    const handleSelectedTeamChange = event => {
        setTeam(event.target.value)
    }

    const handleEmployeeClick = event => {
        const mEmployeeList = employees.map(
            employee => {
                if(employee.id === parseInt(event.currentTarget.id)){
                    if(employee.teamName != selectedTeam){
                        return{
                            ...employee,
                            teamName: selectedTeam
                        }
                    }
                    else{
                        return{
                            ...employee,
                            teamName: ""
                        }
                    }
                }
                return employee
            }
        )
        setEmployees(mEmployeeList)
    }

    return(
        <div>
            <Header 
                selectedTeam = {selectedTeam}
                memberCount = {employees.filter(employee => employee.teamName === selectedTeam).length}
            />
            <BodyComponent 
                employees = {employees}
                selectedTeam = {selectedTeam}
                handleSelectedTeamChange = {handleSelectedTeamChange}
                handleEmployeeClick = {handleEmployeeClick}
            />
            <Footer />
        </div>
    )
}

export default MainComponent