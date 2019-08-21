import React from 'react';
import {useState} from 'react'
import './App.css';
import Teammember from './components/Teammember'
import TeamBuilderForm from './components/TeamBuilderForm'

function App() {
  const [members, setMembers] = useState([]);
  const addMember = member => {
    setMembers([...members, member])
  }
  return (
    <div className="App">
      <h1>Football Team Builder</h1>
      <TeamBuilderForm addMember={addMember}/>
      <Teammember key={members.id} members={members}/>
    </div>
  );
}

export default App;
