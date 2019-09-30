import React from 'react';
import {useState} from 'react'
import './App.css';
import data from './data'
import Teammember from './components/Teammember'
import TeamBuilderForm from './components/TeamBuilderForm'

function App() {
  const [members, setMembers] = useState(data);
  
  console.log(data)
  const addMember = member => {
    setMembers([...members, member])
    
  }
  const memberToEdit = (member) => {
    console.log(member)
   }

const removeButton = (id) => {
  let newMemberList = members.filter((member) => {
    return member.id !== id;
  });
  setMembers(newMemberList);
};
  
  return (
    <div className="App">
      <h1>Football Team Builder</h1>
      <TeamBuilderForm
        key={members.id}
        members={members}
        addMember={addMember}
        
      />
      <Teammember
        members={members}
        removeButton={removeButton}
        memberToEdit={memberToEdit}
      />
    </div>
  );
}

export default App;
