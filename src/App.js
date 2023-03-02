import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/login';
import MainLayout from './Layout/layoutthongtintochuc';
import Navbar from './Components/Layout/Navbar';
import Sidebar from './Components/Layout/Sidebar';
import Tochuc from './Components/Tochuc';
import Danhmuc from './Components/Danhmuc';
import Quantri from './Components/Quantrithanhvien';
import Doan from './Components/Doan';
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import checktoken from './Components/NavigateAll';
import Khoa from './Components/Khoa';
import Lop from './Components/Lop';
import { Updatemodal } from './Components/Upatemodal';



function App() {
  return (

    <checktoken>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/mainlayout" element={<MainLayout />}>
          <Route path="/mainlayout/tochuc" element={<Tochuc />} ></Route>
          <Route path="/mainlayout/quantrithanhvien" element={<Quantri />} ></Route>
          <Route path="/mainlayout/danhmuc" element={<Danhmuc />} ></Route>
          <Route path="/mainlayout/Khoa" element={<Khoa />} ></Route>
          <Route path='/mainlayout/Lop' element={<Lop />}></Route>
          <Route path="/mainlayout/doan" element={<Doan />} ></Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </checktoken>
    

  )
}


export default App;
