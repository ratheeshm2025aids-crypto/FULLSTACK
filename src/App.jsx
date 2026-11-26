import Login from './pages/login'
import Projects from './pages/projects'
import Task from './pages/task'


import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from './pages/team';
import Clients from './pages/clients';
import Dashboard from './pages/dashboard';
import Calender from './pages/calender';
import Settings from './pages/settings';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/clients" element={<Clients/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/calender" element={<Calender/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App