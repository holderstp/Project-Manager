import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../untils/api";

import Cancelmodalfield from "./Cancelmodalfield";
import banhrang from "../Static/banhrang.png";
import hatnhan from "../Static/hatnhan.png"


const Danhmuc = () => {
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
            url: "https://training.bks.center/api/field",
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
            url: "https://training.bks.center/api/field",
            method: "POST",
            params: {
                code: Code,
                name: Name,
            }

        }).then(response => {
            console.log(response)
            // setData(response.data)
            getData()

            if (Code || Name) {
                // Cancelmodalfield()
            }
            else {
                // Createmodalfield()
            }

        })
    }
    const onModalsuaxoa = () => {

        document.getElementById("view_sua_xoa").classList.remove("hidden");

    }
    const viewupdtateField = () => {

        instance({
            url: "https://training.bks.center/api/field",
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
            url: "https://training.bks.center/api/field/" + ID,
            method: "PUT",
            params: {
                id: ID,
                code: viewCode,
                name: viewname
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
            url: "https://training.bks.center/api/field/" + ID,
            method: "DELETE",
            params: {
                id: ID,
                code: viewCode,
                name: viewname
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
                    <p className="text-xl">Ng??nh ngh???</p>
                    <button className="text-xl absolute right-[50px] border rounded-md bg-blue-500 text-white h-10 w-[200px]" onClick={() => {
                        // Createmodalfield()

                    }}>Th??m ng??nh ngh???</button>


                </div>

                <table className="w-full">
                    <tr className='border'>
                        <th className='border'>Index</th>
                        <th className='border w-10 pl-2'> <img src={hatnhan} /></th>
                        <th className='border'>M?? nga??nh ngh????</th>
                        <th className='border'>T??n nga??nh ngh????</th>
                        <th className='border'>ID</th>
                    </tr>

                    {paginateData.map((item, index) => {
                        console.log(item)
                        console.log(index)
                        // GetID(item.id)
                        return (

                            <tr className='border'>
                                <td className='border'>{((currentPage - 1) * pageSize) + (index + 1)}</td>
                                <td className='border'>
                                    <img src={banhrang} onClick={() => {
                                        onModalsuaxoa()
                                        GetID(item.id)
                                        setViewCode(item.code)
                                        setViewName(item.name)
                                        // console.log(GetID)

                                    }} />

                                </td>
                                <td className='border'>{item.code}</td>
                                <td className='border'>{item.name}</td>
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
                        Tr?????c
                    </button>
                    {[...Array(totalPage)].map((item, index) => (
                        <button
                            className="p-2 border"
                            onClick={() => {
                                setCurrentPage(index + 1);
                            }}
                            style={{
                                backgroundColor: currentPage === index + 1 && "green",
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
                        <p>Th??m ng??nh ngh???</p>
                        <hr />
                        <div className="flex justify-center space-x-4">
                            <div className="w-50%">
                                <p>M?? ng??nh ngh???</p>
                                <input
                                    placeholder='Nh???p m??'
                                    className='rounded-md border w-full'
                                    onChange={(e) => {
                                        setCode(e.target.value)
                                    }}></input>
                            </div>
                            <div className="w-50%">
                                <p> Ng??nh ngh???</p>
                                <input
                                    placeholder='Nh???p ng??nh ngh???'
                                    className='rounded-md border w-full'
                                    onChange={(ev) => {
                                        setName(ev.target.value)
                                    }}></input>
                            </div>
                        </div>
                        <div className="Flex ">
                            <button className=" hover:underline text-sm w-5 border rounded-md  absolute right-[820px] top-[250px] w-[80px]" onClick={() => {
                                Cancelmodalfield()
                            }}>H???y</button>
                            <button className=" bg-blue-500 text-white hover:underline text-sm w-5 border rounded-md w-[80px] absolute right-[730px] top-[250px]" onClick={() => {
                                CallAPICreate()
                            }}>Th??m</button>


                        </div>


                    </div>

                </div>


            </div>
            <div id="view_sua_xoa" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto  ">
                <div className=" mx-auto  border w-[50px] shadow-lg rounded-md bg-white h-[60px] justify-center items-center mt-[185px] ml-[360px]">
                    <div className="font-Roboto flex flex-col space-y-0 justify-center items-center ">
                        <div className="flex hover:bg-blue-200 w-full"> <button onClick={() => {
                            viewupdtateField()

                        }}> S???a</button></div>
                        <hr />
                        <div className="flex hover:bg-red-200 w-full"><button onClick={() => {
                            xoafield()
                        }}> X??a</button>
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
                                <p>M?? ng??nh ngh???</p>
                                <input
                                    placeholder={viewCode}
                                    className='rounded-md border w-full'
                                    onChange={(a) => {
                                        setViewCode(a.target.value)
                                    }}></input>
                            </div>
                            <div className="w-50%">
                                <p> Ng??nh ngh???</p>
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



export default Danhmuc
