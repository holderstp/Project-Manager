import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../untils/api";
import Modal from "./modal1";
import Cancelmodalfield from "./Cancelmodalfield";
import banhrang from "../Static/banhrang.png";
import hatnhan from "../Static/hatnhan.png"
import download from '../Static/Download.png'
import upload from '../Static/upload.png'
import avatar from '../Static/avatar.png'
import iconly from '../Static/Iconly.png'
import camera from '../Static/Camera.png'
import { json } from "react-router-dom";
import { data } from "autoprefixer";
import { Updatemodal } from "./Upatemodal";


const Quantri = () => {
    const [Data, setData] = useState([]);
    const [Code, setCode] = useState("");
    const [Name, setName] = useState("");
    const [ID, GetID] = useState(0);
    const [viewCode, setViewCode] = useState("");
    const [viewname, setViewName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setpageSize] = useState(10);
    const [totalPage, setTotalpage] = useState(0);
    const [paginateData, setpaginateData] = useState([]);
    const [totalelement, settotalelement] = useState(0);
    //form create user
    const [taikhoan, settaikhoan] = useState("")
    const [matkhau, setmatkhau] = useState("")
    const [hovaten, sethovaten] = useState("")
    const [ngaysinh, setngaysinh] = useState("")
    const [email, setemail] = useState("")
    const [diachi, setdiachi] = useState("")
    const [noilamviec, setnoilamviec] = useState("")
    const [note, setnote] = useState("")
    const [sodienthoai, setsodienthoai] = useState("")
    const [selectedFile, setSelectedFile] = useState();
    const [hinhthuc, sethinhthuc] = useState(true);

    const getData = () => {

        document.getElementById("themquanly").classList.add("hidden");
        document.getElementById("themgiangvien").classList.add("hidden");
        document.getElementById("themsinhvien").classList.add("hidden");



        console.log(currentPage)
        instance({
            url: "https://training.bks.center/api/admin/user",
            method: "GET",
            params: {
                page_index: currentPage,
                page_size: pageSize,
            }

        }).then(response => {
            console.log(response.headers.totalelement)
            console.log(currentPage)
            setData(response.data)
            settotalelement(response.headers.totalelement)
        })
        const counttotalpage = Math.ceil(totalelement / pageSize);//tinh so trang
        setTotalpage(counttotalpage)
    }


    useEffect(() => {
        getData()
        console.log(Data)
    }, [totalPage, currentPage])

    const CreatNewuser = () => {
        const userql = {
            address: diachi,
            avatar: selectedFile,
            birthday: ngaysinh,
            classId: 2,
            courseId: 4,
            email: email,
            enabled: true,
            fieldId: 0,
            fullName: hovaten,
            gender: 0,
            note: note,
            password: matkhau,
            phone: sodienthoai,
            studentCode: "MHN",
            teacherType: true,
            type: noilamviec,
            username: taikhoan
        }
        const createUserDTO = JSON.stringify(userql);
        instance({
            headers: { 'Content-Type': 'application/json' },
            url: "https://training.bks.center/api/admin/user",
            method: "POST",
            data: createUserDTO,

        }).then(response => {
            getData()

        })
    }
    const CreatNewusergiangvien = () => {
        const usergv = {
            address: diachi,
            avatar: selectedFile,
            birthday: ngaysinh,
            classId: 2,
            courseId: 4,
            email: email,
            enabled: true,
            fieldId: 0,
            fullName: hovaten,
            gender: 0,
            note: note,
            password: matkhau,
            phone: sodienthoai,
            studentCode: "MHN",
            teacherType: hinhthuc,
            type: "TEACHER",
            username: taikhoan
        }
        const createUserDTO = JSON.stringify(usergv);
        instance({
            headers: { 'Content-Type': 'application/json' },
            url: "https://training.bks.center/api/admin/user",
            method: "POST",
            data: createUserDTO,

        }).then(response => {
            getData()

        })
    }
    const CreatNewusersinhvien = () => {
        const usersv = {
            address: diachi,
            avatar: selectedFile,
            birthday: ngaysinh,
            classId: 2,
            courseId: 4,
            email: email,
            enabled: true,
            fieldId: 0,
            fullName: hovaten,
            gender: 0,
            note: note,
            password: matkhau,
            phone: sodienthoai,
            studentCode: "MHN",
            teacherType: hinhthuc,
            type: "STUDENT",
            username: taikhoan
        }
        const createUserDTO = JSON.stringify(usersv);
        instance({
            headers: { 'Content-Type': 'application/json' },
            url: "https://training.bks.center/api/admin/user",
            method: "POST",
            data: createUserDTO,

        }).then(response => {
            getData()

        })
    }

    function uploadimg(event) {
        const file = event.target.files[0];
        file.preview = URL.createObjectURL(file);
        setSelectedFile(file);
        console.log(selectedFile);

    }


    //---------------------------modal update 
    const Abc = ({ item }) => {
        const [open, setopen] = useState(false)

        return (
            <button className=" flex relative " type="button">
                <img src={banhrang} onClick={() => {
                    setopen(!open)
                }}
                />

                {open && (
                    <div className=" inset-0  bg-opacity-5 overflow-y-auto  " >
                        <div className=" mx-auto  border w-[50px] shadow-lg rounded-md bg-white h-[50px] absolute left-[100%] ">
                            <div className="font-Roboto flex flex-col space-y-0 ">
                                <div className="flex hover:bg-blue-200 w-full ">
                                    <Modalsua data={item} />
                                </div>
                                <hr />
                                <div className="flex hover:bg-red-200 w-full">
                                    <button type="button" onClick={() => {
                                    }}> Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </button>
        )
    }

    const Modalsua = ({ data }) => {
        const [drdown, setdrdown] = useState(false);

        return (
            <div>
                <button type="button" onClick={() => {
                    setdrdown(true)

                }}>Sửa</button>
                {drdown && <Updatemodal data={data} Closemodal={setdrdown} />}
            </div>
        )


    }

    const Updatemodal = ({ Closemodal, data }) => {
        const [taikhoan1, settaikhoan1] = useState("")
        const [matkhau1, setmatkhau1] = useState("")
        const [hovaten1, sethovaten1] = useState("")
        const [ngaysinh1, setngaysinh1] = useState("")
        const [email1, setemail1] = useState("")
        const [diachi1, setdiachi1] = useState("")
        const [noilamviec1, setnoilamviec1] = useState("")
        const [note1, setnote1] = useState("")
        const [sodienthoai1, setsodienthoai1] = useState("")
        const [selectedFile1, setSelectedFile1] = useState();
        const [hinhthuc1, sethinhthuc1] = useState(true);
        const [ID1, GetID1] = useState(0);


        const UpdateAPIquanly = () => {
            console.log(data.id)
            GetID1(data.id)
            instance({
                url: "https://training.bks.center/api/admin/user/" + data.id,
                method: "PUT",
                params: {
                    id: ID1,
                    full_name: hovaten1,
                    address: diachi1,
                    avatar: selectedFile,
                    birthday: ngaysinh1,
                    classId: 2,
                    courseId: 4,
                    email: email1,
                    enabled: true,
                    fieldId: 0,
                    gender: 0,
                    note: note1,
                    password: matkhau1,
                    phone: sodienthoai1,
                    studentCode: "MHN",
                    teacherType: true,
                    type: noilamviec1,
                    username: taikhoan1
                }
            }).then(response => {
                getData()
            })
        }
        return (
            <div>
                <div className="inset-0 bg-gray-600 bg-opacity-10 overflow-y-auto fixed">
                    <div className=" mx-auto p-5 border w-[800px] shadow-lg rounded-md bg-white h-[800px] justify-center items-center mt-20">
                        <div className="font-Roboto flex flex-col space-y-4 w-[100%] mx-7">
                            <p>{data.id}</p>
                            <hr />
                            <div className="flex">
                                <div className="w-[50%] h-[20%] flex">
                                    <img src={avatar} className='w-[50%]' />
                                    {selectedFile && (
                                        <img src={selectedFile.preview} className='w-[20%] h-[20%] relative top-[50px] right-[130px]' />
                                    )}
                                    <img src={camera} className='w-[10%] h-[10%] relative top-[120px] right-[25px]' onClick={() => {
                                        document.getElementById("them_xoa_ava").classList.remove("hidden");
                                    }} />
                                    <div className=" border w-[20%] shadow-lg rounded-md bg-white h-[10%] hidden relative top-[150px] right-[30px]" id="them_xoa_ava">
                                        <input
                                            type="file"
                                            onChange={uploadimg}></input>
                                        <p>xóa ảnh</p>
                                    </div>
                                </div>
                                <div className="w-[50%] h-[20%] flex space-y-2 ">
                                    <div className="flex flex-col space-y-2 ">
                                        <p>Tài khoản</p>
                                        <input type='text' className="border rounded-md w-[300px]" defaultValue={data.username} onChange={(e) => {
                                            settaikhoan1(e.target.value)
                                        }}></input>
                                        <p>Mật khẩu</p>
                                        <input type='password' className="border rounded-md" defaultValue={data.password} onChange={(e) => {
                                            setmatkhau1(e.target.value)
                                        }}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col space-y-2 w-[45%]">
                                    <p>Họ và tên</p>
                                    <input type='text' className="border rounded-md " defaultValue={data.fullName} onChange={(e) => {
                                        sethovaten1(e.target.value)
                                    }}></input>
                                    <p>Ngày sinh</p>
                                    <input type='date' className="border rounded-md " defaultValue={data.birthday} onChange={(e) => {
                                        setngaysinh1(e.target.value)
                                    }}></input>
                                    <p>Email</p>
                                    <input type='text' className="border rounded-md " defaultValue={data.email} onChange={(e) => {
                                        setemail1(e.target.value)
                                    }}></input>
                                </div>
                                <div className="flex flex-col space-y-6 w-[50%] pl-10">
                                    <ul className="flex space-x-8 ">
                                        <li>Giới tính</li>
                                        <li>Nam<input type="radio" name="gt" value="nam" /></li>
                                        <li>Nữ<input type="radio" name="gt" value="nam" /></li>
                                        <li>Khác<input type="radio" name="gt" value="nam" /></li>
                                    </ul>
                                    <p>Số điện thoại</p>
                                    <input type='text' className="border rounded-md " defaultValue={data.phone} onChange={(e) => {
                                        setsodienthoai1(e.target.value)
                                    }}></input>

                                </div>
                            </div>
                            <p> Địa chỉ</p>
                            <input type='text' className="border rounded-md w-[90%]" defaultValue={data.address} onChange={(e) => {
                                setdiachi1(e.target.value)
                            }}></input>

                            <p> Học và làm việc tại</p>
                            <input type='text' className="border rounded-md w-[90%] " defaultValue={data.type} onChange={(e) => {
                                setnoilamviec1(e.target.value)
                            }}></input>

                            <div id="2a" className="hidden">
                                <p> Hình thức</p>
                                <select onChange={(e) => {
                                    sethinhthuc1(e.target.value)
                                    console.log(hinhthuc)
                                }}>
                                    <optgroup label="Hình thức">

                                        <option value="true">Cơ Hữu</option>
                                        <option value="false">Thỉnh giảng</option>
                                    </optgroup>
                                </select>
                            </div>
                            <p> Ghi chú</p>
                            <input type='text' className="border rounded-md w-[90%]" defaultValue={data.note} onChange={(e) => {
                                setnote1(e.target.value)
                            }}></input>
                            <div className="Flex space-x-3 ml-[70%] pt-[1%]">
                                <button className=" hover:underline text-sm w-5 border rounded-md w-[80px] " onClick={() => {
                                    Closemodal(false)
                                }}>Hủy</button>
                                <button className=" hover:underline text-sm w-5 border rounded-md w-[80px] bg-blue-500 text-white " onClick={() => {
                                    UpdateAPIquanly()
                                }}>Update</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
    const Themthanhvien = () => {
        const [openmodal, setopen] = useState(false)
        return (
            <div>
                <div>
                    <button className="text-xl absolute right-[110px] top-[-5px] border rounded-md bg-blue-500 text-white h-10 w-[200px] " onClick={() => {
                        setopen(true)
                    }}>Thêm thành viên</button>
                </div>
                {openmodal && <Modal Close={setopen}/>}
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col space-y-4 relative">
                <div className="flex items-center">
                    <p className="text-xl">Thành viên</p>
                    <Themthanhvien />
                    <img src={upload} onClick={() => { }} className="absolute right-[80px]" />
                    <img src={download} onClick={() => { }} className="absolute right-[50px]" />
                </div>
                <table className="w-full">
                    <tr className='border'>
                        <th className='border'>STT</th>
                        <th className='border w-10 pl-2'> <img src={hatnhan} /></th>
                        <th className='border'>Họ và tên</th>
                        <th className='border'>Số điện thoại</th>
                        <th className='border'>Email</th>
                        <th className='border'>Địa chỉ</th>
                        <th className='border'>Giới tính</th>
                        <th className='border'>Ngày sinh</th>
                    </tr>
                    {Data.map((item, index) => {
                        return (

                            <tr className='border '>
                                <td className='border'>{((currentPage - 1) * pageSize) + (index + 1)}</td>
                                <td className='border '>
                                    <Abc item={item} />
                                </td>
                                <td className='border'>{item.fullName}</td>
                                <td className='border'>{item.phone}</td>
                                <td className='border'>{item.email}</td>
                                <td className='border'>{item.address}</td>
                                <td className='border'>{item.gender}</td>
                                <td className='border'>{item.birthday}</td>
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
            <div id="themquanly">
                <div className="Flex ">
                    <button className=" hover:underline text-sm w-5 border rounded-md  absolute right-[920px] top-[250px] w-[80px]" onClick={() => {
                        Cancelmodalfield()
                        document.getElementById("themquanly").classList.add("hidden");
                    }}>Hủy</button>
                    <button type="button" className=" bg-blue-500 text-white hover:underline text-sm w-5 border rounded-md w-[80px] absolute right-[830px] top-[250px]" onClick={() => {

                        document.getElementById("modalquanly").classList.remove("hidden");
                        document.getElementById("themquanly").classList.add("hidden");
                        document.getElementById("1").classList.remove("hidden");
                        document.getElementById("2").classList.add("hidden");
                        document.getElementById("ql").classList.remove("hidden");
                        document.getElementById("gv").classList.add("hidden");
                        document.getElementById("sv").classList.add("hidden");
                        Cancelmodalfield()
                    }}>Tiếp tục</button>
                </div>
            </div>
            <div id="themgiangvien">
                <div className="Flex ">
                    <button className=" hover:underline text-sm w-5 border rounded-md  absolute right-[920px] top-[250px] w-[80px]" onClick={() => {
                        Cancelmodalfield()
                        document.getElementById("themgiangvien").classList.add("hidden");
                    }}>Hủy</button>
                    <button className=" bg-blue-500 text-white hover:underline text-sm w-5 border rounded-md w-[80px] absolute right-[830px] top-[250px]" onClick={() => {
                        Cancelmodalfield()
                        document.getElementById("themgiangvien").classList.add("hidden");
                        document.getElementById("modalquanly").classList.remove("hidden");
                        document.getElementById("1").classList.add("hidden");
                        document.getElementById("2").classList.remove("hidden");
                        document.getElementById("gv").classList.remove("hidden");
                        document.getElementById("ql").classList.add("hidden");
                        document.getElementById("sv").classList.add("hidden");
                    }}>Tiếp tục</button>
                </div>
            </div>
            <div id="themsinhvien">
                <div className="Flex ">
                    <button className=" hover:underline text-sm w-5 border rounded-md  absolute right-[920px] top-[250px] w-[80px]" onClick={() => {
                        Cancelmodalfield()
                        document.getElementById("themsinhvien").classList.add("hidden");
                    }}>Hủy</button>
                    <button className=" bg-blue-500 text-white hover:underline text-sm w-5 border rounded-md w-[80px] absolute right-[830px] top-[250px]" onClick={() => {
                        Cancelmodalfield()
                        document.getElementById("themsinhvien").classList.add("hidden");
                        document.getElementById("modalquanly").classList.remove("hidden");
                        document.getElementById("1").classList.add("hidden");
                        document.getElementById("2").classList.remove("hidden");
                        document.getElementById("sv").classList.remove("hidden");
                        document.getElementById("gv").classList.add("hidden");
                        document.getElementById("ql").classList.add("hidden");
                    }}>Tiếp tục</button>
                </div>
            </div>
            <div id="modalquanly" className="absolute  hidden inset-0 bg-gray-600 bg-opacity-10 overflow-y-auto h-full w-full">
                <div className=" mx-auto p-5 border w-[800px] shadow-lg rounded-md bg-white h-[800px] justify-center items-center mt-20">
                    <div className="font-Roboto flex flex-col space-y-4 w-[100%] mx-7">
                        <p>Thêm quản lý</p>
                        <hr />
                        <div className="flex">
                            <div className="w-[50%] h-[20%] flex">
                                <img src={avatar} className='w-[50%]' />
                                {selectedFile && (
                                    <img src={selectedFile.preview} className='w-[20%] h-[20%] relative top-[50px] right-[130px]' />
                                )}
                                <img src={camera} className='w-[10%] h-[10%] relative top-[120px] right-[25px]' onClick={() => {
                                    document.getElementById("them_xoa_ava1").classList.remove("hidden");
                                }} />
                                <div className=" border w-[20%] shadow-lg rounded-md bg-white h-[10%] hidden relative top-[150px] right-[30px]" id="them_xoa_ava1">
                                    <input
                                        type="file"
                                        onChange={uploadimg}></input>
                                    <p>xóa ảnh</p>
                                </div>
                            </div>
                            <div className="w-[50%] h-[20%] flex space-y-2 ">
                                <div className="flex flex-col space-y-2 ">
                                    <p>Tài khoản</p>
                                    <input type='text' className="border rounded-md w-[300px]" placeholder="Nhập tài khoản" onChange={(e) => {
                                        settaikhoan(e.target.value)
                                    }}></input>
                                    <p>Mật khẩu</p>
                                    <input type='password' className="border rounded-md" placeholder="Nhập mật khẩu" onChange={(e) => {
                                        setmatkhau(e.target.value)
                                    }}></input>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col space-y-2 w-[45%]">
                                <p>Họ và tên</p>
                                <input type='text' className="border rounded-md " placeholder="Nhập họ và tên" onChange={(e) => {
                                    sethovaten(e.target.value)
                                }}></input>
                                <p>Ngày sinh</p>
                                <input type='date' className="border rounded-md " placeholder="Chọn ngày" onChange={(e) => {
                                    setngaysinh(e.target.value)
                                }}></input>
                                <p>Email</p>
                                <input type='text' className="border rounded-md " placeholder="Nhập email" onChange={(e) => {
                                    setemail(e.target.value)
                                }}></input>

                            </div>
                            <div className="flex flex-col space-y-6 w-[50%] pl-10">
                                <ul className="flex space-x-8 ">
                                    <li>Giới tính</li>
                                    <li>Nam<input type="radio" name="gt" value="nam" /></li>
                                    <li>Nữ<input type="radio" name="gt" value="nam" /></li>
                                    <li>Khác<input type="radio" name="gt" value="nam" /></li>
                                </ul>
                                <p>Số điện thoại</p>
                                <input type='text' className="border rounded-md " placeholder="Nhập số điện thoại" onChange={(e) => {
                                    setsodienthoai(e.target.value)
                                }}></input>
                            </div>
                        </div>
                        <p> Địa chỉ</p>
                        <input type='text' className="border rounded-md w-[90%]" placeholder="Nhập địa chỉ" onChange={(e) => {
                            setdiachi(e.target.value)
                        }}></input>
                        <div id="1" className="hidden">
                            <p> Học và làm việc tại</p>
                            <input type='text' className="border rounded-md w-[90%] " placeholder="Nhập thông tin" onChange={(e) => {
                                setnoilamviec(e.target.value)
                            }}></input>
                        </div>
                        <div id="2" className="hidden">
                            <p> Hình thức</p>
                            <select onChange={(e) => {

                                sethinhthuc(e.target.value)
                                console.log(hinhthuc)
                            }}>
                                <optgroup label="Hình thức">

                                    <option value="true">Cơ Hữu</option>
                                    <option value="false">Thỉnh giảng</option>
                                </optgroup>
                            </select>
                        </div>
                        <p> Ghi chú</p>
                        <input type='text' className="border rounded-md w-[90%]" placeholder="Nhập ghi chú" onChange={(e) => {
                            setnote(e.target.value)
                        }}></input>
                        <div className="Flex space-x-3 ml-[70%] pt-[1%]">
                            <button className=" hover:underline text-sm w-5 border rounded-md w-[80px] " onClick={() => {

                                document.getElementById("modalquanly").classList.add("hidden");
                            }}>Hủy</button>
                            <button type="button" id="ql" className=" bg-blue-500 text-white hover:underline text-sm  border rounded-md w-[80px]" onClick={() => {
                                CreatNewuser()

                                document.getElementById("modalquanly").classList.add("hidden");
                            }}>Thêmql</button>
                            <button id="gv" className=" bg-blue-500 text-white hover:underline text-sm  border rounded-md w-[80px] " onClick={() => {
                                CreatNewusergiangvien()

                                document.getElementById("modalquanly").classList.add("hidden");
                            }}>Thêmgv</button>
                            <button id="sv" className=" bg-blue-500 text-white hover:underline text-sm  border rounded-md w-[80px] " onClick={() => {
                                CreatNewusersinhvien()
                                document.getElementById("modalquanly").classList.add("hidden");
                            }}>Thêmsv</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )



}
export default Quantri