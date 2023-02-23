import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  const colors = [
    {
      primaryColor : "#ff0000",
      secondaryColor : "#D3D3D3"
    },
    {
      primaryColor : "#edff00",
      secondaryColor : "#D3D3D3"
    },
    {
        primaryColor : "#00ff0b",
        secondaryColor : "#D3D3D3"
    },
    {
        primaryColor : "#00ECFF",
        secondaryColor : "#D3D3D3"
    },
  ]

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className = "oke">
        <div className = "header text-center">
            <h2 className="text-white judul">KANBAN BOARD</h2>
            <Link to={`add`} className = "btn btn-primary mt-2">Create Task</Link>
        </div>
        <div className = "task-container">
        {users.map((user, index) => (
          <div className = "card-wrapper mr-5" key={user.id}>
          <div className = "card-top" style={{"backgroundColor": colors[index%4].primaryColor}}></div>
          <div className = "task-holder" >
              <span className = "card-header text-black" style={{"backgroundColor": colors[index%4].secondaryColor, "borderRadius": "10px"}}>{user.judul}</span>
              <p className = "mt-3 text-white" style={{"textColor": colors[index%4].primaryColor}}>{user.desk}</p>
              <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                  <Link to={`edit/${user.id}`} className = "far fa-edit mr-3" style={{"color" : colors[index%4].primaryColor, "cursor" : "pointer"}}></Link>
                  <i onClick={() => deleteUser(user.id)} className ="fas fa-trash-alt" style = {{"color" : colors[index%4].primaryColor, "cursor" : "pointer"}}></i>
          </div>
          </div>
          </div>
        ))}
        </div>
        <footer className="futer">
            <p className = "text-white text-center">© Rkhyg x Nashril. All rigths reversed</p>
        </footer>
    </div>
  );
};

export default UserList;
