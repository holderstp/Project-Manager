import React from "react";
const Modal =({Close})=>{
    return (
        <div className=" inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto h-full w-full fixed ">
                        <div className=" mx-auto p-5 border w-[500px] shadow-lg rounded-md bg-white h-[200px] justify-center items-center mt-20 relative">
                            <div className="font-Roboto flex flex-col space-y-4 w-100 ">
                                <p>Thêm thành viên</p>
                                <hr />
                                <div className="flex flex-col ">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div className="w-[35%]">  Quản lý: <input type="radio" name="gt" value="ql" onClick={() => {
                                        }} /> </div>
                                        <div className="w-[35%]">  Giảng viên: <input type="radio" name="gt" value="gv" onClick={() => {
                                        }} /></div>
                                        <div className="w-[30%]">  Sinh viên: <input type="radio" name="gt" value="sv" onClick={() => {
                                        }} /> </div>
                                    </div>
                                    <div className="Flex ">
                                        <button className=" hover:underline text-sm w-5 border rounded-md  absolute right-[100px] top-[170px] w-[80px]" onClick={() => {
                                           Close(false)
                                        }}>Hủy</button>
                                        <button type="button" className=" bg-blue-500 text-white hover:underline text-sm w-5 border rounded-md w-[80px] absolute right-[10px] top-[170px]" onClick={() => {

                                            document.getElementById("modalquanly").classList.remove("hidden");
                                            document.getElementById("themquanly").classList.add("hidden");
                                            document.getElementById("1").classList.remove("hidden");
                                            document.getElementById("2").classList.add("hidden");
                                            document.getElementById("ql").classList.remove("hidden");
                                            document.getElementById("gv").classList.add("hidden");
                                            document.getElementById("sv").classList.add("hidden");
                                           
                                        }}>Tiếp tục</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )

}
export default Modal