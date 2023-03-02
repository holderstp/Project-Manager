import React from "react";
import { data } from "autoprefixer";

import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../untils/api";
import Createmodalfield from "./CreateModalnganhnghe";
import Cancelmodalfield from "./Cancelmodalfield";
import banhrang from "../Static/banhrang.png";
import hatnhan from "../Static/hatnhan.png"


const Khoa = () => {
    const [Data, setData] = useState([]);
    const [Code, setCode] = useState("");
    const [Name, setName] = useState("");
    const [ID, GetID] = useState(0);
    const [viewCode, setViewCode] = useState("");
    const [viewname, setViewName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setpageSize] = useState(10);
    const [totalPage, setTotalpage] = useState(0);
    const [paginateData, setpaginateData] = useState([])



    const getData = () => {
        console.log("noidung")
        // console.log(ID)
        instance({
            url: "https://training.bks.center/api/course",
            method: "GET"

        }).then(response => {
            console.log(response)
            setData(response.data)
        })
    }
    useEffect(() => {
        const counttotalpage = Math.ceil(Data.length / pageSize);//tinh so trang
        setTotalpage(counttotalpage)
        const start = (currentPage - 1) * pageSize
        const end = (currentPage * pageSize)
        const result = Data.slice(start, end);
        setpaginateData(result)

    }, [Data, currentPage])

    useEffect(() => {
        getData()
    }, [])

    const CallAPICreate = () => {
       

        instance({
            url: "https://training.bks.center/api/course",
            method: "POST",
            params: {
                name: Code,
                year: Name,
            }

        }).then(response => {
            console.log(response)
            // setData(response.data)
            getData()

            if (Code || Name) {
                Cancelmodalfield()
            }
            else {
                Createmodalfield()
            }

        })
    }
    const onModalsuaxoa = () => {

        document.getElementById("view_sua_xoa").classList.remove("hidden");

    }
    const viewupdtateField = () => {

        instance({
            url: "https://training.bks.center/api/course",
            method: "GET",
            params: {
                id: ID
            }

        }).then(response => {
            console.log(response)
            // setViewCode(response.data.code)
            // setViewName(response.data.name)



        })


        document.getElementById("update_field").classList.remove("hidden");
        document.getElementById("view_sua_xoa").classList.add("hidden");


    }
    const updateField = () => {
        console.log(viewCode)
        console.log(viewname)

        instance({
            url: "https://training.bks.center/api/course/" + ID,
            method: "PUT",
            params: {
                id: ID,
                name: viewCode,
                year: viewname
            }

        }).then(response => {
            console.log(response)
            getData()

        })


        document.getElementById("update_field").classList.add("hidden");


    }
    const xoafield = () => {
        console.log(viewCode)
        console.log(viewname)

        instance({
            url: "https://training.bks.center/api/course/" + ID,
            method: "DELETE",
            params: {
                id: ID,
                name: viewCode,
                year: viewname
            }

        }).then(response => {
            console.log(response)
            getData()

        })


        document.getElementById("view_sua_xoa").classList.add("hidden");


    }





    return (
        <>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                    <p className="text-xl">Khóa</p>
                    <button className="text-xl absolute right-[50px] border rounded-md bg-blue-500 text-white h-10 w-[200px]" onClick={() => {
                        Createmodalfield()

                    }}>Thêm khóa</button>


                </div>

                <table className="w-full">
                    <tr className='border'>
                        <th className='border'>STT</th>
                        <th className='border w-10 pl-2'> <img src={hatnhan} /></th>
                        <th className='border'>Tên khóa</th>
                        <th className='border'>Năm bắt đầu</th>
                        <th className='border'>ID</th>
                    </tr>

                    {paginateData.map((item, index) => {
                        console.log(item)
                        console.log(index)
                        // GetID(item.id)
                        return (

                            <tr className='border'>
                                <td className='border'>{((currentPage-1)*pageSize)+(index+1)}</td>
                                <td className='border'>
                                    <img src={banhrang} onClick={() => {
                                        onModalsuaxoa()
                                        GetID(item.id)
                                        setViewCode(item.name)
                                        setViewName(item.year)
                                        // console.log(GetID)

                                    }} />

                                </td>
                                <td className='border'>{item.name}</td>
                                <td className='border'>{item.year}</td>
                                <td className='border'>{item.id}</td>
                            </tr>

                        )


                    })}

                </table>
                <div className="flex">
                <button
                    className="p-2 border"
                    onClick={() => {
                        setCurrentPage(currentPage - 1);
                    }}
                >
                    Trước
                </button>
                {[...Array(totalPage)].map((item, index) => (
                    <button
                        className="p-2 border"
                        onClick={() => {
                            setCurrentPage(index + 1);
                        }}
                        style={{
                            backgroundColor: currentPage === index + 1 && "yellow",
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="p-2 border"
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                >
                    Sau
                </button>
                </div>


            </div>
            {/* Create_modal_field */}
            <div id="create_field" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto h-full w-full">
                <div className=" mx-auto p-5 border w-[500px] shadow-lg rounded-md bg-white h-[200px] justify-center items-center mt-20">
                    <div className="font-Roboto flex flex-col space-y-4 w-100">
                        <p>Thêm khóa</p>
                        <hr />
                        <div className="flex justify-center space-x-4">
                            <div className="w-50%">
                                <p>Tên khóa</p>
                                <input
                                    placeholder='Nhập tên khóa'
                                    className='rounded-md border w-full'
                                    onChange={(e) => {
                                        setCode(e.target.value)
                                    }}></input>
                            </div>
                            <div className="w-50%">
                                <p> Năm bắt đầu</p>
                                <input
                                    placeholder='Chọn thời gian'
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


            </div>
            <div id="view_sua_xoa" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto  ">
                <div className=" mx-auto  border w-[50px] shadow-lg rounded-md bg-white h-[60px] justify-center items-center mt-[185px] ml-[360px]">
                    <div className="font-Roboto flex flex-col space-y-0 justify-center items-center ">
                        <div className="flex hover:bg-blue-200 w-full"> <button onClick={() => {
                            viewupdtateField()

                        }}> Sửa</button></div>
                        <hr />
                        <div className="flex hover:bg-red-200 w-full"><button onClick={() => {
                            xoafield()
                        }}> Xóa</button>
                        </div>
                    </div>

                </div>

            </div>
            <div id="update_field" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto h-full w-full">
                <div className=" mx-auto p-5 border w-[500px] shadow-lg rounded-md bg-white h-[200px] justify-center items-center mt-20">
                    <div className="font-Roboto flex flex-col space-y-4 w-100">
                        <p>ID:{ID}</p>
                        <hr />
                        <div className="flex justify-center space-x-4">
                            <div className="w-50%">
                                <p>Tên khóa</p>
                                <input
                                    placeholder={viewCode}
                                    className='rounded-md border w-full'
                                    onChange={(a) => {
                                        setViewCode(a.target.value)
                                    }}></input>
                            </div>
                            <div className="w-50%">
                                <p> Năm bắt đầu</p>
                                <input
                                    placeholder={viewname}
                                    className='rounded-md border w-full'
                                    onChange={(av) => {
                                        setViewName(av.target.value)
                                    }}></input>
                            </div>
                        </div>
                        <div className="Flex ">
                            <button className=" bg-blue-500 text-white hover:underline text-sm w-5 border rounded-md w-[80px] absolute right-[730px] top-[250px]" onClick={() => {
                                updateField()

                            }}>Update</button>


                        </div>


                    </div>

                </div>


            </div>




        </>

    )

}



export default Khoa