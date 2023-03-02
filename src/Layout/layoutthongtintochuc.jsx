import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import Navbar from "../Components/Layout/Navbar";
import Sidebar from "../Components/Layout/Sidebar";
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Tochuc from "../../src/Components/Tochuc"



const MainLayout = () => {
    
      const token = localStorage.getItem("token")
      const status = localStorage.getItem("status")
     const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate("/");
      }
      // if (token==null) {
      //   navigate("/");
      // }
    }, []);
  return (
    <>
    
      <div className='flex w-full border h-screen'>
        <Sidebar />
        <div className='w-[100%] border space-y-4 pt-5 pl-5'>
          <Navbar />
          <hr />
         <Outlet />
         
        </div>
      </div>
     
     {/* <BrowserRouter>
      <Routes>
      
      <Route className='flex w-full border h-screen'  element={<Sidebar />} >
       
        <Route  className='w-[100%] border' element={<Navbar />}>
          
          <Route path="/tochuc" element={<Tochuc /> }>
            
          </Route>
        
        </Route>
      </Route>

      

      </Routes>
    </BrowserRouter> */}
    </>
    
  
  )  
  };
  
  export default MainLayout
  // const checktoken =()=>{
  //   if (!token) {
  //     navigate("/");
  //   }
  //   if (token==null) {
  //     navigate("/");
  //   }
  

  // }
  