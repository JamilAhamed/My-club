import React from 'react';
import './ClubMembers.css'

const ClubMembers = (props) => {
    const club = props.club;
    console.log(club);

  let totalSalary = 0;
  for (let i = 0; i< club.length; i++) {
      const element = club[i];
      console.log(element.Salary);
      totalSalary= element.Salary + totalSalary;
}      
    return (
        <div className="club-container">
            <h6 className="header">Player who Added to Team </h6>
            <h3>Total Selected Player: {club.length}</h3>
            <ol>
            {
                club.map(player => <li>{player.Name} {player.Salary}</li>)
            }
            </ol>
            <h4> Grand Total Salary:{totalSalary}</h4>
        </div>
    );
};

export default ClubMembers;