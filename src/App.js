// import './App.css';
import { Route, Routes } from "react-router-dom";
// import Login from './Component/home';
import Register from './components/weatherpost';
import Main from './components/weatherget';
import UpdateValues from './components/weatherput';
import Login from "./components/home";
import Delete from "./components/weatherdel";
import { Remove } from "@mui/icons-material";
// import { Login } from "@mui/icons-material";
// import Delete from './Component/del';
function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/weatherpost" element={<Register />} />
        <Route path="/weatherget" element={<Main />} />
        <Route path="/weatherput" element={<UpdateValues/>}/> 
        <Route path="/weatherdel" element={<Delete/>}/>
       </Routes> 
    </div>
  );
}

export default App;
