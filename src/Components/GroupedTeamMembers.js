import React, {useState} from "react";
import "../App.css"

const GroupedTeamMembers = props => {

    const groupedTeamMembers = () => {
        let teams = []

        let teamAMembers = props.employees.filter(employee =>
            employee.teamName === "TeamA"
        )
        let teamA ={
            team: "TeamA", 
            members: teamAMembers,
            collapsed: props.selectedTeam === "TeamA" ? false : true
        }
        teams.push(teamA)

        let teamBMembers = props.employees.filter(employee =>
            employee.teamName === "TeamB"
        )
        let teamB ={
            team: "TeamB", 
            members: teamBMembers,
            collapsed: props.selectedTeam === "TeamB" ? false : true
        }
        teams.push(teamB)

        let teamCMembers = props.employees.filter(employee =>
            employee.teamName === "TeamC"
        )
        let teamC ={
            team: "TeamC", 
            members: teamCMembers,
            collapsed: props.selectedTeam === "TeamC" ? false : true
        }
        teams.push(teamC)

        let teamDMembers = props.employees.filter(employee =>
            employee.teamName === "TeamD"
        )
        let teamD ={
            team: "TeamD", 
            members: teamDMembers,
            collapsed: props.selectedTeam === "TeamD" ? false : true
        }
        teams.push(teamD)

        return teams
    }

    const [TeamMembers, setTeamMembers] = useState(groupedTeamMembers())

    const handleTeamClick = event =>{
        let newData =TeamMembers.map(data => 
            data.team === event.currentTarget.id ? {...data, collapsed: !data.collapsed} : data
        )
        setTeamMembers(newData)
        props.setTeam(event.target.id)
    }

    return(
        <div className="Container">
            <div className="row justify-content-center mt-3 md-3">
                <div className="col-6">
                    {
                        TeamMembers.map(i => {
                            return(
                                <div key={i.team} className="card mt-2" style={{cursor: "pointer"}}>
                                    <h5 id={i.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                        Team Name: {i.team}
                                    </h5>
                                    <div id={"collapse: " + i.team} 
                                        className={i.collapsed === true ? "collapse" : ""}>
                                        <hr/>
                                        {
                                            i.members.map(member => {
                                                return(
                                                    <div className="mt-2">
                                                        <h6 className="card-title mt-2">
                                                            <span className="text-light">Full Name: {member.fullName}</span>
                                                        </h6>
                                                        <p>Designation: {member.designation}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GroupedTeamMembers