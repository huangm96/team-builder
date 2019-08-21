import React from "react";
import { useState} from 'react'


const TeamBuilderForm = props => {
    console.log(props);
    const [form, setForm] = useState({ name: '', picture: '', position: '' });
    
    const changeHandler = event => {
       setForm({ ...form, [event.target.name]: event.target.value });  
         
     }
    const submitForm = event => {
        event.preventDefault();
        const newForm = {
            ...form,
            id:Math.floor(Math.random(100)*1000000)
        }
        console.log(newForm);
        props.addMember(newForm);
        setForm({ name: "", picture: "", position: "" });
    }
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">name : </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFor="picture">picture : </label>
        <input
          type="text"
          name="picture"
          placeholder="picture url"
          value={form.picture}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFor="position">position : </label>
        <input
          type="text"
          name="position"
          placeholder="position"
          value={form.position}
          onChange={changeHandler}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
}

export default TeamBuilderForm;
