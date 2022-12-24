import React from "react";
import BodyComponent from "./Components/BodyComponent";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import employee_data from "../src/Data/employeeData";
import { BrowserRouter } from "react-router-dom";

const MainComponent = () => {

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA")
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employee_data")) || employee_data)

    useEffect(() => {
        localStorage.setItem("employee_data", JSON.stringify(employees))
    }, [employees])

    useEffect(() => {
        localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam))
    }, [selectedTeam])

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
        <BrowserRouter>
            <Header 
                selectedTeam = {selectedTeam}
                memberCount = {employees.filter(employee => employee.teamName === selectedTeam).length}
            />
            <BodyComponent 
                employees = {employees}
                selectedTeam = {selectedTeam}
                handleSelectedTeamChange = {handleSelectedTeamChange}
                handleEmployeeClick = {handleEmployeeClick}
                setTeam = {setTeam}
            />
            <Footer />
        </BrowserRouter>
    )
}

export default MainComponent