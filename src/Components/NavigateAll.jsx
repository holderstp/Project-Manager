import React from "react";
function checktoken() {
    const token = localStorage.getItem("token")
   
    if(!token){
      window.location.href="/"
    }
  
  
  
  }
  export default checktoken