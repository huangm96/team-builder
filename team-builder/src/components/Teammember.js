import React from "react";
import { useState } from "react";

const Teammember = props => {
  console.log(props);
  
    const editMemberInfo = (member) => {
        
        props.memberToEdit(member);
        
    };

    const removeMember = (id) => {
       props.removeButton(id);
    }
    
    return (
    <div className="Teammember">
      {props.members.map(member => {
          return (
            <div className="memberCard" key={member.id}>
              <img src={member.picture} alt={member.name} />
              <h3 className="name">{member.name}</h3>
              <p>Position: {member.position}</p>
                  <button className="edit" onClick={editMemberInfo.bind(this, member)}>
                Edit
              </button>
              <button
                className="remove"
                onClick={removeMember.bind(this, member.id)}
              >
                Remove
              </button>
            </div>
          );
              })}
    </div>
  );
};

export default Teammember;
