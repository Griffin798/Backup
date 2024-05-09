import React, { useState } from "react";
import axios from "axios";

function CharacterForm() {
  const [formData, setFormData] = useState({
    Charactername: "",
    HouseName: "",
    ActorName: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/characters", formData);
      
      setFormData({
        Charactername: "",
        HouseName: "",
        ActorName: ""
      });
      alert("Character added successfully!");
    } catch (error) {
      console.error("Error adding character:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Character name:
        <input
          type="text"
          name="Charactername"
          value={formData.Charactername}
          onChange={handleChange}
        />
      </label>
      <label>
        House:
        <input
          type="text"
          name="HouseName"
          value={formData.HouseName}
          onChange={handleChange}
        />
      </label>
      <label>
        Actor Name:
        <input
          type="text"
          name="ActorName"
          value={formData.ActorName}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default CharacterForm;
