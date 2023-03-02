import React from "react";
import img1 from "../Static/School.png"
import camera from "../Static/Camera.png"

const Tochuc = () => {
    return (
        <div className="flex-flex-col w-full space-y-2 h-screen">
            <p >Thông tin tổ chức</p>
            <hr />
            <div className="flex pl-20 space-y-4 space-x-4">
                <div className="flex-col pt-10 space-y-4 w-[40%] ">
                    <div className="flex">
                        <img src={img1} width="120px" height="120px" />
                        <img src={camera} width="30px" height="30px" className="absolute top-[240px] left-[420px]" />
                        <div className="flex-flex-col pl-20">
                            <p className="text-sm text-[#9EA3A9]"> Tên trường</p>

                        </div>
                    </div>
                    <p className=" pt-10"> Thông tin trường</p>
                    
                        <p className="text-[#9EA3A9] text-sm"> Email</p>
                        <p className="text-[#9EA3A9] text-sm"> Số điện thoại</p>
                        <p className="text-[#9EA3A9] text-sm">Địa chỉ</p>

                    



                </div>
                <div className="flex flex-col text-[#9EA3A9] text-sm w-[40%] pt-[275px] space-y-4">
                    <p> Mã số thuế </p>
                    <p> Website </p>

                </div>
                <div className="w-[20%] ">
                    <button className=" border w-[50px] rounded-md text-blue-500 border-blue-500 absolute right-[50px]"> Sửa</button>
                </div>


            </div>

        </div>
    )

}
export default Tochuc