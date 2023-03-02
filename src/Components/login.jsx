
import img1 from '../Static/img1.png';
import img2 from '../Static/img2.png';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../Layout/layoutthongtintochuc';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(status){
  //     navigate("/mainlayout")
  //   }
  // }, [])

  const loginhandle = () => {
    console.log(username)
    console.log(password)
    console.log(token)
    axios({
      url: "https://training.bks.center/api/auth/login",
      method: "POST",
      params: {
        username: username,
        password: password,
      }
    }).then(response => {
      console.log(response.data)
      console.log(response.data.status)

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('status', response.data.status)
      if (localStorage.getItem('token')) {
        window.location.href = "/mainlayout"
      }
      else {
        window.location.href = "/"
      }
    }

    )
  }
  useEffect(() => {
    if (token) {
      navigate("/mainlayout")
    }
  }, [])
  console.log(token)


  return (
    <div className='flex px-20 py-10'>
      <header>
        <p className='text-xl text-[#172B4D] text-bold font-bold'> Quản lý đồ án</p>

      </header>
      <div className='flex-flex-col  pt-[200px] space-y-4  pl-[200px] w-[500px]'>
        <p className='text-3xl text-blue-600 text-bold font-bold '> Đăng nhập</p>
        <p > Tài khoản</p>
        <p>{localStorage.getItem('token')}</p>
        <div>
          <input
            placeholder='Tài khoản'
            className='rounded-md border w-full'
            onChange={(e) => {
              setUsername(e.target.value)
            }}></input>
        </div>
        <p > Mật khẩu</p>
        <div>
          <input
            type="password"
            placeholder='Mật khẩu'
            className='rounded-md border w-full'
            onChange={(event) => {
              setPassword(event.target.value)
            }}></input>

        </div>
        <button
          type='button'
          className='bg-blue-500 w-full border rounded-md text-white  text-bold h-10'
          onClick={() => {
            loginhandle()
          }}> Đăng nhập</button>


      </div>
      <div >
        <img src={img1} width="650px" height="50px" className='fixed top-0 right-0' />
        <img src={img2} width="800px" height="500px" className='fixed bottom-0 right-10' />
      </div>

    </div>

  )
}
export default Login;
