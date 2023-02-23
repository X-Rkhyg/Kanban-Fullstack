import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const [judul, setJudul] = useState("");
    const [desk, setDesk] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                judul,
                desk,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

  return (
<div className = "oke">
    <div className = "oke-container">
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label text-white">Hari</label>
                    <div className="control">
                        <input 
                        type="text"
                        className="input" 
                        value={judul} 
                        onChange={(e) => setJudul(e.target.value)}
                        placeholder='Senin'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label text-white">Deskripsi</label>
                    <div className="control">
                        <input
                        type="text"
                        className="input" 
                        value={desk} 
                        onChange={(e) => setDesk(e.target.value)} 
                        placeholder='Membuat Project Reacjs'/>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='btn btn-primary mt-2'>Save</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    <footer className="futer">
            <p className = "text-white text-center">© Rkhyg x Nashril. All rigths reversed</p>
        </footer>
</div>
  )
}

export default AddTask;