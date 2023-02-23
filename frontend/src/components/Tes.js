import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTask = () => {
  const [judul, setJudul] = useState("");
  const [desk, setDesk] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        judul,
        desk,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setJudul(response.data.judul);
    setDesk(response.data.desk);
  };

  return (
    
          <form onSubmit={updateUser}>
              <label className="label">Hari</label>
                <input
                  type="text"
                  className="input"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Senin"
                />
              <label className="label">Deskripsi</label>
                <input
                  type="text"
                  className="input"
                  value={desk}
                  onChange={(e) => setDesk(e.target.value)}
                  placeholder="Membuat Project Reactjs"
                />
              <button type="submit" className="button is-success">
                Update
              </button>
          </form>
  );
};

export default EditTask;

