import React from "react";

const Teammember = props => {
  console.log(props);
  return (
    <div className="Teammember">
      {props.members.map(member => {
          return (
              <div className="memberCard">
                  <img src={member.picture} alt={member.name}/>
                  <h3>{member.name}</h3>
                  <p>Position: {member.position}</p>
                  
                  </div>
          )
              })}
    </div>
  );
};

export default Teammember;
