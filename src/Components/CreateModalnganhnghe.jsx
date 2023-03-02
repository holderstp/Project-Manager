import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const  Themthanhvien = ()=>{
    const [openmodal, setopen] = useState(false)
    return (
        <>
        <button className="text-xl absolute right-[110px] border rounded-md bg-blue-500 text-white h-10 w-[200px]" onClick={() => {
            setopen(true)
        }}>Thêm thành viên</button>
        {openmodal &&  (
             <div  className=" inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto h-full w-full">
             <div className=" mx-auto p-5 border w-[500px] shadow-lg rounded-md bg-white h-[200px] justify-center items-center mt-20">
                 <div className="font-Roboto flex flex-col space-y-4 w-100 ">
                     <p>Thêm thành viên</p>
                     <hr />
                     <div>
                         <div className="flex justify-center items-center space-x-4">
                             <div className="w-[35%]">  Quản lý: <input type="radio" name="gt" value="nam" onClick={() => {
                             }} /> </div>
                             <div className="w-[35%]">  Giảng viên: <input type="radio" name="gt" value="nam" onClick={() => {
                             }} /></div>
                             <div className="w-[30%]">  Sinh viên: <input type="radio" name="gt" value="nam" onClick={() => {
                             }} /> </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        )}
        </>
    )
}
export default Themthanhvien



