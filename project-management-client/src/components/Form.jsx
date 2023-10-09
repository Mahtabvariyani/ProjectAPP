import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {title,description};
    axios
      .post(`${API_URL}/api/projects`, requestBody)
      .then((response) => {
        setTitle("");
        setDescription("");
        props.refreshProjects();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h3>Add Projects</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
