import React from "react";
import Bell from "../../Static/Bell.png"
import School from "../../Static/School.png"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import vector3 from "../../Static/Vector3.png"
import vector2 from "../../Static/Vector2.png"
import vector1 from "../../Static/Vector1.png"
import vector from "../../Static/Vector.png"

import User from "../../Static/User.png"
import Flag from "../../Static/VietNamflag.png"
import Logout from "../LogoutModal";
import Cancel from "../CacelModal";
import Delete from "../Deletetoken";
import { useEffect, useState } from 'react'
import Cancelmodalfield from "../Cancelmodalfield";
import { instance } from "../../untils/api";
import Createmodalfield from "../CreateModalnganhnghe";
import Danhmuc from "../Danhmuc";





const Sidebar = () => {
    const Onmodaldanhmuc = () => {

    }









    return (
        <>
            <div className="flex flex-col space-y-8 items-center w-[13%]">
                <div className="h-20 justify-center items-center w-20">
                    <img src={School} width="5%" height="5%" className='absolute top-[3%] left-[3%] ' />
                </div>
                {/* <button className=" flex font-Roboto text-md text-[#42526E]  hover:underline space-x-4"><img src={vector3}/>Quản trị thành viên</button>
            <button>Danh mục</button>
            <button>Đồ án</button>
            <button>Tổ chức</button> */}

                <ul className="flex-flex-col list-none items-center justify-between space-y-4 pt-10">
                    <li >
                        <Link to="/mainlayout/quantrithanhvien" className="flex font-Roboto text-md text-[#42526E]  hover:underline space-x-4 space-y-8">
                            <img src={vector3} width="20px" height="20px" />
                            Quản trị thành viên</Link>
                    </li>


                    <li>
                        {/* <Link to="/mainlayout/danhmuc" className="flex font-Roboto text-md text-[#42526E]  hover:underline space-x-4 space-y-8"><img src={vector1} width="20px" height="20px" />Danh mục</Link> */}
                        <button
                            className="flex font-Roboto text-md text-[#42526E]  hover:underline space-x-4 space-y-8"
                            onClick={() => {
                                document.getElementById("Modal_danhmuc").classList.remove("hidden");
                            }}><img src={vector1} width="20px" height="20px" />Danh mục</button>


                    </li>
                    <li>
                        <Link to="/mainlayout/doan" className="flex font-Roboto text-md text-[#42526E]  hover:underline space-x-4 space-y-8"><img src={vector2} width="20px" height="20px" />Đồ án</Link>
                    </li>
                    <li>
                        <Link to="/mainlayout/tochuc" className="flex font-Roboto text-md text-[#42526E]  hover:underline space-x-4 space-y-8"><img src={vector} width="20px" height="20px" />Tổ chức</Link>
                    </li>


                </ul>
            </div>
            <div>
                <header>
                    <div className="flex">
                        <img src={Flag} width="30px" height="30px" className='absolute top-[25px] right-[150px]' />
                        <img src={Bell} width="30px" height="30px" className='absolute top-[25px] right-[100px]' />
                        <img src={User} width="30px" height="30px" className='absolute top-[25px] right-[50px]' onClick={() => {
                            Logout()
                        }} />
                    </div>
                    {/* logoutmodal */}

                    <div id="create_modal" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto h-full w-full " >
                        <div className="absolute top-20 right-[50px] mx-auto p-5 border w-40 shadow-lg rounded-md bg-white h-20">
                            <div className="flex font-Roboto text-md text-[#42526E]   space-x-4 fixed top-[135px] right-[55px]">
                                <button className="text-large hover:underline fixed right-[135px]" onClick={() => {
                                    Delete()

                                }}>Đăng xuất</button>
                                <button className="bg-red-300 text-white hover:underline text-sm w-5 " onClick={() => {
                                    Cancel()
                                }}>X</button>
                            </div>
                        </div>

                    </div>
                    <div id="Modal_danhmuc" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto  ">
                        <div className=" mx-auto  border w-[5%] shadow-lg rounded-md bg-white h-[8%] justify-center items-center mt-[12%] ml-[2%]">
                            <div className="font-Roboto flex flex-col space-y-0 justify-center items-center ">
                                <div className="flex hover:bg-blue-200 w-full">


                                    <Link to="/mainlayout/danhmuc" onClick={() => {
                                        document.getElementById("Modal_danhmuc").classList.add("hidden")

                                    }}>Ngành nghề</Link>



                                </div>
                                <hr />
                                <div className="flex hover:bg-blue-200 w-full">
                                    <Link to="/mainlayout/Khoa" onClick={() => {
                                        document.getElementById("Modal_danhmuc").classList.add("hidden")

                                    }}>Khóa</Link>

                                </div>
                                <div className="flex hover:bg-blue-200 w-full">
                                <Link to="/mainlayout/Lop" onClick={() => {
                                        document.getElementById("Modal_danhmuc").classList.add("hidden")

                                    }}>Lớp</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* Create_modal */}
                    {/* <div id="create_field" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto h-full w-full">
                        <div className=" mx-auto p-5 border w-[500px] shadow-lg rounded-md bg-white h-[200px] justify-center items-center mt-20">
                            <div className="font-Roboto flex flex-col space-y-4 w-100">
                                <p>Thêm ngành nghề</p>
                                <hr />
                                <div className="flex justify-center space-x-4">
                                    <div className="w-50%">
                                        <p>Mã ngành nghề</p>
                                        <input
                                            placeholder='Nhập mã'
                                            className='rounded-md border w-full'
                                            onChange={(e) => {
                                                setCode(e.target.value)
                                            }}></input>
                                    </div>
                                    <div className="w-50%">
                                        <p> Ngành nghề</p>
                                        <input
                                            placeholder='Nhập ngành nghề'
                                            className='rounded-md border w-full'
                                            onChange={(ev) => {
                                                setName(ev.target.value)
                                            }}></input>
                                    </div>
                                </div>
                                <div className="Flex ">
                                    <button className=" hover:underline text-sm w-5 border rounded-md  absolute right-[820px] top-[250px] w-[80px]" onClick={() => {
                                        Cancelmodalfield()
                                    }}>Hủy</button>
                                    <button className=" bg-blue-500 text-white hover:underline text-sm w-5 border rounded-md w-[80px] absolute right-[730px] top-[250px]" onClick={() => {
                                        CallAPICreate()
                                    }}>Thêm</button>


                                </div>


                            </div>

                        </div>


                    </div> */}





                </header>

            </div>
        </>

    )
}
export default Sidebar