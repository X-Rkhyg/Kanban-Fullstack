import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/TaskList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddTask/>}/>
        <Route path="edit/:id" element={<EditTask/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
