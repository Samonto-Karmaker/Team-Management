import React from "react";
import Employee from "./Employee";
import GroupedTeamMembers from "./GroupedTeamMembers";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";

const BodyComponent = props => {
    return(
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Employee 
                            employees = {props.employees}
                            selectedTeam = {props.selectedTeam}
                            handleSelectedTeamChange = {props.handleSelectedTeamChange}
                            handleEmployeeClick = {props.handleEmployeeClick}
                        />
                    }
                ></Route>
                <Route
                    path="/GroupedTeamMembers"
                    element={
                        <GroupedTeamMembers />
                    }
                ></Route>
                <Route
                    path="*"
                    element={
                        <NotFound />
                    }
                ></Route>
            </Routes>
        </div>
    )
}

export default BodyComponent